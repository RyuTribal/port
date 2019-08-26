import jQuery from "jquery";
import $ from "jquery";
import Typewriter from "typewriter-effect/dist/core";
import anime from "animejs/lib/anime.es.js";

$(window).on("load", function() {
  $(".submit-button").click(function() {
    $(".error-field").removeClass("error-active");
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var inputEmpty = false;
    console.log(message);
    if (name.replace(/\s/g, "") == "") {
      $("#name")
        .parent()
        .children(".error-field")
        .addClass("error-active");
      inputEmpty = true;
    }
    if (email.replace(/\s/g, "") == "") {
      $("#email")
        .parent()
        .children(".error-field")
        .addClass("error-active");
      inputEmpty = true;
    }
    if (message.replace(/\s/g, "") == "") {
      $("#message")
        .parent()
        .children(".error-field")
        .addClass("error-active");
      inputEmpty = true;
    }
    if (inputEmpty == true) {
      console.log("empty");
    } else {
      $('.emailOverlay').addClass("email-sending");
      $('body').css("overflow", "hidden");
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      var inputData = {
        name: name,
        email: email,
        message: message
      };
      $.ajax({
        type: "POST",
        url: "https://port-api.herokuapp.com/api/1.0/send",
        data: inputData,
        dataType: "json",
        success: function(response) {
          console.log(response)
          setTimeout(function(){
            console.log("hey")
            $('.emailOverlay').removeClass("email-sending");
            $('body').css("overflow", "auto");

          },1000);
          
        },
        error: function(error){
          console.log(error)
          setTimeout(function(){
            console.log("hey")
            $('.emailOverlay').removeClass("email-sending");
            $('body').css("overflow", "auto");
          },1000);
        }
      });
    }
  });
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

  $(".hamburger").click(function() {
    $(".nav-mobile-options-container").toggleClass("menu-active");
  });
});
