$(function(){
  //메인 휠 이벤트
  let stop_scroll = 0;
  window.addEventListener('wheel',function(e){
    if($(this).scrollTop() != 0 && e.deltaY < 0){
      stop_scroll = 1;
    }    
    if(stop_scroll == 0 && e.deltaY > 0){
      e.preventDefault();
      $('html, body').animate({scrollTop: $('#main_video_box').height()}, 'slow');
      stop_scroll = 1;
    }
  }, {passive:false});
});