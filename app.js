//blur event listners
document.querySelector('#username').addEventListener('blur',validateName);
document.querySelector('#zip').addEventListener('blur',validateZip);
document.querySelector('#email').addEventListener('blur',validateEmail);
document.querySelector('#phone').addEventListener('blur',validatePhone);
document.querySelector('#pass').addEventListener('blur',validatePass);
document.querySelector('#cpass').addEventListener('blur',validateC_pass);
document.querySelector('#toggle_icon1').addEventListener('click',toggleicon1);
document.querySelector('#toggle_icon2').addEventListener('click',toggleicon2);
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const c_password = document.getElementById('cpass');



function validateName(){
    const username_value = document.getElementById('username').value;
    let re = /^[a-zA-Z]{2,10}/;
    const username = document.querySelector('#username');

    if(re.test(username_value)){
        username.parentElement.classList.remove('error');
        username.parentElement.classList.add('success');
        
    }else{
        username.parentElement.classList.remove('success');
        username.parentElement.classList.add('error');
    }
    
}

function validateZip(){
    const zip_value = document.getElementById('zip').value;
    let re = /^[0-9]{6}$/;
    const zip = document.querySelector('#zip');

    if(re.test(zip_value)){
        zip.parentElement.classList.remove('error');
        zip.parentElement.classList.add('success');
        
    }else{
        zip.parentElement.classList.remove('success');
        zip.parentElement.classList.add('error');
    }
}

function validateEmail(){
    const email_value = document.getElementById('email').value;
    let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const email = document.querySelector('#email');

    if(re.test(email_value)){
        email.parentElement.classList.remove('error');
        email.parentElement.classList.add('success');
        
    }else{
        email.parentElement.classList.remove('success');
        email.parentElement.classList.add('error');
    }
    
}

function validatePhone(){
    const phone_value = document.getElementById('phone').value;
    let re = /^\d{10}$/;
    const phone = document.querySelector('#phone');

    if(re.test(phone_value)){
        phone.parentElement.classList.remove('error');
        phone.parentElement.classList.add('success');
        
    }else{
        phone.parentElement.classList.remove('success');
        phone.parentElement.classList.add('error');
    }
}

function validatePass(){
    const pass_value = document.getElementById('pass').value;
    let re = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
    const pass = document.querySelector('#pass');

    if(re.test(pass_value)){
        pass.parentElement.classList.remove('error');
        pass.parentElement.classList.add('success');
        
    }else{
        pass.parentElement.classList.remove('success');
        pass.parentElement.classList.add('error');
    }
}

function validateC_pass(){
    const pass_value = document.getElementById('pass').value;
    const c_pass_value = document.getElementById('cpass').value;
    const c_pass = document.getElementById('cpass');
    if(c_pass_value === pass_value){
        c_pass.parentElement.classList.add('success');
        c_pass.parentElement.classList.remove('errot');
    }else{
        c_pass.parentElement.classList.add('error');
        c_pass.parentElement.classList.remove('success');
    }
}
function toggleicon1(){
    const icon = document.querySelector('#toggle_icon1');
    const input = document.getElementById('pass');
    icon.classList.toggle('fa-eye-slash');
    
    if(icon.classList.contains('fa-eye-slash')){
        input.type = 'text';
    }else{
        input.type = 'password';
    }
    // icon.classList.add('fa-eye');

}
function toggleicon2(){
    const icon = document.querySelector('#toggle_icon2');
    const input = document.getElementById('cpass');
    icon.classList.toggle('fa-eye-slash');
    
    if(icon.classList.contains('fa-eye-slash')){
        input.type = 'text';
    }else{
        input.type = 'password';
    }
    // icon.classList.add('fa-eye');

}


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    checkinputs();
})

function checkinputs(){
    const username_value = username.value.trim();       //trim() removes all blank spaces form the string
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    const c_password_value = c_password.value.trim();

    if(username_value === ''){
        //show error 
        //show error class
        showError(username,`Username can't be blank`);
    }else{
        //show success class
        showSuccess(username)
    }
    if(email_value === ''){
        showError(email,`Email can't be blank`)
    }else if(!isEmail(email_value)){
        showError(email,'Not a valid Email');
    }else{
        showSuccess(email);
    }
    if(password_value === ''){
        showError(password,'Password cannot be blank');
    }else{
        showSuccess(password)
    }
    if(c_password_value === ''){
        showError(c_password,'Password cannot be blank');

    }else if(c_password_value !== password_value){
        showError(c_password,'Passwor does not match')
    }else{
        showSuccess(c_password)
    }
}


function showError(username, message){
    const formcontrol = username.parentElement;
    const message_div = formcontrol.querySelector('span');

    message_div.innerText = message;
    formcontrol.classList.add('error')
}
function showSuccess(username){
    const formcontrol = username.parentElement;
    formcontrol.classList.add('success')
}
//azax used here
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}