// vim:enc=utf-8:fenc=utf-8:ts=2:sw=2:

function pridej_window_open(r) {
	window.open(r,'pridej','scrollbars=yes,menubar=no,width=1040,height=740,resizable=yes,toolbar=no,location=no,status=no');
	return false;
}

function pridej_click_direct(u, t) {
	var r  = 'https://pridej.cz/pridat-stranku';
	r += '?url='+encodeURIComponent(u);
	r += '&title='+encodeURIComponent(t);
	return pridej_window_open(r);
}

function pridej_click(obj, doc) {
	return pridej_click_direct(doc.URL, doc.title);
}

function pridej_click_rss(obj, rss) {
	var r  = 'https://pridej.cz/pridat-rss';
	r += '?url='+encodeURIComponent(rss);
	return pridej_window_open(r);
}
