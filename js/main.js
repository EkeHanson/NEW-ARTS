 AOS.init({
     duration: 1000,
    easing: 'slide',
    once: true
 });

$(document).ready(function(){
    $('.Gen-Drop-Icon-1').click(function(){
      $(".Gen-Drop-1").toggleClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-1").toggleClass("active-Nv-Icon");
      $(".Gen-Drop-2").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-2").removeClass("active-Nv-Icon");
      $(".Gen-Drop-Badgs").toggleClass("show-Gen-Drop-Badgs");
    });
  });

$(document).ready(function(){
    $('.Gen-Drop-Icon-2').click(function(){
      $(".Gen-Drop-1").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-1").removeClass("active-Nv-Icon");
      $(".Gen-Drop-2").toggleClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-2").toggleClass("active-Nv-Icon");
      $(".Gen-Drop-Badgs").toggleClass("show-Gen-Drop-Badgs");
    });
  });




$(document).ready(function(){
    $('.Gen-Drop-Badgs').click(function(){
      $(".Gen-Drop-1").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-1").removeClass("active-Nv-Icon");
       $(".Gen-Drop-2").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-2").removeClass("active-Nv-Icon");
      $(".Gen-Drop-Badgs").removeClass("show-Gen-Drop-Badgs");
    });
  });


$(document).ready(function(){
    $('.Gen-Drop-Icon-3').click(function(){
      $(".Gen-Drop-1").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-1").removeClass("active-Nv-Icon");
       $(".Gen-Drop-2").removeClass("active-Gen-Drop-oo");
      $(".Gen-Drop-Icon-2").removeClass("active-Nv-Icon");
      $(".Gen-Drop-Badgs").removeClass("show-Gen-Drop-Badgs");
    });
  });




$(document).ready(function(){
    $('.NavTogler').click(function(){
      $(".nav-Icons").toggleClass("togle-navBar");
      $(".navBar-Body").toggleClass("togle-navBar");
      $(".NavTogler").toggleClass("togle-NavTogler");
    });
  });

$(document).ready(function(){
    $('.Mobile-NavCLose-Btn').click(function(){
      $(".nav-Icons").removeClass("togle-navBar");
      $(".navBar-Body").removeClass("togle-navBar");
      $(".NavTogler").removeClass("togle-NavTogler");
    });
  });

$(document).ready(function(){
    $('.navBar-Body').click(function(){
      $(".nav-Icons").removeClass("togle-navBar");
      $(".navBar-Body").removeClass("togle-navBar");
      $(".NavTogler").removeClass("togle-NavTogler");
    });
  });


$(document).ready(function(){
    $('.search-toggler').click(function(){
     $(".search-sec").addClass("show-search-sec");
    });
  });

$(document).ready(function(){
    $('.close-search').click(function(){
     $(".search-sec").removeClass("show-search-sec");
    });
  });



function showHide() {
    var my_pass = document.getElementById("pass");
    var pass_Btn = document.getElementById("pass-btn");

    if (my_pass.type === "password") {
      my_pass.type = "text";
    } else {
      my_pass.type = "password";
    }

    pass_Btn.classList.toggle('togle-pass-icon');
  }





  $('.new-course-owl').owlCarousel({
      items: 3,
        loop: false,
        margin: 20,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">'],
        smartSpeed: 1000,
         responsive: {
              0: {
                items: 1,
            },
             700: {
                items: 2,
            },
             800: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        }
    });


    var myVideo = document.getElementById("main-a-video"); 

function playPause() { 
    if (myVideo.paused){
        myVideo.play(); 
      }else{
        myVideo.pause(); 
      }
}
$(document).ready(function(){
    $('.pause-vid').click(function(){
      $(".pause-vid").toggleClass("play-pauseIcon");
    });
  });

$(document).ready(function(){
    $('.close-new-Nottio-sec').click(function(){
      $(".new-Nottio-sec").hide();
    });
  });