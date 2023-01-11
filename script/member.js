
let logbtn = document.getElementById('btn');
let id = document.getElementById('username');
let pw = document.getElementById('l_password');


logbtn.addEventListener('click', function() {
    id = document.getElementById('username').value;
    pw = document.getElementById('l_password').value;

    if((id == 'test') && (pw == '1234')) {
        
        swal("로그인 성공!", 'success')
        
    }
})