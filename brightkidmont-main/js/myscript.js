// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 30);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  };

  // Trigger when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(document.querySelector(".stats-section"));
});



$(document).ready(function () {
  $('.testimonial-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav.bright-header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$(".banner-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 800,
  nav: true,
  dots: true,
  navText: ["&#10094;", "&#10095;"] // left & right arrows
});
// $(".services-section").owlCarousel({
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 4000,
//   smartSpeed: 800,
//   margin: 20, // spacing between cards
//   nav: false, // no arrows
//   dots: false, // no dots
//   responsive: {
//     0: {
//       items: 1
//     }, // mobile
//     768: {
//       items: 2
//     }, // tablet
//     1024: {
//       items: 3
//     } // desktop
//   }
// });


// Sticky and Go-top
(function ($, window) {

  function Temp(el, options) {
    this.el = $(el);
    this.init(options);
  }

  Temp.DEFAULTS = {
    sticky: true
  }

  Temp.prototype = {
    init: function (options) {
      var base = this;
      base.window = $(window);
      base.options = $.extend({}, Temp.DEFAULTS, options);
      base.menuWrap = $('#header');
      base.stickyWrap = $('#header');
      base.goTop = $('<button class="go-to-top" id="go-to-top"><i class="fa fa-arrow-up"></i></button>').appendTo(base.el);

      // Sticky
      if (base.options.sticky) {
        base.sticky.stickySet.call(base, base.window);
      }

      // Scroll Event
      base.window.on('scroll', function (e) {
        if (base.options.sticky) {
          base.sticky.stickyInit.call(base, e.currentTarget);
        }
        base.gotoTop.scrollHandler.call(base, e.currentTarget);
      });

      // Click Handler Button GotoTop
      base.gotoTop.clickHandler(base);
    },
    sticky: {
      stickySet: function () {
        var menuWrap = this.menuWrap,
          offset;
        if (menuWrap.length) {
          offset = menuWrap.offset().top;
          $.data(menuWrap, 'data', {
            offset: offset,
            height: menuWrap.outerHeight(true)
          });
        }
      },
      stickyInit: function (win) {
        var base = this,
          data;
        if (base.menuWrap.length) {
          data = $.data(base.menuWrap, 'data');
          base.sticky.stickyAction(data, win, base);
        }
      },
      stickyAction: function (data, win, base) {
        var scrollTop = $(win).scrollTop();
        if (scrollTop > data.offset && $(document).height() > ($(win).height() + 250)) {
          if (!base.stickyWrap.hasClass('sticky')) {
            base.stickyWrap.addClass('sticky');
          }
        } else {
          if (base.stickyWrap.hasClass('sticky')) {
            base.stickyWrap.removeClass('sticky');
          }
        }
      }
    },
    gotoTop: {
      scrollHandler: function (win) {
        $(win).scrollTop() > 200 ?
          this.goTop.addClass('go-top-visible') :
          this.goTop.removeClass('go-top-visible');
      },
      clickHandler: function (self) {
        self.goTop.on('click', function (e) {
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 800, function () {
            self.goTop.removeClass('go-top-visible'); // hide after reaching top
          });
        });
      }
    }
  }

  /* Temp Plugin
   * ================================== */
  $.fn.Temp = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('Temp'),
        options = typeof option == 'object' && option;
      if (!data) {
        $this.data('Temp', new Temp(this, options));
      }
    });
  }

})(jQuery, window);

$(document).ready(function () {
  $('.news-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoHeight: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoplaySpeed: 3000,
    navText: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});