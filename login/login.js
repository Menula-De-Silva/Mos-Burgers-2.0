document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    var user_sec = "mosadmin";
    var password_sec = "1234";

    if (username === user_sec && password === password_sec) {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You will be redirected to the home page.',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href ="../home/home.html";
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid username or password.',
        });
    }
});