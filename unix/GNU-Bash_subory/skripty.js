// -- kompiluj-js.sh: automaticky generováno → neupravujte ručně:

// -- frantovo.js – začátek

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
var bF = {
	nsResolver: function(prefix) {
		var ns = {
			"h": "http://www.w3.org/1999/xhtml",
			"mathml": "http://www.w3.org/1998/Math/MathML"
		};
		return ns[prefix] || null;
	},
	xpath: function(doc, xpath) {
		return doc.evaluate(xpath, doc, bF.nsResolver, XPathResult.ANY_TYPE, null);
	},
	xpathString: function(doc, xpath) {
		return doc.evaluate(xpath, doc, bF.nsResolver, XPathResult.STRING_TYPE, null).stringValue;
	},
	nastavKanonickéURL: function() {
		var url = bF.xpathString(document, "/h:html/h:head/h:link[@rel='canonical']/@href");

		if (url && url !== window.location.toString()) {
			history.replaceState(null, null, url);
		}
	},
	ajax: function(url, data, funkceÚspěch) {
		var a = new XMLHttpRequest();
		if (a.readyState === 4 || a.readyState === 0) {
			a.open("POST", url, true);
			a.onreadystatechange = function() {
				if (a.readyState === 4) {
					funkceÚspěch(a);
				}
			};
			a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			a.overrideMimeType('text/xml');
			a.send(data);
		}
	},
	vymažObsah: function(element) {
		var rozsah = document.createRange();
		rozsah.selectNodeContents(element);
		rozsah.deleteContents();
	},
	urlOdesláníKomentáře: "/odeslání-komentáře", // TODO: základní cesta
	odešliKomentář: function(akce) {
		var f = document.getElementById("formulářKomentáře");
		var data = bFe.serializujFormulář(f) + "&akce=" + encodeURIComponent(akce);

		bF.ajax(bF.urlOdesláníKomentáře, data, function(a) {
			document.getElementById("náhledKomentáře").style.display = "block";
			var prostorNáhledu = document.getElementById("prostorNáhleduKomentáře");
			bF.vymažObsah(prostorNáhledu);

			var odpověďXHTML = a.responseXML;
			var odpověďElement = odpověďXHTML.getElementById("obsah");
			odpověďElement.removeAttribute("id");
			prostorNáhledu.appendChild(document.importNode(odpověďElement, true));

			if (akce === "uložit" && /komentář-[0-9]+/.test(bF.xpathString(odpověďXHTML, "//h:div[@class='komentář']/@id"))) {
				f.reset();
			}

			// obnovíme anti-spam:
			var novéId = bF.xpathString(odpověďXHTML, "//h:div[@class='antiSpam']/h:span[@class='novéId']/text()");
			var nováOtázka = bF.xpathString(odpověďXHTML, "//h:div[@class='antiSpam']/h:span[@class='nováOtázka']/text()");
			if (novéId && nováOtázka) {
				f.kontrolniOtazka.value = "";
				document.getElementById("kontrolniOtazkaId").value = novéId;
				var kontrolniOtazkaLabel = document.getElementById("kontrolniOtazkaLabel");
				bF.vymažObsah(kontrolniOtazkaLabel);
				kontrolniOtazkaLabel.appendChild(document.createTextNode(nováOtázka));
			}
		});

		return false;
	},
	odpovědětNaKomentář: function(id) {
		document.getElementById("formulářKomentáře").reakceNa.value = id;
		bF.xpath(document, "//h:tr[h:td[h:input[@id='reakceNa']]]").iterateNext().style.display = "table-row";
		window.location = "#formulářKomentáře";
	},
	zrušitReakciNaKomentář: function() {
		document.getElementById("formulářKomentáře").reakceNa.value = "";
		bF.xpath(document, "//h:tr[h:td[h:input[@id='reakceNa']]]").iterateNext().style.display = "none";
	}

};
window.addEventListener("load", function() {
	bF.nastavKanonickéURL();
});
// @license-end

// -- frantovo.js – konec


