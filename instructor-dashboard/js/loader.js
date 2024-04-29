 AOS.init({
 	 duration: 1200,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";


  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

});