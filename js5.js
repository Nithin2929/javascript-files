function  dhoni(){
    alert('Button on clicked')
}
var head=document.getElementById('head');
head.addEventListener('mouseover',()=>{
    head.style.color='brown'
})
function leave(){
    head.style.color='red'
}
function jack(eve){
    console.log(eve.target.value);
}
var text=document.getElementById('focus');
function nithin(){
    text.style.backgroundColor='yellow'
}
function submitted(){
    alert('submitted succesfully')
}

//Regular Exoression
let email = document.getElementById('email');
let error = document.getElementById('error');

let regex = /^[a-zA-Z0-9._#-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

function validate() {

    if (regex.test(email.value)) {
        error.textContent = 'Email is valid';
        error.style.color = 'green';
        return true;
    }
    else {
        error.textContent = 'Email is invalid';
        error.style.color = 'red';
        return false;
    }
}

function verify(){
    let num=document.getElementById('num');
let errmsg=document.getElementById('errmsg');
    try{
        let x=num.value;
        if(x<5) throw 'number is too low';
        if(x>10) throw 'number is too high';

    }catch (error){
        // console.log(`The erroe is ${error}`);
        errmsg.textContent=`The error is ${error}`;
    }
}