
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
            swal('패스워드 오류', '비밀번호를 확인해주세요.', 'error');
        } 
    } else if((id == '') || (pw == '')) {
        swal('입력 오류', '아이디나 패스워드를 입력해주세요.', 'error');
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

const getCookie = (name) => {
    const vlaue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return vlaue ? value[2] : null;
}


let closeTodayBtn = document.getElementById('m_n_btn');

closeTodayBtn.addEventListener('click', function closeToday() {
        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();
        document.cookie = 'modalClose=T; expires=$(date)';
        document.getElementById('modal').style.display = 'none';
    }
)




$(function(){


})
