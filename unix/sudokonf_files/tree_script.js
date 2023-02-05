/* javasskripty pro menu v leve liste */

	function showMenu(a, menu_type) {
		b = menu_type + "plus" + a;
		if (document.getElementById(menu_type+a).className == "hide") {

			document.getElementById(b).className = "minus";
			document.getElementById(menu_type+a).className = "show";

		} else {

			document.getElementById(b).className = "plus";
			document.getElementById(menu_type+a).className = "hide";
		}
	}

	all = 0;

	function showAll(menu_type) {


		if (all == 0) {

			document.getElementById(menu_type+"plusAll").className = "minus";

			for (i=1;i<130;i++) {

				b = menu_type + "plus" + i;

				if( (document.getElementById(b) != null)  &&
 				      (document.getElementById(b).className != "odsad") )  {

						document.getElementById(b).className = "minus";
						document.getElementById(menu_type+i).className = "show";
						if(all == 0)   {
						//alert(i);
							loadSubMenu(i);
							}

				}
			}

			all = 1;

		} else {

			document.getElementById(menu_type+"plusAll").className = "plus";

			for (i=1;i<130;i++) {

				b = menu_type+"plus" + i;

				if( (document.getElementById(b) != null)  &&
				     (document.getElementById(b).className != "odsad") )  {

					document.getElementById(b).className = "plus";
					document.getElementById(menu_type+i).className = "hide";

				}
			}
		all = 0;
		}

	}
	
	
		function loadSubMenu (parentId) {
  		if (!document.getElementById||!document.createElement) return;  		
  		var rootTag = document.getElementById('s'+parentId);
  		
    			requestHttp (parentId, rootTag);
    } 
			
			
/* ajax menu */
			
function requestHttp(parentId, rootElement) {

  var url = slink + 'category_filler.php?id_parent='+escape(parentId)+'&type=s&lang='+lang;
  
  //alert(url);
  
  var request = null;
  try { request = new XMLHttpRequest();}
  catch(e) {
    try { request = new ActiveXObject('Microsoft.XMLHTTP'); }
    catch(e) {}
  }
  if(request != null) {
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if (request.status == 200) {
        
        //alert(rootElement.getAttribute("id"));
        
        rootElement.innerHTML = request.responseText;
        
        var me = document.getElementById('splus' + parentId);
        me.className = 'minus';
        rootElement.className = 'show';
        me.setAttribute('onclick','showMenu(' + parentId + ',\'s\')');
        
                
        //alert(me.getAttribute("id"));
        
        /*var xmldoc = request.responseXML;
        var re = xmldoc.documentElement;*/
                
        //alert(request.responseText);
        /*rootElement.innerHTML = '<b style="color:red;">XXXX</b>';
        rootElement.className = 'show';
        rootElement.style.display = 'block';*/
        
       /* var menuStr = request.responseText; 
        rootElement.outerHtml = request.responseText;
        rootElement.className = 'show';
        //rootElement.style.display = 'block';
        */
        //document.getElementById('splus' + parentId).className = "minus";
        
        //alert(rootElement.innerHtml);
               
          /*if (request.responseText.charAt(0) == '<') { */
           /* ul.innerHTML = request.responseText; */
            
         
        }
      }
    }
    request.open('GET', url, true);
    request.send(null);
  }
} 			
			
	
