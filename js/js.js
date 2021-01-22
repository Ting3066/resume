$(document).ready(function(){

  $("#menu a, #getStart a").click(function(){
    const theid=$(this).attr("href");
    const val=$(theid).offset().top-$("#myMenu").innerHeight()+1;

    $("html").animate(
      {scrollTop:val},1000,"swing"
    );
    
  });
  


  function bgmenu(){
    const 
      nowat=$(document).scrollTop(),
      height=$("#about").innerHeight(),
      offset=$("#myMenu").innerHeight(),
      screenW=$(document).innerWidth();


    if(screenW>=992){ 
      
      if(nowat < height-offset){ 
        $("#myMenu").removeClass("alert-secondary");
        $("#myMenu").removeClass("bgShadow");
      }else{
        $("#myMenu").addClass("alert-secondary");
        $("#myMenu").addClass("bgShadow");
        
      }
    }else{
      $("#myMenu").addClass("alert-secondary");
      $("#myMenu").addClass("bgShadow");

    }

  }

  $(document).scroll(function(){  
    bgmenu();
  });
  $(window).resize(bgmenu); 
  bgmenu();

})