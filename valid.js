function validation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('text');
    var text1 = document.getElementById('pass');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if ((email.length<1) && (password.length<1)){
        text.innerHTML = 'Please fill the Email Address';
        text1.innerHTML = 'Please fill the Password';
        text.style.color = "#ff0000";
        text1.style.color = "#ff0000";
        return false;
        
    }

    else if ((email.length<1) && (password.length<6)){
        text.innerHTML = 'Please fill the Email Address';
        text1.innerHTML = 'Password should be atlest 6 characters';
        text.style.color = "#ff0000";
        text1.style.color = "#ff0000";
        return false;
    }

    else if ((email.length<1) && (password.length>=6)){
        text.innerHTML = 'Please fill the Email Address';
        text1.innerHTML = 'Your Password is Valid';
        text.style.color = "#ff0000";
        text1.style.color = "#00ff00";
        return false;
    }


    else if ((email.match(pattern)) && (password.length<1)) {
        text.innerHTML = 'Your Email Address is Valid.';
        text1.innerHTML = 'Please fill the Password';
        text.style.color = "#00ff00";
        text1.style.color = "#ff0000";
        return false;
        
    }


    else if ((email.match(pattern)) && (password.length>=6)) {
        text.innerHTML = 'Your Email Address is Valid.';
        text1.innerHTML = 'Your Password is Valid.';
        text.style.color = "#00ff00";
        text1.style.color = "#00ff00";
        return true;
        
    }

    else if ((email.match(pattern)) && (password.length<6)) {
        text.innerHTML = 'Your Email Address is Valid.';
        text1.innerHTML = 'Password should be atlest 6 characters';
        text.style.color = "#00ff00";
        text1.style.color = "#ff0000";
        return false;
        
    }

    else if (!(email.match(pattern)) && (password.length<1)) {
        text.innerHTML="Please Enter Valid Email Address";
        text1.innerHTML = 'Please fill the Password';
        text.style.color = "#ff0000";
        text1.style.color = "#ff0000";
        return false;
        
    }

    else if (!(email.match(pattern)) && (password.length>=6)) {
        text.innerHTML="Please Enter Valid Email Address";
        text1.innerHTML = 'Your Password is Valid.';
        text.style.color = "#ff0000";
        text1.style.color = "#00ff00";
        return false;
        
    }
    

    else{
        text.innerHTML="Please Enter Valid Email Address";
        text1.innerHTML = 'Password should be atlest 6 characters';
        text.style.color= "#ff0000";
        text1.style.color = "#ff0000";
        return false;
    }
    
    
}