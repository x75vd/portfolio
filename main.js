document.addEventListener("DOMContentLoaded", function(){

    console.log("Hop")
  
  
  
    let values = document.querySelectorAll(".value")
  for (let valueSpan of values) {
      let value = valueSpan.innerHTML
      valueSpan.style.width = value+"%"
  }
  


    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let desc1 = document.getElementById("desc1");
    let desc2 = document.getElementById("desc2");


    hoverEffect("first", "desc1")
    hoverEffect("second","desc2")
    

  })
  
  function hoverEffect(element1, element2) {
    let box = document.getElementById(element1);
    let description = document.getElementById(element2);

    box.addEventListener("mouseenter", function(event) {
        description.style.display = "block"
    });

    box.addEventListener("mouseleave", function(event) {
        description.style.display = "none"
    });

    $(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}}); 
    $(function(){
     $("#toTop").scrollToTop();
    });
}