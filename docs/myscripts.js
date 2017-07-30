// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

(function($) {
  $(document).ready(function() {
    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function() {
      $(window).scroll(function() {
        var scroll = $(this).scrollTop() / 100;
        if ($(this).scrollTop() < 1000) {
          $("#social-media").css("opacity", 1 - scroll / 2);
        }
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 100) {
          $(".navbar").fadeIn();
        } else {
          $(".navbar").fadeOut();
        }

        $(".black-title").each(function() {
          if (isScrolledIntoView($(this))) {
            addBlackFontClass(true);
          }
        });
        $(".white-title").each(function() {
          if (isScrolledIntoView($(this))) {
            addBlackFontClass(false);
          }
        });
      });
    });
    function addBlackFontClass(b) {
      var elList = [".navbar-brand", ".page-scroll", ".fa-bars", ".white-text", ".soc-med"];
      for (var i in elList) {
        if (b) {
          $(elList[i]).each(function() {
            console.log($(this));
            $(this).addClass("black-font");
          });
        } else {
          $(elList[i]).each(function() {
            $(this).removeClass("black-font");
          });
        }
      }
    }

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return elemBottom >= docViewBottom && elemTop < docViewTop + 10;
    }
  });
})(jQuery);
