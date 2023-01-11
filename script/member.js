
let logbtn = document.getElementById('btn');
let id = document.getElementById('username');
let pw = document.getElementById('l_password');


logbtn.addEventListener('click', function() {
    id = document.getElementById('username').value;
    pw = document.getElementById('l_password').value;

    if(id == 'test') {
        if(pw == '1234') {
            swal('로그인 성공', '로그인 되었습니다.', 'success').delay(2000).location.href= 'index.html';
        } else {
            swal('패스워드 오류', '비밀번호를 확인해주세요.', 'error');
        } 
    } else if((id == '') || (pw == '')) {
        swal('입력 오류', '아이디나 패스워드를 입력해주세요.', 'error');
    } else {
        swal('아이디 오류', '아이디를 확인해주세요.', 'error');
    }
})