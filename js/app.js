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
    $("#buttonSend").click(function() {
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
 const coverImage = document.querySelector('.coverImage')
 redDiploma.addEventListener('click',function(){
   if(coverImage.style.display == 'block'){
      coverImage.style.display = 'none'
   }else{
      coverImage.style.display = 'block' ;
      coverImage.style.position= 'fixid' ;
      coverImage.style.left = '10%'
   }
   
 });
