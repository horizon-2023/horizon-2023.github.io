!function(e){var t={common:{init:function(){e(window).on("load",(function(e){}));var t=e("#navbar-toggler");e(".offcanvas-collapse").css("top",e("#header").outerHeight()),e("body").hasClass("logged-in")&&e(".offcanvas-collapse").css("top",e("#header").outerHeight()+e("#wpadminbar").height()),e("#openclosemenu").on("click tap press",(function(o){e(".offcanvas-collapse").toggleClass("open"),e("#header").toggleClass("menu-open"),e("body").toggleClass("menu-toggled"),t.toggleClass("collapsed")})),e((function(){e("#mainmenu").smartmenus({collapsibleBehavior:"toggle",noMouseOver:!0,mainMenuSubOffsetX:-1,mainMenuSubOffsetY:4,subMenusSubOffsetX:6,subMenusSubOffsetY:-6})})),document.getElementById("openclosemenu").addEventListener("click",(function(t){var o=this,i=arguments.callee;o.removeEventListener("click",i),e("header").toggleClass(["bg-darknavy","bg-darknavy"]),setTimeout((function(){o.addEventListener("click",i)}),350)}))},finalize:function(){e(".btn-wrapper").find("a").addClass("btn btn-primary"),$event_filter_form=e("#event-filters"),e("select",$event_filter_form).on("change",(function(){$event_filter_form.submit()})),e(":radio, :checkbox, #reset-events",$event_filter_form).click((function(){$event_filter_form.submit()})),e("#reset-events",$event_filter_form).click((function(){$event_filter_form.trigger("reset"),$event_filter_form.submit()})),e("#event-filters").submit((function(){var t=e("#event-filters");return e.ajax({url:t.attr("action"),data:t.serialize(),type:t.attr("method"),beforeSend:function(t){e("#events-loading").show()},success:function(t){e("#events-loading").hide(),e("#events-wrapper").html(t),null==t&&e("#events-wrapper").html(e("#events-no-results").html())}}),!1})),$aoc=e("#aoc-modal"),$aoc.length>0&&($aoc.on("hidden.bs.modal",(function(){Cookies.set("horizon_show_aoc","hide")})),void 0===Cookies.get("horizon_show_aoc")&&Cookies.set("horizon_show_aoc",!0),"hide"==Cookies.get("horizon_show_aoc")?$aoc.modal("hide"):$aoc.modal("show"));var t=!e("body").hasClass("logged-in"),o=!1,i=e("#favourites-modal");if(i.find(".no-thanks").on("click tap press",(function(e){i.modal("hide")})),(e("body").hasClass("page-favourites")||e("body").hasClass("page-my-favourites"))&&t&&!o&&i.modal(),i.on("hidden.bs.modal",(function(){o=!0})),$signupAlert=e("#alertSignUp"),$signupAlert.length>0){var s=$signupAlert.hasClass("alert-dismissible");e("body").css("padding-top",$signupAlert.outerHeight()),e(".home header#header").css("top",$signupAlert.outerHeight()),e(".template-transparent header#header").css("top",$signupAlert.outerHeight()),$signupAlert.on("closed.bs.alert",(function(){s&&Cookies.set("horizon_show_signup","hide")})),e("#collapseSignUp").on("hidden.bs.collapse",(function(){e("#alertSignUp").css("position","fixed")})).on("shown.bs.collapse",(function(){e("#alertSignUp").css("position","absolute")})),s&&void 0===Cookies.get("horizon_show_signup")&&Cookies.set("horizon_show_signup",!0),s&&"hide"==Cookies.get("horizon_show_signup")?e("#alertSignUp").alert("close"):e("#alertSignUp").slideDown("fast",(function(){}))}e(".slideshow").slick({centerMode:!1,infinite:!0,variableWidth:!1,slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"}),e(".event-slider").slick({centerMode:!1,infinite:!0,variableWidth:!1,fade:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplaySpeed:800}),e(".block-eventslider").mouseover((function(){e(this).find(".event-slider").slick("play")})),e(".block-eventslider").mouseout((function(){e(this).find(".event-slider").slick("pause")})),e(".slider-show-1").slick({centerMode:!1,infinite:!0,variableWidth:!1,fade:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>"}),e(".slider-show-2").slick({centerMode:!1,infinite:!0,variableWidth:!1,fade:!0,slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]}),e(".slider-show-3").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:960,settings:{slidesToShow:1,slidesToScroll:1}}]}),e("img.svg").each((function(){var t=jQuery(this),o=t.attr("id"),i=t.attr("class"),s=t.attr("src");e.get(s,(function(e){var s=jQuery(e).find("svg");void 0!==o&&(s=s.attr("id",o)),void 0!==i&&(s=s.attr("class",i+" replaced-svg")),!(s=s.removeAttr("xmlns:a")).attr("viewBox")&&s.attr("height")&&s.attr("width")&&s.attr("viewBox","0 0 "+s.attr("height")+" "+s.attr("width")),t.replaceWith(s)}),"xml")})),e('a[href*="#"]').not('[data-toggle="collapse"]').not('[href="#"]').not('[href="#0"]').click((function(t){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=e(this.hash);(o=o.length?o:e("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),e("html, body").animate({scrollTop:o.offset().top},1e3,(function(){var t=e(o);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()})))}}))}},home:{init:function(){console.log("Welcome to Horizon Festival"),e(".artist-teaser, .event-teaser").matchHeight({byRow:!0})}},contact:{init:function(){}},single_event:{init:function(){console.log("Event!"),e(".carousel-video-modal").detach().appendTo("body"),e(".carousel-video-modal").on("hide.bs.modal",(function(t){e(".carousel-video-modal iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),e(".event-carousel").slick({centerMode:!0,infinite:!0,variableWidth:!0,lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,arrows:!0,prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:576,settings:{centerMode:!1,variableWidth:!1,slidesToShow:1,slidesToScroll:1}}]});function t(t){var o=t.find(".marker"),i={zoom:14,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#3c3f49"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{weight:"7.97"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#dcdcdc"},{visibility:"on"}]}],center:new google.maps.LatLng(0,0),mapTypeControl:!1,scaleControl:!0,zoomControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},s=new google.maps.Map(t[0],i);return s.markers=[],o.each((function(){!function(e,t){var o,i=new google.maps.LatLng(e.attr("data-lat"),e.attr("data-lng")),s={url:stylesheet_directory_uri+"/dist/images/icon-PIN.svg",scaledSize:new google.maps.Size(26,40)},n=new google.maps.Marker({position:i,map:t,icon:s});t.markers.push(n),e.html()&&(o=new google.maps.InfoWindow({content:e.html()}),google.maps.event.addListener(n,"click",(function(){o&&o.close(),o.open(t,n)})))}(e(this),s)})),function(t){var o=new google.maps.LatLngBounds;e.each(t.markers,(function(e,t){var i=new google.maps.LatLng(t.position.lat(),t.position.lng());o.extend(i)})),1===t.markers.length?(t.setCenter(o.getCenter()),t.setZoom(14)):t.fitBounds(o)}(s),s}console.log(stylesheet_directory_uri);e(".acf-map").each((function(){t(e(this))}))}}},o={fire:function(e,o,i){var s=t;o=void 0===o?"init":o,""!==e&&s[e]&&"function"==typeof s[e][o]&&s[e][o](i)},loadEvents:function(){o.fire("common"),e.each(document.body.className.replace(/-/g,"_").split(/\s+/),(function(e,t){o.fire(t),o.fire(t,"finalize")})),o.fire("common","finalize")}};e(document).ready(o.loadEvents)}(jQuery);