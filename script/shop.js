let products = [
  {name : '인터갈릭틱', category : '배쓰 밤', price : 17000, like : 201, view : 350, src : './images/shop/product01.png'},
  {name : '럭스', category : '배쓰 밤', price : 20000, like : 153, view : 174, src : './images/shop/product05.png'},
  {name : '슬리피', category : '샤워 젤', price : 19000, like : 194, view : 210, src : './images/shop/product09.png'},
  {name : '해피 페이스', category : '배쓰 밤', price : 15000, like : 84, view : 87, src : './images/shop/product13.png'},
  {name : '트와일라잇', category : '보디 스프레이', price : 60000, like : 161, view : 175, src : './images/shop/product02.png'},
  {name : '챠콜', category : '페이셜 솝', price : 22000, like : 141, view : 142, src : './images/shop/product06.png'},
  {name : '더 컴포터', category : '배쓰 밤', price : 19000, like : 152, view : 159, src : './images/shop/product10.png'},
  {name : '대디-오', category : '샴푸', price : 19000, like : 142, view : 149, src : './images/shop/product14.png'},
  {name : '마스크 오브 매그너민티', category : '파워 마스크', price : 22000, like : 157, view : 201, src : './images/shop/product03.png'},
  {name : '더티 보디 스프레이', category : '보디 스프레이', price : 60000, like : 156, view : 157, src : './images/shop/product07.png'},
  {name : '더티 로즈', category : '배쓰 밤', price : 18000, like : 121, view : 129, src : './images/shop/product11.png'},
  {name : '릴렉스', category : '기프트', price : 70000, like : 74, view : 86, src : './images/shop/product15.png'},
  {name : '섹스 밤', category : '배쓰 밤', price : 14000, like : 101, view : 150, src : './images/shop/product04.png'},
  {name : '팬시', category : '향수', price : 55000, like : 149, view : 151, src : './images/shop/product08.png'},
  {name : '스노우 페어리 4 윅', category : '캔들', price : 100000, like : 80, view : 98, src : './images/shop/product12.png'},
  {name : '말차 롤', category : '버블 바', price : 20000, like : 60, view : 84, src : './images/shop/product16.png'},
  //new
  {name : '해피 페이스', category : '배쓰 밤', price : 15000, like : 84, view : 87, src : './images/shop/product13.png'},
  {name : '러브', category : '샤워 젤', price : 19000, like : 149, view : 168, src : './images/shop/product113.png'},
  {name : '러브 버그', category : '배쓰 밤', price : 17000, like : 14, view : 29, src : './images/shop/product114.png'},
  {name : '스트로베리', category : '버블 바', price : 19000, like : 79, view : 140, src : './images/shop/product115.png'},
  {name : '캔들라이트', category : '낫랩', price : 11000, like : 7, view : 16, src : './images/shop/product116.png'},
  {name : '본파이어', category : '배쓰 밤', price : 20000, like : 2, view : 3, src : './images/shop/product117.png'},
  {name : '슬리피 캔들', category : '캔들', price : 35000, like : 27, view : 34, src : './images/shop/product118.png'},
  {name : '호피 뉴 이어', category : '기프트', price : 43000, like : 15, view : 32, src : './images/shop/product119.png'},
  {name : '요그 노그 딜라이트', category : '보디 워시', price : 7600, like : 6, view : 14, src : './images/shop/product120.png'},
  {name : '셀러브레이트 라이트', category : '기프트', price : 34000, like : 9, view : 10, src : './images/shop/product121.png'},
  {name : '오렌지 블러썸 캔들', category : '캔들', price : 35000, like : 7, view : 27, src : './images/shop/product122.png'},
  {name : '플로팅 러브 아일랜드', category : '배쓰 멜트', price : 17000, like : 23, view : 48, src : './images/shop/product123.png'},
  {name : '패션 프루트 딜라이트', category : '보디 워시', price : 7600, like : 8, view : 15, src : './images/shop/product124.png'},
  {name : '핫 립스', category : '립 마스크 & 스크럽', price : 8000, like : 10, view : 17, src : './images/shop/product125.png'},
  {name : '골드 래빗', category : '배쓰 밤', price : 19000, like : 99, view : 109, src : './images/shop/product126.png'},
  {name : '럭키 버니', category : '낫랩', price : 9000, like : 126, view : 194, src : './images/shop/product127.png'},
  // 보디
  {name : '허벌리즘', category : '프레쉬 클렌저', price : 22000, like : 9, view : 10, src : './images/shop/product17.png'},
  {name : '리피트', category : '오렌지 풋 밤', price : 22000, like : 2, view : 5, src : './images/shop/product18.png'},
  {name : '엔젤스 온 배어 스킨', category : '프레쉬 클렌저', price : 22000, like : 4, view : 7, src : './images/shop/product19.png'},
  {name : '채러티 팟', category : '보디 로션', price : 13000, like : 51, view : 101, src : './images/shop/product20.png'},
  {name : '로드 오브 미스룰', category : '마사지 바', price : 19000, like : 12, view : 24, src : './images/shop/product21.png'},
  {name : '오션 솔트', category : '페이스 앤 보디 스크럽', price : 28000, like : 21, view : 37, src : './images/shop/product22.png'},
  {name : '아쿠아 마리나', category : '프레쉬 클렌저', price : 22000, like : 3, view : 5, src : './images/shop/product23.png'},
  {name : '드림 크림 셀프-프리저빙', category : '보디 로션', price : 14000, like : 5, view : 8, src : './images/shop/product24.png'},
  {name : '더티 쉐이빙 크림', category : '쉐이빙 크림', price : 20000, like : 5, view : 8, src : './images/shop/product25.png'},
  {name : '버피', category : '보디 버터', price : 19000, like : 8, view : 13, src : './images/shop/product26.png'},
  {name : '헬핑 핸즈', category : '핸드 크림', price : 24000, like : 57, view : 78, src : './images/shop/product27.png'},
  {name : '이치 피치', category : '마사지 바', price : 19000, like : 20, view : 34, src : './images/shop/product28.png'},
  {name : '스크러비', category : '보디 버터', price : 20000, like : 34, view : 48, src : './images/shop/product29.png'},
  {name : '팅글', category : '네이키드 보디 컨디셔너', price : 28000, like : 8, view : 10, src : './images/shop/product30.png'},
  {name : '퍼미스 파워', category : '풋 솝', price : 12000, like : 3, view : 7, src : './images/shop/product31.png'},
  {name : '스위트 와일드 오렌지', category : '핸드 밤', price : 27000, like : 17, view : 29, src : './images/shop/product32.png'},
  //헤어
  {name : '뉴', category : '샴푸 바', price : 19000, like : 102, view : 170, src : './images/shop/product33.png'},
  {name : '와사비 샨 쿠이', category : '샴푸', price : 26000, like : 103, view : 133, src : './images/shop/product34.png'},
  {name : '빅', category : '샴푸', price : 20000, like : 89, view : 101, src : './images/shop/product35.png'},
  {name : '씨닉', category : '샴푸 바', price : 19000, like : 170, view : 270, src : './images/shop/product36.png'},
  {name : '고디바', category : '샴푸 바', price : 19000, like : 160, view : 162, src : './images/shop/product37.png'},
  {name : '해피 해피 조이 조이', category : '헤어 컨디셔너', price : 30000, like : 12, view : 24, src : './images/shop/product38.png'},
  {name : '플라이웨이 헤어', category : '샴푸 바', price : 19000, like : 4, view : 9, src : './images/shop/product39.png'},
  {name : '제이슨 앤 더 아르간 오일', category : '샴푸 바', price : 19000, like : 11, view : 13, src : './images/shop/product40.png'},
  {name : '캔디 레인', category : '헤어 컨디셔너', price : 21000, like : 8, view : 11, src : './images/shop/product41.png'},
  {name : '더티 스타일링 크림', category : '헤어 스타일링', price : 23000, like : 20, view : 34, src : './images/shop/product42.png'},
  {name : '아보카도 코-워시', category : '코-워시', price : 25000, like : 7, view : 9, src : './images/shop/product43.png'},
  {name : '루츠', category : '두피 트리트먼트', price : 34000, like : 14, view : 24, src : './images/shop/product44.png'},
  {name : '씨 스프레이', category : '헤어 미스트', price : 32000, like : 4, view : 5, src : './images/shop/product45.png'},
  {name : '노 드라우트', category : '드라이 샴푸', price : 17000, like : 17, view : 18, src : './images/shop/product46.png'},
  {name : '글로리', category : '헤어 컨디셔너', price : 28000, like : 5, view : 8, src : './images/shop/product47.png'},
  {name : '에이치.오.티', category : '핫오일트리트먼트', price : 17000, like : 1, view : 2, src : './images/shop/product48.png'},
  //페이스
  {name : '코스메틱 워리어', category : '프레쉬 페이스 마스크', price : 25000, like : 14, view : 20, src : './images/shop/product49.png'},
  {name : '카타스트로피 코스메틱', category : '프레쉬 페이스 마스크', price : 25000, like : 15, view : 19, src : './images/shop/product50.png'},
  {name : '뷰티 슬립', category : '페이스 앤 보디 마스크', price : 30000, like : 4, view : 5, src : './images/shop/product51.png'},
  {name : '비비 씨위드', category : '프레쉬 페이스 마스크', price : 25000, like : 7, view : 7, src : './images/shop/product52.png'},
  {name : '티 트리 워터', category : '토너', price : 16000, like : 8, view : 9, src : './images/shop/product53.png'},
  {name : '돈트 룩 앳 미', category : '프레쉬 페이스 마스크', price : 25000, like : 8, view : 8, src : './images/shop/product54.png'},
  {name : '컵 오 커피', category : '페이스 앤 보디 마스크', price : 22000, like : 4, view : 9, src : './images/shop/product55.png'},
  {name : '다크 엔젤', category : '프레쉬 클렌저', price : 22000, like : 7, view : 11, src : './images/shop/product56.png'},
  {name : '버블검', category : '럽 스크럽', price : 15000, like : 37, view : 59, src : './images/shop/product57.png'},
  {name : '논 오브 유어 비즈왁스', category : '립 밤', price : 18000, like : 10, view : 20, src : './images/shop/product58.png'},
  {name : '인첸티드 아이 크림', category : '아이 크림', price : 48000, like : 9, view : 19, src : './images/shop/product59.png'},
  {name : '립 서비스', category : '립 밤', price : 18000, like : 17, view : 21, src : './images/shop/product60.png'},
  {name : '립스틱 리필 케이스', category : '악세서리', price : 20000, like : 49, view : 97, src : './images/shop/product61.png'},
  {name : '슬랩 스틱 1C', category : '고체파운데이션', price : 34000, like : 21, view : 34, src : './images/shop/product62.png'},
  {name : '독립', category : '아이라이너', price : 35000, like : 13, view : 17, src : './images/shop/product63.png'},
  {name : '아이즈 라이트', category : '마스카라', price : 36000, like : 11, view : 20, src : './images/shop/product64.png'},
  //퍼퓸
  {name : '대드스 가든 레몬 트리', category : '보디 스프레이', price : 60000, like : 18, view : 27, src : './images/shop/product65.png'},
  {name : '로즈 잼', category : '보디 스프레이', price : 80000, like : 98, view : 112, src : './images/shop/product66.png'},
  {name : '제스티', category : '보디 스프레이', price : 60000, like : 59, view : 77, src : './images/shop/product67.png'},
  {name : '더티 솔리드 퍼퓸', category : '솔리드 퍼퓸', price : 22000, like : 23, view : 27, src : './images/shop/product68.png'},
  {name : '카마', category : '퍼퓸', price : 75000, like : 35, view : 64, src : './images/shop/product69.png'},
  {name : '더티 워시카드', category : '워시카드', price : 5000, like : 13, view : 27, src : './images/shop/product70.png'},
  {name : '팬지 솔리드 퍼퓸', category : '솔리드 퍼퓸', price : 22000, like : 31, view : 42, src : './images/shop/product71.png'},
  {name : '솔티', category : '보디 스프레이', price : 80000, like : 109, view : 134, src : './images/shop/product72.png'},
  {name : '브이', category : '퍼퓸', price : 180000, like : 17, view : 27, src : './images/shop/product73.png'},
  {name : '로즈 잼 워시카드', category : '워시카드', price : 5000, like : 9, view : 12, src : './images/shop/product74.png'},
  {name : '카마 워시카드', category : '워시카드', price : 5000, like : 7, view : 9, src : './images/shop/product75.png'},
  {name : '팬지 잼 워시카드', category : '워시카드', price : 5000, like : 13, view : 28, src : './images/shop/product76.png'},
  {name : '클래식스', category : '기프트', price : 130000, like : 34, view : 47, src : './images/shop/product77.png'},
  {name : '바닐라리 워시카드', category : '워시카드', price : 5000, like : 6, view : 7, src : './images/shop/product78.png'},
  {name : '러스트 워시카드', category : '워시카드', price : 5000, like : 15, view : 25, src : './images/shop/product79.png'},
  {name : '플럼 레인', category : '보디 스프레이', price : 70000, like : 82, view : 113, src : './images/shop/product80.png'},
  //기프트
  {name : '샴푸 바 틴', category : '악세서리', price : 7100, like : 50, view : 71, src : './images/shop/product81.png'},
  {name : '러블리', category : '기프트', price : 31000, like : 41, view : 58, src : './images/shop/product82.png'},
  {name : '로즈', category : '기프트', price : 35000, like : 21, view : 38, src : './images/shop/product83.png'},
  {name : '더티', category : '기프트', price : 53000, like : 16, view : 27, src : './images/shop/product84.png'},
  {name : '프레쉬 애즈', category : '기프트', price : 33000, like : 9, view : 11, src : './images/shop/product85.png'},
  {name : '마사지 바 틴', category : '악세서리', price : 7100, like : 23, view : 38, src : './images/shop/product86.png'},
  {name : '4 배쓰 밤 트레이', category : '악세서리', price : 1500, like : 9, view : 11, src : './images/shop/product87.png'},
  {name : '올 더 베스트', category : '기프트', price : 59000, like : 13, view : 27, src : './images/shop/product88.png'},
  {name : '보디 버터 틴', category : '악세서리', price : 7100, like : 5, view : 7, src : './images/shop/product89.png'},
  {name : '레인보우 배쓰', category : '낫랩', price : 20000, like : 10, view : 23, src : './images/shop/product90.png'},
  {name : '리프레쉬', category : '기프트', price : 50000, like : 17, view : 24, src : './images/shop/product91.png'},
  {name : '트립', category : '낫랩', price : 27000, like : 5, view : 13, src : './images/shop/product92.png'},
  {name : '오랑우탄', category : '낫랩', price : 11000, like : 2, view : 4, src : './images/shop/product93.png'},
  {name : '스위티스트 띵', category : '기프트', price : 49000, like : 33, view : 56, src : './images/shop/product94.png'},
  {name : '더 파이팅 애니멀 테스팅 파우치', category : '스웨그', price : 38000, like : 11, view : 24, src : './images/shop/product95.png'},
  {name : 'Danger! Cosmetics To Go', category : '도서', price : 16000, like : 46, view : 69, src : './images/shop/product96.png'},
  //가치소비
  {name : '더 올리브 브랜치', category : '샤워 젤', price : 17000, like : 57, view : 100, src : './images/shop/product97.png'},
  {name : '슬리피 버블 바', category : '버블 바', price : 19000, like : 68, view : 76, src : './images/shop/product98.png'},
  {name : '씨 베지터블', category : '솝', price : 12000, like : 8, view : 6, src : './images/shop/product99.png'},
  {name : '빅 블루', category : '배쓰 밤', price : 14000, like : 2, view : 21, src : './images/shop/product100.png'},
  {name : '드래곤스 에그', category : '배쓰 밤', price : 14000, like : 3, view : 20, src : './images/shop/product101.png'},
  {name : '레인보우', category : '버블 바', price : 19000, like : 5, view : 17, src : './images/shop/product102.png'},
  {name : '라즈베리 블로어', category : '리유저블 버블 바', price : 21000, like : 6, view : 31, src : './images/shop/product103.png'},
  {name : '워리 몬스터', category : '버블 바', price : 19000, like : 2, view : 10, src : './images/shop/product104.png'},
  {name : '채러티 팟 코인 - 동물권리', category : '네이키드 보디 로션', price : 3000, like : 11, view : 27, src : './images/shop/product105.png'},
  {name : '레이크스', category : '배쓰 밤', price : 17000, like : 29, view : 61, src : './images/shop/product106.png'},
  {name : '포쉬 초콜릿', category : '보디 워시', price : 19000, like : 7, view : 13, src : './images/shop/product107.png'},
  {name : '렛츠 겟 레디 투 크럼블', category : '기프트', price : 46000, like : 73, view : 112, src : './images/shop/product108.png'},
  {name : '가디언 오브 더 포레스트', category : '보디 스프레이', price : 70000, like : 84, view : 137, src : './images/shop/product109.png'},
  {name : '데쓰 앤 디케이', category : '퍼퓸', price : 230000, like : 37, view : 79, src : './images/shop/product110.png'},
  {name : '그래스', category : '퍼퓸', price : 200000, like : 42, view : 95, src : './images/shop/product111.png'},
  {name : '러스트', category : '퍼퓸', price : 75000, like : 120, view : 167, src : './images/shop/product112.png'}
];

