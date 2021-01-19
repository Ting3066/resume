$(document).ready(function(){

  $("#menu a, #getStart a").click(function(){
    const theid=$(this).attr("href");
    const val=$(theid).offset().top-$("#myMenu").innerHeight()+1;

    $("html").animate(
      {scrollTop:val},1000,"swing"
    );
    
  });
  


  function spy(){  //檢查目前滾動位置與對應MENU之ACTIVE
    const nowat=$(document).scrollTop();
    $("section").each(function(){
      // console.log(this)
      
      const 
      offset=$(this).offset().top
      height=$(this).innerHeight(),
      id=$(this).attr('id')
      
      if(offset<=nowat && nowat<offset+height){ //目前高度落於該section內
        $('#myMenu a').not(`a[href='#${id}']`).removeClass('active');
        $(`#myMenu a[href='#${id}']`).addClass('active');
      }
    })
  }
  
  

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
    spy();
    bgmenu();
  });
  $(window).resize(bgmenu); 
  spy();
  bgmenu();

})