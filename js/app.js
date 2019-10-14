$(document).ready(function() {
    $("#headerButton").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 1500,
          easing: "swing"
       });
       return false;
    });
 });
 const redDiploma = document.querySelector('.redDiploma__image-front');

 redDiploma.addEventListener('click',function(){
   redDiploma.style.position = "absolute";
   redDiploma.style.width = "100%";
   redDiploma.style.height ="100vh";
 });