let selecTap = document.getElementById('sort'); // 셀렉트박스
let sortValue = 'view'; // 정렬기준
let productSortArray = new Array(); // 상품 정렬 배열 선언

let searchItem = document.getElementById('search_items').value;

const searchParams = new URLSearchParams(location.search);
const locationSearchs = "http://127.0.0.1:5501/shop_list.html?";
const urlParams = new URL(location.href).searchParams;
const nameVal = urlParams.get('name');

let cateNum = 0;

products = filterByName(nameVal);

productSet(cateNum);
selecTap.addEventListener('change', function(){
  productSet(cateNum);
});



function productSet(num) {
  // 카테고리에 맞게 배열 교체
  productSortArray = productSort(products.slice(num*16, (num+1)*16));
  let temp = 0;
  cateNum = num;
  for(let i=0;i<productSortArray.length;i++){
    let product_img = '<img src="'+productSortArray[i].src+'" alt="상품"'+i+'>';
    let product_content = '<div>'+
    '<strong>'+productSortArray[i].name+'</strong>'+
    '<p>'+productSortArray[i].category+'</p>'+
    '<p>&#xFFE6;'+productSortArray[i].price.toLocaleString('ko-KR')+'</p>'+
    '</div>';
    document.getElementsByClassName('product')[temp].setAttribute('title', '상품'+i);
    document.getElementsByClassName('product')[temp].innerHTML = product_img+product_content;
    temp++;
  }
}

