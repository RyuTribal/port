import jQuery from "jquery";
import $ from "jquery";
import Typewriter from "typewriter-effect/dist/core";
import anime from "animejs/lib/anime.es.js";

$(window).on("load", function() {
  var typewriter = new Typewriter("#desc-intro", {
    loop: false
  });

  typewriter
    .typeString("Fullstack")
    .pauseFor(500)
    .deleteAll()
    .typeString(
      'F<span style="color: red;">r</span>ont-<span style="color: blue;">e</span>nd/back-end'
    )
    .start();

  var hamburger = document.querySelectorAll(".hamburger");
  console.log(hamburger.length);
  for (var i = 0; i < hamburger.length; i++) {
    hamburger[i].addEventListener(
      "click",
      function() {
        this.classList.toggle("active");
      },
      false
    );
  }

  $('.hamburger').click(function(){
      $('.nav-mobile-options-container').toggleClass("menu-active");
  })

});
