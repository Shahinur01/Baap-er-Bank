document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   
    //get user password
    const passField = document.getElementById('user-password');
    const password = passField.value;

    if (userEmail=='shahinur@gmail.com'&& password=='shahinur'){
        console.log('valid');
    } {
        window.location.href = 'banking.html';
    }
})
