document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === '' || password ===''){
        alert('Please type your email and password');
        
    }

    if (email === 'mmhparvej@gmail.com' && password === 'mmhparvej@gmail.com') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid user')
    }

})