$(document).ready(function(){
    $('.NavTogler').click(function(){
        $(".NavTogler").toggleClass("togle-navBar");
      $(".left_NAv").toggleClass("togle-navBar");
      $(".navBar-Body").toggleClass("togle-navBar");
    });
  });
$(document).ready(function(){
    $('.Mobile-NavCLose-Btn').click(function(){
        $(".NavTogler").removeClass("togle-navBar");
      $(".left_NAv").removeClass("togle-navBar");
      $(".navBar-Body").removeClass("togle-navBar");
    });
  });

$(document).ready(function(){
    $('.navBar-Body').click(function(){
        $(".NavTogler").removeClass("togle-navBar");
      $(".left_NAv").removeClass("togle-navBar");
      $(".navBar-Body").removeClass("togle-navBar");
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


// altsy-icon setting

$(document).ready(function(){
    $('.altsy-icon-1').click(function(){
     $(".altsy-icon-1").addClass("active-altsy-icon");
     $(".altsy-icon-2").removeClass("active-altsy-icon");
     $(".altsy-icon-3").removeClass("active-altsy-icon");
     $(".altsy-icon-4").removeClass("active-altsy-icon");
     $(".altsy-icon-5").removeClass("active-altsy-icon");

     $(".instruc-dlt").addClass("active-dlts-box");
     $(".schedule-dlt").removeClass("active-dlts-box");
     $(".course-curriculum").removeClass("active-dlts-box");
     $(".progress-dlt").removeClass("active-dlts-box");
     $(".review-dtl").removeClass("active-dlts-box");
    });
  });



$(document).ready(function(){
    $('.altsy-icon-2').click(function(){
     $(".altsy-icon-1").removeClass("active-altsy-icon");
     $(".altsy-icon-2").addClass("active-altsy-icon");
     $(".altsy-icon-3").removeClass("active-altsy-icon");
     $(".altsy-icon-4").removeClass("active-altsy-icon");
     $(".altsy-icon-5").removeClass("active-altsy-icon");

     $(".instruc-dlt").removeClass("active-dlts-box");
     $(".schedule-dlt").addClass("active-dlts-box");
     $(".course-curriculum").removeClass("active-dlts-box");
     $(".progress-dlt").removeClass("active-dlts-box");
     $(".review-dtl").removeClass("active-dlts-box");
    });
  });

$(document).ready(function(){
    $('.altsy-icon-3').click(function(){
     $(".altsy-icon-1").removeClass("active-altsy-icon");
     $(".altsy-icon-2").removeClass("active-altsy-icon");
     $(".altsy-icon-3").addClass("active-altsy-icon");
     $(".altsy-icon-4").removeClass("active-altsy-icon");
     $(".altsy-icon-5").removeClass("active-altsy-icon");

     $(".instruc-dlt").removeClass("active-dlts-box");
     $(".schedule-dlt").removeClass("active-dlts-box");
     $(".course-curriculum").addClass("active-dlts-box");
     $(".progress-dlt").removeClass("active-dlts-box");
     $(".review-dtl").removeClass("active-dlts-box");
    });
  });


$(document).ready(function(){
    $('.altsy-icon-4').click(function(){
     $(".altsy-icon-1").removeClass("active-altsy-icon");
     $(".altsy-icon-2").removeClass("active-altsy-icon");
     $(".altsy-icon-3").removeClass("active-altsy-icon");
     $(".altsy-icon-4").addClass("active-altsy-icon");
     $(".altsy-icon-5").removeClass("active-altsy-icon");

     $(".instruc-dlt").removeClass("active-dlts-box");
     $(".schedule-dlt").removeClass("active-dlts-box");
     $(".course-curriculum").removeClass("active-dlts-box");
     $(".progress-dlt").addClass("active-dlts-box");
     $(".review-dtl").removeClass("active-dlts-box");
    });
  });

$(document).ready(function(){
    $('.altsy-icon-5').click(function(){
     $(".altsy-icon-1").removeClass("active-altsy-icon");
     $(".altsy-icon-2").removeClass("active-altsy-icon");
     $(".altsy-icon-3").removeClass("active-altsy-icon");
     $(".altsy-icon-4").removeClass("active-altsy-icon");
     $(".altsy-icon-5").addClass("active-altsy-icon");

     $(".instruc-dlt").removeClass("active-dlts-box");
     $(".schedule-dlt").removeClass("active-dlts-box");
     $(".course-curriculum").removeClass("active-dlts-box");
     $(".progress-dlt").removeClass("active-dlts-box");
     $(".review-dtl").addClass("active-dlts-box");
    });
  });





           $(document).ready(function(){
    $('.message-togler').click(function(){
      $('.toggle-messageCont').addClass('showMessage-div');
      $('.m-container-1').addClass('showMessage-div');
    });
  });


           
       $(document).ready(function(){
    $('.m-container-body').click(function(){
      $('.toggle-messageCont').removeClass('showMessage-div');
      $('.m-container-1').removeClass('showMessage-div');
      $('.m-container-2').removeClass('showMessage-div');
    });
  });

          $(document).ready(function(){
    $('.close-m-container').click(function(){
      $('.toggle-messageCont').removeClass('showMessage-div');
     $('.m-container-1').removeClass('showMessage-div');
     $('.m-container-2').removeClass('showMessage-div');
    });
  });





// To show the streaming box

 $(document).ready(function(){
    $('.Stream-togller').click(function(){
        $(".streaming-screen").addClass("togle-streamBox");
    });
  });


 $(document).ready(function(){
    $('.Stream-minimize').click(function(){
        $(".streaming-screen").toggleClass("togle-streamBox-minimize");
        $(".streaming-screen").removeClass("togle-streamBox-maximize");

    });
  });

 $(document).ready(function(){
    $('.Stream-maximize').click(function(){
        $(".streaming-screen").toggleClass("togle-streamBox-maximize");
        $(".streaming-screen").removeClass("togle-streamBox-minimize");
    });
  });


  $(document).ready(function(){
    $('.close-Stream-togller').click(function(){
        $(".streaming-screen").removeClass("togle-streamBox");
         $(".streaming-screen").removeClass("togle-streamBox-maximize");
        $(".streaming-screen").removeClass("togle-streamBox-minimize");
    });
  });




  
  $(document).ready(function(){
    $('.shedule-edit-btn').click(function(){
      $(".hak-dlt-input").toggleClass("Show-hak-dlt-input");
    });
  });


    $(document).ready(function(){
    $('.complt-btn').click(function(){
      $(".complt-btn").addClass("Hide-complt-btn");
       $(".assn-btn").addClass("Show-assn-btn");
    });
  });