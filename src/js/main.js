import jQuery from "jquery";
import $ from "jquery";
import Typewriter from "typewriter-effect/dist/core";
import anime from "animejs/lib/anime.es.js";

$(window).on("load", function() {
  var typewriter = new Typewriter("#desc-intro", {
    loop: false,
  });

  typewriter
    .typeString("Fullstack")
    .pauseFor(500)
    .deleteAll()
    .typeString(
      'F<span style="color: red;">r</span>ont-<span style="color: blue;">e</span>nd/back-end'
    )
    .start();
    
    var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
   
    sections.each(function() {
      var top = $(this).offset().top - nav_height - 1,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('selected');
        sections.removeClass('selected');
   
        $(this).addClass('selected');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('selected');
      }
    });
  });
  
  nav.find('a').on('click', function () {
      $('a').removeClass("selected");
    $(this).addClass("selected");
    var $el = $(this)
      , id = $el.attr('href');
   
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);
   
    return false;
  });
});

