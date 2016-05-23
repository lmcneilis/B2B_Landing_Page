//------------------------------------------------------
// Cookie Scripts
//------------------------------------------------------

$(document).ready(function() {
    $.cookie("visited");
     
        if ($.cookie("visited") != "true") {
            $.cookie('visited', 'true');
        // Menu opening script for devices over 400px
            if ( $(window).width() > 400 ) {
                    $("body > nav").css("margin-left", "0px").delay(1000).animate({"margin-left": "-300px"}, 250);
                    $(".wrapper").delay(500).animate({"left":"0"}, 250);
            }
            //Menu open script for small devices
            else {
                    $("body > nav").css("left", "0").delay(500).animate({"left": "-100%"}, 250);
            }
        };
        
        //console.log($.cookie("visited"));
});







//------------------------------------------------------
// MENU SCRIPTS
//------------------------------------------------------


$(document).ready(function() {
    // Menu opening script for devices over 400px
    if ( $(window).width() > 400 ) {        
            $("header #hamburger").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                    $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                    $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                    $("body > nav, #hamburger").addClass("icon-menuHamburger").removeClass("icon-remove");
                } else {
                    $("body > nav").stop().animate({"margin-left":"0px"}, 250);
                    $("body > header").stop().css("min-width", "100vw").animate({"margin-left":"300px"}, 250);
                    $(".wrapper").stop().css("min-width", "100vw").animate({"left":"300px"}, 250);
                    $("body > nav, #hamburger").removeClass("icon-menuHamburger").addClass("icon-remove");
                }
                $("body > nav, #hamburger").toggleClass("open");
                return false;
            });

            $(".wrapper").click(function() {  
                $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                $("body > nav, #hamburger").removeClass("open").addClass("icon-menuHamburger").removeClass("icon-remove");
            });
    }
    //Menu open script for small devices
    else {        
            $("header #hamburger").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "-100%"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                    $("body > nav, #hamburger").addClass("icon-menuHamburger").removeClass("icon-remove");
                } else {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "0"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                    $("body > nav, #hamburger").removeClass("icon-menuHamburger").addClass("icon-remove");
                }
                $("body > nav, #hamburger").toggleClass("open");
                return false;
            });
    }
});






//------------------------------------------------------
// Mobile Orientation Reload
//------------------------------------------------------
window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0: window.location.reload(); 
            break; 
            case 90: window.location.reload(); 
            break; 
            case -90: window.location.reload(); 
            break; } 
};







//------------------------------------------------------
// Validation
//------------------------------------------------------


//jQuery Validation Boot
$(document).ready(function() {
    $(".form-container").validate();
});











//------------------------------------------------------
// International Phone Numbers
//------------------------------------------------------


$(document).ready(function(){
  $("#phone").intlTelInput({
    preferredCountries: ["gb"],
    utilsScript: "https://s3-eu-west-1.amazonaws.com/bppassets/public/assets/js/utils.js",
  });
  $("form").submit(function() {
    $("#hidden-phone").val($("#phone").intlTelInput("getNumber"));
  });
});







//------------------------------------------------------
// Footer Menu scripts
//------------------------------------------------------

$(document).ready(function() {
   $("footer nav > ul > li > a").click(function(e){
        if( $(this).siblings().size() > 0 ) {
            e.preventDefault();    
        };
        
        $("footer nav").css("margin-left", "0");
       
      if ( $(this).parent("li").hasClass("footOpen") ) {
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "none");
          $(this).parent("li").removeClass("footOpen");
      } 
       else {
          $(this).parent("li").addClass("footOpen");
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "flex");
       }
   });
   $("footer .more").click(function(e){
      e.preventDefault();
       
      if ( $("footer nav").hasClass("footOpen") ) {
          $("footer nav > ul").css("display", "none");
          $("footer nav").removeClass("footOpen");
          $(this).removeClass("footOpen");
      } 
       else {
          $("footer nav > ul").css("display", "flex");
          $("footer nav").addClass("footOpen");
          $(this).addClass("footOpen");
       }
   });
});







//------------------------------------------------------
// Unslider scripts
//------------------------------------------------------
jQuery(document).ready(function($) {
			$('.slider').unslider({
				autoplay:false,
				nav: false,
				arrows: true
			});
		});







//------------------------------------------------------
// On page scroll
//------------------------------------------------------

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
