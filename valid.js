function validation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('text');
    var text1 = document.getElementById('pass');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === '' || password === '') {
        if (email === '') {
            text.innerHTML = 'Please fill the Email Address';
            text.style.color = "#ff0000";
            return false;
        }
        if (password === '') {
            text1.innerHTML = 'Please fill the Password';
            text1.style.color = "#ff0000";
            return false;
        }
    }

    if (!email.match(pattern)) {
        text.innerHTML = 'Please enter valid email address';
        text.style.color = "#ff0000";
        return false
    }

    if (password.length < 6) {
        text1.innerHTML = 'Passworm must be min 6 char'
        text1.style.color = '#f00'
        return false
    }

    return true





}