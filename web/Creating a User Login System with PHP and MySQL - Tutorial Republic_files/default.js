function sendFeedback(){var e=$("#user-name").val(),t=$("#user-email").val(),a=$("#page-url").val(),s=$("#description").val(),i="user-name="+e+"&user-email="+t+"&page-url="+a+"&description="+s;if(0==$.trim(s).length)return $("#feedback-error").css("display","block"),!1;$("#feedback-error").css("display","none"),$("#feedback-form").css("display","none"),$("#response").html("<h2>Thank you for your feedback.</h2>"),$.ajax({url:"/lib/assets/send-feedback.php",type:"POST",data:i,success:function(e){}})}function urlEncode(){var e=$("#data").val();$.ajax({url:"/lib/assets/urlencode.php",type:"GET",data:{data:e},success:function(e){$("#data").val(e)}})}function urlDecode(){var e=$("#data").val();$.ajax({url:"/lib/assets/urldecode.php",type:"GET",dataType:"html",data:{data:e},success:function(e){$("#data").val(e)}})}$(document).ready(function(){var e=$("#myNav a"),t=location.href.toLowerCase();e.each(function(){t.indexOf(this.href.toLowerCase())>-1&&(e.removeClass("selected"),$(this).addClass("selected"))});var a=$("li.tree ul").hide();$(".expand-all").click(function(){return a.slideDown(),$(this).parent().find("li.tree").addClass("expand"),!1}),$(".collapse-all").click(function(){return a.slideUp(),$(this).parent().find("li.tree").removeClass("expand"),!1}),$("li.tree a").hasClass("selected")&&($(".selected").parents("ul").show(),$(".selected").parents("li.tree").addClass("expand")),$("li.tree .shorthand").click(function(){return $(this).next("ul").slideToggle(),$(this).parent("li").toggleClass("expand"),!1}),$(".toggle").click(function(){$(".order-by-alphabet, .order-by-category").toggle(),$(this).text("Order by Alphabet"==$(this).text()?"Order by Category":"Order by Alphabet")});var s=$(location).attr("href").split("#");$("input#page-url").val(s[0]),$(".feedback").click(function(){$(".report-error").slideDown("slow")}),$(".report-error .close").click(function(){$(this).parents(".report-error").slideUp("slow")}),$(".drop-down > a").click(function(){$(this).siblings("ul").slideToggle(150)}),$(".drop-down ul").hover(function(){$(this).show(),$(".drop-down > a").addClass("active")},function(){$(this).delay(100).slideUp(150),$(".drop-down > a").removeClass("active")}),$(document).bind("click, mouseout",function(e){$(e.target).parents().hasClass("drop-down")||$(".drop-down ul").slideUp(150)}),$("a, input, textarea, button, :focus").bind("focus",function(e){$(e.target).parents().hasClass("drop-down")||$(".drop-down ul").hide()}),$(".display-none").click(function(){$(this).css("display","none")}),$(".visibility-hidden").click(function(){$(this).css("visibility","hidden")}),$(".reset-all").click(function(){$(".demo-box div").css({display:"block",visibility:"visible"})}),$(".codebox ul li:nth-child(2n)").addClass("alt"),$(".codebox .box-size i").on("click",function(){var e=$(this).parents(".codebox").find("pre");e.toggleClass("scroll"),Prism.highlightElement(e.children("code")[0]),$(this).parents(".codebox").find(".code-style .active").trigger("click"),$(this).parents(".box-size").toggleClass("maximized"),$(this).parents(".box-size").hasClass("maximized")?$(this).attr("title","Minimize"):$(this).attr("title","Maximize")}),$(".calculate-button input").click(function(){var e=$("textarea").val();if($(this).hasClass("with-space")){var t=e.length;alert(t)}else if($(this).hasClass("trimmed-space")){var a=$.trim(e).length;alert(a)}else if($(this).hasClass("without-space")){var s=e.replace(/ /g,"").length;alert(s)}}),$("#myCanvas").mousemove(function(e){var t="("+Math.round(e.pageX-$(this).offset().left)+","+Math.round(e.pageY-$(this).offset().top)+")";$(".canvas-coordinates").text(t)});var i=$(".leftcolumn, .site-search, .social");function o(){$(i).is(":visible")&&$(".backdrop").show()}$(".open-menu").click(function(){$(i).not(".leftcolumn").hide(),$(".backdrop").toggle(),$(".leftcolumn").toggle(),o()}),$(".open-share").click(function(){$(i).not(".social").hide(),$(".backdrop").toggle(),$(".social").toggle(),o()}),$(".open-search").click(function(){$(i).not(".site-search").hide(),$(".backdrop").toggle(),$(".site-search").toggle(),$(".site-search").find(".search").focus(),o()}),$(".backdrop").click(function(){$(i).hide(),$(".backdrop").hide()}),$(".code-style").each(function(){$(this).first("span").addClass("active")}),$(".code-style span").click(function(){var e=$(this).attr("data-target");$(this).siblings().removeClass("active"),$(this).addClass("active"),targetCode=$(this).parents(".codebox").find("pre").eq(e),$(this).parents(".codebox").find("pre").not(targetCode).hide(),targetCode.show(),Prism.highlightElement(targetCode.children("code")[0]);var t="../examples/bin/download-source.php?topic=php&file="+$(this).attr("data-url");$(this).parents(".codebox-title").find("a.download-btn").attr("href",t)})});$.get("/lib/assets/get-code.php",function(t){"IN"===$.trim(t)?$(".snippets").html('<a rel="nofollow" href="/cool-gadgets-on-amazon.php" target="_blank"><img src="/lib/images/deals.png" alt="Cool Gadgets on Amazon"></a>'):$(".snippets").html('<a href="/snippets/gallery.php" target="_blank"><img src="/lib/images/bootstrap-code-snippets.png" alt="Bootstrap UI Design Templates"></a>')});