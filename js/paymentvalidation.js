/*validating CVV number using regular expresssion*/
function cvvNumber(){
    var cvv=account_info.cvvNo;
    var cvvpatter=/^[0-9]{3}$/;
    if ( cvv.value.match(cvvpatter)){
        account_info.desc.focus();
        return true;
    }
    else{
        alert("CVV number should not  be more than 3 ");
     
        return false;
    }
}
/*validating card number using regular expresssion*/
function cardnum()
{
   var cardno=account_info.cardNumber;
    var cardnoformate = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if(cardno.value.match(cardnoformate)){
        account_info.desc.focus();
        return true;
    }else{
        alert("Not a valid Visa card number");
        return false;
    }
}

/*validating for empty fields*/
function validateForm() {
    var cardnameval = document.forms["account_info"]["ownername"].value;
    var cardnoval = document.forms["account_info"]["cardNumber"].value;
    var cvvval = document.forms["account_info"]["cvvNo"].value;
  
    if (cardnameval == "" || cardnameval == null ) {
      alert("Name must be filled out");
      return false;
    } else if (cvvval == "" || cvvval == null ){
        alert("cvv Number cannot be empty");
        return false;
    }else if(  cardnoval == "" || cardnoval == null ){
        alert("card Number cannot be empty");
        return false;
    }else{
        alert("Payment successful");
    }
        
  }






