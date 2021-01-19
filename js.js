$(document).ready(function(){

  function bgmenu(){
    const 
      nowat=$(document).scrollTop(),
      height=$("#about").innerHeight(),
      offset=$("#myMenu").innerHeight(),
      screenW=$(document).innerWidth(),


    if(screenW>=992){ 
      
      if(nowat < height-offset){ 
        $("#myMenu").removeClass("bg-dark");
      }else{
        $("#myMenu").addClass("bg-dark");
        
      }
    }else{
      $("#myMenu").addClass("bg-dark");

    }

  }

  $(document).scroll(function(){  
  });
  $(window).resize(bgmenu); 
  bgmenu();

})