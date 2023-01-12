let signBtn = document.getElementById('s_done');

signBtn.addEventListener('submit', function(e){
    e.preventDefault();

    swal('회원가입', '완료', 'success');

    setTimeout(function() {
        location.href = 'login.html';
    }, 2000);
});