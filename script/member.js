
let logbtn = document.getElementById('user_login');
let id = document.getElementById('username');
let pw = document.getElementById('l_password');


logbtn.addEventListener('submit', function(e) {
    id = document.getElementById('username').value;
    pw = document.getElementById('l_password').value;

    e.preventDefault();

    if(id == 'test') {
        if(pw == '1234') {
            swal('로그인 성공', '로그인 되었습니다.', 'success');
            setTimeout(function() {
                location.href = 'index.html';
            }, 2000);
        } else {
            swal('비밀번호 오류', '비밀번호를 확인해주세요.', 'error');
        } 
    } else if((id == '') || (pw == '')) {
        swal('입력 오류', '아이디나 비밀번호를 입력해주세요.', 'error');
    } else {
        swal('아이디 오류', '아이디를 확인해주세요.', 'error');
    }
});

let uLogbtn = document.getElementById('unknown_login');
let uId = document.getElementById('u_name');
let uPw = document.getElementById('u_num');

uLogbtn.addEventListener('submit', function(e) {
    uId = document.getElementById('u_name').value;
    uPw = document.getElementById('u_num').value;

    e.preventDefault();

    if(uId == 'test') {
        if(uPw == '1234') {
            swal('로그인 성공', '로그인 되었습니다.', 'success');
            setTimeout(function() {
                location.href = 'index.html';
            }, 2000);
        } else {
            swal('주문번호 오류', '주문번호를 확인해주세요.', 'error');
        } 
    } else if((uId == '') || (uPw == '')) {
        swal('입력 오류', '주문자명이나 주문번호를 입력해주세요.', 'error');
    } else {
        swal('주문자명 오류', '주문자명를 확인해주세요.', 'error');
    }
});


let modalBtn = document.getElementById('m_c_btn');

m_c_btn.addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
})

/*
    // 쿠키 가져오기
    let getCookie = function (cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }
*/


    // 24시간 기준 쿠키 설정하기  
    let setCookie = function (cname, cvalue, exdays) {
        let todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        let expires = "expires=" + todayDate.toUTCString(); //
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    $('#m_n_btn').click(function() {
        setCookie("close", "y", 1);
    $('#modal').hide();
    });

    
    $(document).ready(function(){
        let cookiedata = document.cookie;
        if(cookiedata.indexOf("close=y")<0){
            $("#modal").show();
        }else{
            $("#modal").hide();
        }
    });

    // 모달윈도우
    
    let n_login = document.getElementById('n_login');
    let n_close = document.getElementById('n_close');


    n_login.addEventListener('click', function(){

        document.getElementById('m_modal').style.display='block';
    });

    n_close.addEventListener('click', function(){

        document.getElementById('m_modal').style.display='none';
    });

    //네이버 로그인

    let naver_form = document.getElementById('naver_form');
    let naver_id = document.getElementById('naver_id');
    let naver_pw = document.getElementById('naver_pw');
    
    naver_form.addEventListener('submit', function(e) {
    naver_id = document.getElementById('naver_id').value;
    naver_pw = document.getElementById('naver_pw').value;
    
        e.preventDefault();
    
        if(naver_id == 'test') {
            if(naver_pw == '1234') {
                swal('로그인 성공', '로그인 되었습니다.', 'success');
                setTimeout(function() {
                    location.href = 'index.html';
                }, 2000);
            } else {
                swal('비밀번호 오류', '비밀번호를 확인해주세요.', 'error');
            } 
        } else if((naver_id == '') || (naver_pw == '')) {
            swal('입력 오류', '아이디나 비밀번호를 입력해주세요.', 'error');
        } else {
            swal('아이디 오류', '아이디를 확인해주세요.', 'error');
        }
    });

        // k 모달윈도우
    
        let k_login = document.getElementById('k_login');
        let k_close = document.getElementById('k_close');
    
    
        k_login.addEventListener('click', function(){
    
            document.getElementById('k_modal').style.display='block';
        });
    
        k_close.addEventListener('click', function(){
    
            document.getElementById('k_modal').style.display='none';
        });

    //카카오 로그인

    let kakao_form = document.getElementById('kakao_form');
    let kakao_id = document.getElementById('kakao_id');
    let kakao_pw = document.getElementById('kakao_pw');
    
    kakao_form.addEventListener('submit', function(e) {
    kakao_id = document.getElementById('kakao_id').value;
    kakao_pw = document.getElementById('kakao_pw').value;
    
        e.preventDefault();
    
        if(kakao_id == 'test') {
            if(kakao_pw == '1234') {
                swal('로그인 성공', '로그인 되었습니다.', 'success');
                setTimeout(function() {
                    location.href = 'index.html';
                }, 2000);
            } else {
                swal('비밀번호 오류', '비밀번호를 확인해주세요.', 'error');
            } 
        } else if((kakao_id == '') || (kakao_pw == '')) {
            swal('입력 오류', '아이디나 비밀번호를 입력해주세요.', 'error');
        } else {
            swal('아이디 오류', '아이디를 확인해주세요.', 'error');
        }
    });







