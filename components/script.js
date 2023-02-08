const form = document.getElementById('form');
const inputs = document.querySelectorAll("[required]");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    passMain();
    comparePassword();
})

function setError(index){
    inputs[index].style.border = "1px solid red"
}

function setOk(index){
    inputs[index].style.border = "1px solid blue"
}


function nameValidate(){
    if(inputs[0].value.length < 3){
        setError(0);
    } else {
        setOk(0);
    }
}

function emailValidate(){
    if(emailRegex.test(inputs[1].value)){
        setOk(1); 
    } else {
        setError(1);
    }
}

function passMain(){
    if(inputs[2].value.length < 8){
        setError(2);
    } else {
        setOk(2);
        comparePassword();
    }
}

function comparePassword(){
    if(inputs[2].value === inputs[3].value && inputs[3].value.length >= 8){
        setOk(3);
    } else {
        setError(3);
    }
}

