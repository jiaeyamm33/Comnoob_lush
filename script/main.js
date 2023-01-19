$(function(){

  //메인 휠 이벤트
  let stopScroll = 0;
  $(window).on('load', function(e){
    if($(this).scrollTop() != 0 || window.matchMedia("screen and (max-width: 1024px)").matches){
      stopScroll = 1;
    }
  });




  // 비디오 박스 스크롤 시 스크롤 안내 사라짐

  $(window).scroll(function(){
    if( $(this).scrollTop() > $('#main_video_box').height()-400 ){
      $('.scrolltxt').fadeOut();
    }
    else {
      $('.scrolltxt').fadeIn();
    }
  });


  window.addEventListener('wheel',function(e){
    if(stopScroll == 0 && e.deltaY > 0 && $(this).scrollTop() == 0 && !window.matchMedia("screen and (max-width: 1024px)").matches){
      e.preventDefault();
      $('html, body').animate({scrollTop: $('#main_video_box').height()-100}, 'slow');
      stopScroll = 1;
    }
  }, {passive:false});
  $(window).scroll(function(){
    if($(this).scrollTop() >= $('#main_video_box').height()-100){
      $('#pc_header').css('background-color','#000');
    } else {
      $('#pc_header').css('background-color','');
    }
  });

  // 베스트 상품 오버시 상품 확대
  let b_img = $('#b_img');
  let s_img01 = $('.s_img01');
  let s_img02 = $('.s_img02');
  let s_img03 = $('.s_img03');
  let s_img04 = $('.s_img04');

  $(s_img01).mouseenter(function(){
    if('./images/main/best_01.png'.split('_')[1] != document.getElementById('b_img').src.split('_')[1]){
      $(b_img).css('display','none');
      document.getElementById('b_img').src='./images/main/best_01.png';
      $(b_img).fadeIn();
    }
  });
  $(s_img02).mouseenter(function(){
    if('./images/main/best_02.png'.split('_')[1] != document.getElementById('b_img').src.split('_')[1]){
      $(b_img).css('display','none');
      document.getElementById('b_img').src='./images/main/best_02.png';
      $(b_img).fadeIn();
    }
  });
  $(s_img03).mouseenter(function(){
    if('./images/main/best_03.png'.split('_')[1] != document.getElementById('b_img').src.split('_')[1]){
      $(b_img).css('display','none');
      document.getElementById('b_img').src='./images/main/best_03.png';
      $(b_img).fadeIn();
    }
  });
  $(s_img04).mouseenter(function(){
    if('./images/main/best_04.png'.split('_')[1] != document.getElementById('b_img').src.split('_')[1]){
      $(b_img).css('display','none');
      document.getElementById('b_img').src='./images/main/best_04.png';
      $(b_img).fadeIn();
    }
  });
  
  //New slide
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    // spaceBetween: 50,
    
    pagination: {
      // el: ".swiper-pagination",
      clickable: true
    },
  });
});