function filterByName(value) {
  if (!value) {
      alert("네임 입력해");
      return products;
  }
  
  return products.filter(({ name, category, price, like, view }) => {
      // return name === value; 완전일치할때만
      
      return (name.includes(value) || category.includes(value) ? true : false);
  });
}


//배열 정렬 함수
function productSort(sortArray) { 
  sortValue = selecTap.value;
  switch(sortValue){
    // 가격 낮은 순
    case 'priceLow':
      sortArray.sort(function(a,b) {
        if(a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
      });
      break;
    case 'priceHigh':  
    // 가격 높은순
      sortArray.sort(function(a,b) {
        if(a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
      });
      break;
    case 'view':  
      // 인기순
      sortArray.sort(function(a,b) {
        if(a.view > b.view) {
          return -1;
        } else if (a.view < b.view) {
          return 1;
        }
      });
      break;
    case 'like':  
      // 추천순
      sortArray.sort(function(a,b) {
        if(a.like > b.like) {
          return -1;
        } else if (a.like < b.like) {
          return 1;
        }
      });
      break;
    default:
      console.log('정렬 오류 발생!!');
      break;
  }
  return sortArray; // 함수의 결과값을 리턴하여 배열을 저장
}

let s_category = document.getElementById('#s_category');
let c_content = document.querySelectorAll('#s_category li a');

for(let c_i=0;c_i<8;c_i++){
  c_content[c_i].addEventListener('click',function(){
    for(let c_j=0;c_j<8;c_j++){
      c_content[c_j].classList.remove('on');
    }
    let title = c_content[c_i].title;
    c_content[c_i].classList.add('on');
    // 클릭시 타이틀 변경
    document.getElementById('shop_subbanner_h2').innerHTML=title;
    productSet(c_i);
  });
}

let s_best = document.getElementById('s_best');
let s_new = document.getElementById('s_new');
let s_body = document.getElementById('s_body');
let s_hair = document.getElementById('s_hair');
let s_face = document.getElementById('s_face');
let s_perfume = document.getElementById('s_perfume');
let s_gift = document.getElementById('s_gift');
let s_ethical = document.getElementById('s_ethical');

s_best.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='누구나 좋아하는 인기 제품을 만나보세요!';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop1.png)';
});
s_new.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='따끈 따끈한 신제품을 가장 먼저 만나 보세요!';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop2.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_body.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='늘 당신의 피부를 향긋하고 건강하게 빛내줄 거예요';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop3.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_hair.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='실리콘 성분 없이 건강한 재료만 담아 매일 더 싱그럽게';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop4.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_face.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='신선한 재료로 만들어 믿을 수 있는 제품이에요';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop5.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_perfume.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='자연과 음악, 시가 주는 영감으로 빚어낸 특별한 향기';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop6.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_gift.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='환경을 배려한 선물의 감동은 긴 여운을 남길 거예요';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop7.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});
s_ethical.addEventListener('click',function(){
  document.getElementById('shop_subbanner_p').innerHTML='발달장애 아티스트와 함께하는 LUSH 아트 큐레이션!';
  document.getElementById('shop_subbanner_main').style.backgroundImage='url(./images/shop/banner_shop8.jpg)';
  document.getElementById('shop_subbanner_main').style.backgroundRepeat='no-repeat';
  document.getElementById('shop_subbanner_main').style.backgroundSize='cover';
  document.getElementById('shop_subbanner_main').style.backgroundPosition='center';
});

  //New slide
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    // spaceBetween: 50,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });