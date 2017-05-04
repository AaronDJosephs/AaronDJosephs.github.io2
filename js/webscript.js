 faded = false;
 csc_alive = false;
 theatre_alive = false;
 leadership_alive = false;

highlight_present = function () {
	if ($(".bluemarker").hasClass("blue")) $(".bluemarker").removeClass("blue");
	else $(".bluemarker").addClass("blue");
};

initial_slide = function () {
	$(".right-half").addClass("new-item");
	$(".boundary").addClass("bound-width");
  fade_in_subs();
};

fade_in_title = function () {
	$(".name").addClass("fade-text");
}

fade_in_subs = function () {
  $(".subname").addClass("fade-text");
  $(".datelink").addClass("fade-text");
  $(".category").addClass("fade-text");
}

activate_csc = function () {
  if (theatre_alive == true) { 
    activate_theatre(); 
  }
  if (leadership_alive == true) {
    activate_leadership();
  }

  csc_alive = !csc_alive;

  $(".csc-link").toggleClass("fade-text");
  $(".csc").toggleClass("csc-active");
  $(".contains-csc").slideToggle(600);
}

activate_theatre = function () {
  if (csc_alive == true) { 
    activate_csc();
  }
  if (leadership_alive == true) {
    activate_leadership();
  }

  theatre_alive = !theatre_alive;

  $(".theatre-link").toggleClass("fade-text");
  $(".theatre").toggleClass("theatre-active");
  $(".contains-theatre").slideToggle(600);
}

activate_leadership = function () {
  if (csc_alive == true) { 
    activate_csc();
  }
  if (theatre_alive == true) { 
    activate_theatre(); 
  }

  leadership_alive = !leadership_alive;

  $(".leadership-link").toggleClass("fade-text");
  $(".leadership").toggleClass("leadership-active");
  $(".contains-leadership").slideToggle(600);
}


$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".msg_body").hide();
  //toggle the componenet with class msg_body
  $(".msg_head").click(function()
  {
    $(this).next(".msg_body").slideToggle(600);
  });
});



sleep = function(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
