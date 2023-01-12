/* 


let products = [
  {'name' : '인터갈릭틱', 'category' : '배쓰 밤', 'price' : '17000', 'like' : 9, 'view' : 10, 'src' : './images/shop/product01.png'},
  {'name' : '럭스', 'category' : '배쓰 밤', 'price' : '20000', 'like' : 8, 'view' : 30, 'src' : './images/shop/product05.png'},
  {'name' : '슬리피', 'category' : '샤워 젤', 'price' : '19000', 'like' : 13, 'view' : 27, 'src' : './images/shop/product09.png'},
  {'name' : '해피 페이스', 'category' : '배쓰 밤', 'price' : '15000', 'like' : 15, 'view' : 50, 'src' : './images/shop/product13.png'},
  {'name' : '트와일라잇', 'category' : '슬리피 보디 스프레이', 'price' : '60000', 'like' : 25, 'view' : 11, 'src' : './images/shop/product02.png'},
  {'name' : '챠콜', 'category' : '페이셜 솝', 'price' : '22000', 'like' : 11, 'view' : 49, 'src' : './images/shop/product06.png'},
  {'name' : '더 컴포터', 'category' : '배쓰 밤', 'price' : '19000', 'like' : 9, 'view' : 17, 'src' : './images/shop/product10.png'},
  {'name' : '대디-오', 'category' : '샴푸', 'price' : '19000', 'like' : 6, 'view' : 20, 'src' : './images/shop/product14.png'},
  {'name' : '마스크 오브 매그너민티', 'category' : '파워 마스크', 'price' : '22000', 'like' : 5, 'view' : 55, 'src' : './images/shop/product03.png'},
  {'name' : '더티 보디 스프레이', 'category' : '보디 스프레이', 'price' : '60000', 'like' : 5, 'view' : 30, 'src' : './images/shop/product07.png'},
  {'name' : '더티 로즈', 'category' : '배쓰 밤', 'price' : '18000', 'like' : 10, 'view' : 19, 'src' : './images/shop/product11.png'},
  {'name' : '릴렉스', 'category' : '기프트', 'price' : '70000', 'like' : 2, 'view' : 9, 'src' : './images/shop/product15.png'},
  {'name' : '섹스 밤', 'category' : '배쓰 밤', 'price' : '14000', 'like' : 7, 'view' : 11, 'src' : './images/shop/product04.png'},
  {'name' : '팬시', 'category' : '향수', 'price' : '55000', 'like' : 4, 'view' : 12, 'src' : './images/shop/product08.png'},
  {'name' : '스노우 페어리 4 윅', 'category' : '캔들', 'price' : '100000', 'like' : 3, 'view' : 9, 'src' : './images/shop/product12.png'},
  {'name' : '말차 롤', 'category' : '버블 바', 'price' : '20000', 'like' : 1, 'view' : 4, 'src' : './images/shop/product16.png'}
];


let selecTap = document.getElementById('sort').value;


// 가격 낮은 순
  products.sort(function(a,b) {
    if(a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    }
  });



// 가격 높은순
    products.sort(function(a,b) {
    if(a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    }
  });



// 인기순
  products.sort(function(a,b) {
    if(a.view > b.view) {
      return -1;
    } else if (a.view < b.view) {
      return 1;
    }
  })

  console.log(products);

  // 추천순
    products.sort(function(a,b) {
    if(a.like > b.like) {
      return -1;
    } else if (a.like < b.like) {
      return 1;
    }
    })



*/
