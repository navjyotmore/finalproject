window.onload = function() {
    document.getElementById('submit').onclick = validate;
}

function validate(){
    let firstname = document.querySelector('#fname');
    let lastname = document.querySelector('#lname');
    let namepattern = /^[a-zA-z]{2,20}$/;

    if((firstname.value == "")&&(lastname.value == "")){
        alert("Please enter your firstname and lastname!!");
    } else if(firstname.value == ""){
        alert("Please enter your firstname!!");
    } else if(lastname.value == ""){
        alert("Please enter your lastname!!");
    } else if((!namepattern.test(firstname.value))&&(!namepattern.test(lastname.value))){
        alert("Please enter your firstname and lastname only with letters!!");
    } else if(!namepattern.test(firstname.value)){
        alert("Please enter your firstname only with letters!!");
    } else if(!namepattern.test(lastname.value)){
        alert("Please enter your lastname only with letters!!");
    }

    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let phonepattern = /^[0-9]{10}$/;

    if(phone.value == ""){
        alert("Please enter your phone number!!"); 
    } else if(!phonepattern.test(phone.value)){
        alert("Please enter your phone with ten numbers!!");
    } else if(email.value == ""){
        alert("Please enter your personal email!!");
    }

}