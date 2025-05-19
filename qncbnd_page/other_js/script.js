$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["BOYNEXTDOOR's Blog", "Support BOYNEXTDOOR", "We bring you the contents of BOYNEXTDOOR!"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true,
        startDelay: 1000,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav: false,
        responsive:{
            0:{ items:1 },
            600:{ items:3 },
            1000:{ items:5 }
        }
    });

    // Kiểm tra link có thuộc trang hiện tại không
    function isSamePage(href) {
      return href.startsWith("#") || 
             href.startsWith(window.location.pathname + "#") || 
             href === "";
    }

    $("#navigation a").click(function(e) {
      var href = $(this).attr("href");
  
      if (!isSamePage(href)) {
        return true; // Chuyển trang
      }
  
      e.preventDefault();
  
      // Xử lý scroll
      var target = href.split("#")[1] || "";
      if (target) {
        var targetElement = $("#" + target);
        if (targetElement.length) {
          $("html, body").animate({
            scrollTop: targetElement.offset().top - 50
          }, 800);
        }
      }
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
            body.css("padđing-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padđing-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $('.navbar-nav a').click(function() {
      // Tự động đóng navbar mobile sau khi click
      $('.navbar-collapse').collapse('hide');
    });

});