// -- správa.js – začátek

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
var bFs = {
	urlEditaceČlánku: "/autor/editace-článku", // TODO: základní cesta
	setNáhled: function(element) {
		var prostorNáhledu = document.getElementById("prostorNáhledu");
		prostorNáhledu.innerHTML = "";
		prostorNáhledu.appendChild(element);
	},
	zobrazNáhled: function() {
		var data = bFe.serializujFormulář(document.getElementById("formulářEditace")) + "&akce=nahled";
		bF.ajax(bFs.urlEditaceČlánku, data, function(a) {
			var odpověďXHTML = a.responseXML;
			bFs.setNáhled(document.importNode(odpověďXHTML.getElementById("obsah"), true));
		});
	},
	uložČlánek: function(nováVerze) {
		var f = document.getElementById("formulářEditace");
		if (nováVerze) {
			f.verze.value = "";
		}
		var data = bFe.serializujFormulář(f) + "&akce=ulozit";
		bF.ajax(bFs.urlEditaceČlánku, data, function(a) {
			var odpověďXHTML = a.responseXML;
			bFs.setNáhled(document.importNode(odpověďXHTML.getElementById("obsah"), true));

			var id = bF.xpathString(odpověďXHTML, "//h:div[@class='metadataČlánku']/h:span[@class='id']/text()");
			var verze = bF.xpathString(odpověďXHTML, "//h:div[@class='metadataČlánku']/h:span[@class='verze']/text()");
			if (id) {
				history.replaceState(null, null, bFs.urlEditaceČlánku + "?id=" + encodeURIComponent(id) + "&verze=" + encodeURIComponent(verze));
				f.id.value = id;
				f.verze.value = verze;
			}
		});
	},
	/** Klávesové zkratky */
	isCtrl: false,
	aktivujKlávesovéZkratky: function() {
		document.addEventListener("keyup", function(e) {
			if (e.which === 17) {
				bFs.isCtrl = false;
			}
		});

		document.addEventListener("keydown", function(e) {
			if (e.which === 17) {
				bFs.isCtrl = true;
			}

			if (bFs.isCtrl) {
				if (e.which === 13) {
					/** ctrl+enter → zobrazíme náhled */
					bFs.zobrazNáhled();
					return false;
				}
			}
			return true;
		});
	}
};
// @license-end

// -- správa.js – konec


// -- externí.js – začátek

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
var bFe = {
	serializujFormulář: function(form) {
		/**
		 * Převzato z: http://code.google.com/p/form-serialize/
		 * Původní licence: MIT
		 * --------------------
		 * The MIT License (MIT)
		 * 
		 * Copyright (c) <year> <copyright holders>
		 * 
		 * Permission is hereby granted, free of charge, to any person obtaining a copy
		 * of this software and associated documentation files (the "Software"), to deal
		 * in the Software without restriction, including without limitation the rights
		 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		 * copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 *
		 * The above copyright notice and this permission notice shall be included in
		 * all copies or substantial portions of the Software.
		 *
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		 * THE SOFTWARE.		 
		 */
		if (!form || form.nodeName !== "form") {
			return;
		}
		var i, j, q = [];
		for (i = form.elements.length - 1; i >= 0; i = i - 1) {
			if (form.elements[i].name === "") {
				continue;
			}
			switch (form.elements[i].nodeName) {
				case 'input':
					switch (form.elements[i].type) {
						case 'text':
						case 'hidden':
						case 'password':
						case 'button':
						case 'reset':
						case 'submit':
							q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
							break;
						case 'checkbox':
						case 'radio':
							if (form.elements[i].checked) {
								q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
							}
							break;
						case 'file':
							break;
					}
					break;
				case 'textarea':
					q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
					break;
				case 'select':
					switch (form.elements[i].type) {
						case 'select-one':
							q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
							break;
						case 'select-multiple':
							for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
								if (form.elements[i].options[j].selected) {
									q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
								}
							}
							break;
					}
					break;
				case 'button':
					switch (form.elements[i].type) {
						case 'reset':
						case 'submit':
						case 'button':
							q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
							break;
					}
					break;
			}
		}
		return q.join("&");
	}

};
// @license-end

// -- externí.js – konec

