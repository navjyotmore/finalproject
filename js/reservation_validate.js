window.onload = function() {

    document.getElementById('submit').onclick = validate;
}

function validate(){

    let firstname = document.querySelector('#fname');
    let lastname = document.querySelector('#lname');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');

    let namepattern = /^[a-zA-z]{2,20}$/;
    let phonepattern = /^[0-9]{10}$/;
    let emailpattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!namepattern.test(firstname.value)){
        alert("Please enter your firstname only with letters!!");
    } else if(!namepattern.test(lastname.value)){
        alert("Please enter your lastname only with letters!!");
    } else if(!phonepattern.test(phone.value)){
        alert("Please enter your phone with ten numbers!!");
    } else if(!emailpattern.test(email.value)){
        alert("Please enter your personal as a pattern like someone@someserver.com");
    } else {
        alert("Your entries of name, phone and email are all valid.")
    }

}