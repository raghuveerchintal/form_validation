function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var text = document.getElementById('text');
    var text1 = document.getElementById('pass');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email==="") {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Please fill the Email Address';
        text.style.color = "#ff0000";
        
    }

    else if (email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = 'Your Email Address in Valid.';
        text.style.color = "#00ff00";
        
    }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML="Please Enter Valid Email Address";
        text.style.color= "#ff0000";
        
    }
    
    if (password==="") {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text1.innerHTML = 'Please fill the Password';
        text1.style.color = "#ff0000";
        
    }else if (password.length<6){
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text1.innerHTML = 'Password should be atlest 6 characters';
        text1.style.color = "#ff0000";
    

    }else{
        form.classList.add('valid');
        form.classList.remove('invalid');
        text1.innerHTML = 'Your Password is valid.';
        text1.style.color = "#00ff00";
        
    }
    
}