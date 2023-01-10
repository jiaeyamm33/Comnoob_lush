$(function(){
  //메인 휠 이벤트
  let stop_scroll = 0;
  $(window).on('load', function(e){ // 페이지가 로딩되면
    if($(this).scrollTop() != 0){ // 현재 스크롤을 검증하여 
      stop_scroll = 1;
    }
  });
  window.addEventListener('wheel',function(e){
    if(stop_scroll == 0 && e.deltaY > 0 && $(this).scrollTop() == 0){
      e.preventDefault();
      $('html, body').animate({scrollTop: $('#main_video_box').height()}, 'slow');
      stop_scroll = 1;
    }
  }, {passive:false});
});