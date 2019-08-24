import $ from "jquery";

$(window).on("load", function() {
  var sections = $("section"),
    nav = $("nav"),
    nav_height = nav.outerHeight();
  $(window).on("scroll", function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 1,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("selected");
        sections.removeClass("selected");

        $(this).addClass("selected");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("selected");
      }
    });
  });
  $(document.body).on("touchmove", function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 1,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("selected");
        sections.removeClass("selected");

        $(this).addClass("selected");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("selected");
      }
    });
  });

  nav.find("a").on("click", function() {
    $("a").removeClass("selected");
    $(this).addClass("selected");
    var $el = $(this),
      id = $el.attr("href");

    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - nav_height
      },
      500
    );

    return false;
  });
});
