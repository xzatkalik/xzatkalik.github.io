var iinfo=iinfo||{};iinfo.page=iinfo.page||{},iinfo.page.platformSwitcher=iinfo.page.platformSwitcher||{},iinfo.layers=iinfo.layers||{},iinfo.layers.heurekaTab=iinfo.layers.heurekaTab||{},iinfo.layers.heurekaTab.zIndex=-1,$(document).ready(function(){$(".js-navigation-mobile-trigger").bind("click touchend",function(event){if(event.preventDefault(),event.stopPropagation(),iinfo.layers.heurekaTab.element=$("#heurekaTableft"),iinfo.layers.heurekaTab.isVisible=0<iinfo.layers.heurekaTab.element.length,iinfo.layers.heurekaTab.isVisible&&-1===iinfo.layers.heurekaTab.zIndex&&(iinfo.layers.heurekaTab.zIndex=iinfo.layers.heurekaTab.element.css("z-index")),iinfo.page.platformSwitcher.element=$(".js-platform-switcher"),iinfo.page.platformSwitcher.isVisible=0<iinfo.page.platformSwitcher.element.length,iinfo.breakpoints.navigationMobileQueryMax.matches){if($('.js-navigation-mobile-transfer-source:not("[data-navigation-mobile-transfer-completed=true]")').each(function(){$("#js-navigation-mobile-"+$(this).attr("data-navigation-mobile-transfer-position")).append($(this).html()),$(this).attr("data-navigation-mobile-transfer-completed","true")}),iinfo.page.platformSwitcher.isVisible){$('.js-navigation-platform-switcher-source:not("[data-navigation-mobile-transfer-completed=true]")').each(function(){$(".js-navigation-mobile-platform-switcher").append($(this).html()),$(this).attr("data-navigation-mobile-transfer-completed","true")})}$("#js-navigation-mobile").toggleClass("js-element-hidden"),$(".js-navigation-header").hasClass("design-navigation--header--unfolded")?(iinfo.layers.heurekaTab.isVisible&&(iinfo.layers.heurekaTab.element.css("z-index",iinfo.layers.heurekaTab.zIndex),iinfo.layers.heurekaTab.element.parent().css("z-index",iinfo.layers.heurekaTab.zIndex)),$(".js-navigation-header").removeClass("design-navigation--header--unfolded"),$("#js-navigation-mobile-overlay").addClass("js-element-hidden")):(iinfo.layers.heurekaTab.isVisible&&(iinfo.layers.heurekaTab.element.css("z-index","-1"),iinfo.layers.heurekaTab.element.parent().css("z-index","-1")),$(".js-navigation-header").addClass("design-navigation--header--unfolded"),$("#js-navigation-mobile-overlay").length<1?($("body").append('<div id="js-navigation-mobile-overlay" class="design-overlay--full-page design-overlay"></div>'),$("#js-navigation-mobile-overlay").bind("click",function(){$(".js-navigation-header").removeClass("design-navigation--header--unfolded"),$("#js-navigation-mobile").toggleClass("js-element-hidden"),$("#js-navigation-mobile-overlay").addClass("js-element-hidden")})):$("#js-navigation-mobile-overlay").removeClass("js-element-hidden"))}})});iinfo.headerNavigationBar=new NavigationResponsive({classes:{addItemToMenu:"js-add-to-menu",buttonSeeMore:"js-navigation-hamburger",menuInHamburger:"header-navigation-bar--added-to-menu list-reset",removeItemToMenu:"js-remove-to-menu"},cssRules:{addItemToMenu:".js-add-to-menu",buttonSeeMore:".js-navigation-hamburger",items:".js-navigation-list-main .navigation__item",menuInHamburger:".js-navigation-list-others",removeItemToMenu:".js-remove-to-menu",wrapper:".js-design-navigation-main-wrapper",wrapperContent:".js-design-navigation-main"},turnOffBreakpointMin:767}),iinfo.headerNavigationBar.init();