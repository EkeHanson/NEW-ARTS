
    $(document).ready(function(){
    $('.top-side-nav').click(function(){
      $(".nav-sec").toggleClass("shrink-nav-sec");
    });
  });

        $(document).ready(function(){
    $('.nav-togller').click(function(){
      $(".nav-togller").toggleClass("Togle-nav-togller");
      $(".nav-sec").toggleClass("Togle-nav-togller");
      $(".nav-body").toggleClass("Togle-nav-togller");
    });
  });

    $(document).ready(function(){
    $('.nav-body').click(function(){
      $(".nav-togller").removeClass("Togle-nav-togller");
      $(".nav-sec").removeClass("Togle-nav-togller");
      $(".nav-body").removeClass("Togle-nav-togller");
    });
  });










           $(document).ready(function(){
    $('.message-togler').click(function(){
      $('.toggle-messageCont').addClass('showMessage-div');
      $('.m-container-1').addClass('showMessage-div');
    });
  });

  $(document).ready(function(){
    $('.message-togler-10').click(function(){
      $('.toggle-messageCont-1').addClass('showMessage-div');
      $('.m-container-1').addClass('showMessage-div');
    });
  });

    $(document).ready(function(){
    $('.message-togler-11').click(function(){
      $('.toggle-messageCont-1').addClass('showMessage-div');
      $('.m-container-2').addClass('showMessage-div');
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





          
// w-container

$(document).ready(function(){
    $('.withdrawal-Main_btn').click(function(){
      $('.w-container').addClass('show-w-container');
    });
  });

       $(document).ready(function(){
    $('.w-container-body').click(function(){
    $('.w-container').removeClass('show-w-container');
    });
  });

          $(document).ready(function(){
    $('.withdrawal-box-closeSec-Main').click(function(){
      $('.w-container').removeClass('show-w-container');
    });
  });





          function ReviewInputFocus(){
    var rInput = document.getElementById('review-input-box').value;

    if(rInput == null || rInput !== ""){
        $(".review-input").addClass("addBg-to-btn");
    }
     else if(rInput == null || rInput == ""){
        $(".review-input").removeClass("addBg-to-btn");
    }
}




$(document).ready(function(){
    $('.rating-btn').click(function(){
        $(".review-sec").addClass("show-review-sec");
         $(".review-sec-body").addClass("show-review-sec");
    });
  });
$(document).ready(function(){
    $('.close-review-sec').click(function(){
        $(".review-sec").removeClass("show-review-sec");
        $(".review-sec-body").removeClass("show-review-sec");
    });
  });
$(document).ready(function(){
    $('.review-sec-body').click(function(){
        $(".review-sec").removeClass("show-review-sec");
        $(".review-sec-body").removeClass("show-review-sec");
    });
  });





$(document).ready(function(){
    $('.cartegory-Btn').click(function(){
        $(".cartegory-Box").addClass("active-upload-Sec");
    });
  });

$(document).ready(function(){
    $('.instructor-Btn').click(function(){
        $(".instructor-Box").addClass("active-upload-Sec");
    });
  });

$(document).ready(function(){
    $('.courses-Btn').click(function(){
        $(".courses-Box").addClass("active-upload-Sec");
    });
  });


$(document).ready(function(){
    $('.Close-Upload-Box').click(function(){
      $(".cartegory-Box").removeClass("active-upload-Sec");
      $(".instructor-Box").removeClass("active-upload-Sec");
        $(".courses-Box").removeClass("active-upload-Sec");
        $(".edit-cartegory-Box").removeClass("active-upload-Sec");
        $(".edit-courses-Box").removeClass("active-upload-Sec");
        $(".edit-instructor-Box").removeClass("active-upload-Sec");
    });
  });




$(document).ready(function(){
    $('.edit-cartegory-Btn').click(function(){
        $(".edit-cartegory-Box").addClass("active-upload-Sec");
    });
  });

$(document).ready(function(){
    $('.edit-courses-Btn').click(function(){
        $(".edit-courses-Box").addClass("active-upload-Sec");
    });
  });
 

$(document).ready(function(){
    $('.edit-cartegory-Btn').click(function(){
        $(".edit-instructor-Box").addClass("active-upload-Sec");
    });
  });