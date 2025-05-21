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

    // Hàm kiểm tra có phải là trang index không
    function isIndexPage() {
        return ['index.html', '', '/'].some(p => 
            window.location.pathname.endsWith(p)
        );
    }

    // Xử lý tất cả link trong navigation
    $("#navigation a").click(function(e) {
        var href = $(this).attr("href");
        
        // 1. Xử lý link có dạng index.html#section
        if (href.includes("index.html#")) {
            if (!isIndexPage()) {
                e.preventDefault();
                window.location.href = href;
                return false;
            }
            // Nếu đang ở index.html thì để phần dưới xử lý scroll
        }
        
        // 2. Xử lý link nội bộ (#section)
        if (href.startsWith("#")) {
            e.preventDefault();
            var target = href.substring(1);
            if (target) {
                var targetElement = $("#" + target);
                if (targetElement.length) {
                    $("html, body").animate({
                        scrollTop: targetElement.offset().top - 50
                    }, 800);
                    // Update URL nếu cần
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    } else {
                        window.location.hash = href;
                    }
                }
            }
            return false;
        }
        
        // 3. Các link khác sẽ chuyển trang bình thường
    });

    // Xử lý khi trang load với hash
    if (window.location.hash) {
        var target = $(window.location.hash);
        if (target.length) {
            setTimeout(() => {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 500);
            }, 100);
        }
    }
    

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

