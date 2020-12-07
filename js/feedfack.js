 /*validating for empty fields*/
 function validateForm() {
    var nameemp = document.forms["feedback"]["name"].value;
    var ageval = document.forms["feedback"]["age"].value;
    var emailval = document.forms["feedback"]["email"].value;
    var phoneval = document.forms["feedback"]["phone"].value;
    var commentval = document.forms["feedback"]["comments"].value;

    if (nameemp == "" || nameemp == null) {
       alert("Enter your name");
       return false;
    } else if (emailval == "" || emailval == null) {
       alert("Enter your email id");
       return false;
    } else if (ageval == "" || ageval == null) {
       alert("Enter  your age");
       return false;
    } else if (phoneval == "" || phoneval == null) {
       alert("Enter your contact info");
       return false;
    } else if (commentval == "" || commentval == null) {
       alert("Describe your experience");
       return false;
    } /*code for displaying message*/ else {
       // Get the message
       var message = document.getElementById("mymessage");

       // Get the button that opens the messaage
       var btn = document.getElementById("submitform");

       // Get the <span> element that closes the message
       var span = document.getElementsByClassName("close")[0];

       // When the user clicks the button, open the message 
       btn.onclick = function () {
          message.style.display = "block";
       };

       // When the user clicks on <span> (x), close the message
       span.onclick = function () {
          message.style.display = "none";
       };

       // When the user clicks anywhere outside of the message, close it
       window.onclick = function (event) {
          if (event.target == message) {
             message.style.display = "none";
          }
       };
    }

 }