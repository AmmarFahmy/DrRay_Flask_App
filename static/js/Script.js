/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showhide() {
  var x = document.getElementById("userPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showhide1() {
  var y = document.getElementById("newpw1");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

function showhide2() {
  var z = document.getElementById("newpw2");
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}

$(document).ready(function() {
    $(".error_message").delay(2000).fadeIn(500);
});

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}



$(document).ready(function () {
    
    if(window.location.href.indexOf("login=fail") > -1) {
        swal({   title: "Login Failed!!", 
        text: "Check your username and password again",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    if(window.location.href.indexOf("login=success") > -1) {
        swal({   title: "Login Success!!",    
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("username=already_in_use") > -1){
        swal({   title: "Registration Failed!!", 
        text: "Username is already in use!! Try another username.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("uemail=already_in_use") > -1){
        swal({   title: "Registration Failed!!", 
        text: "Email is already in use!! Try another username.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("registration=success") > -1){
        swal({   title: "Registration Success!!", 
        text: "Please verify your email before login.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("reset=success") > -1){
        swal({   title: "Reset email sent to your email!!", 
        text: "Please check your email.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("reset=fail") > -1){
        swal({   title: "Please check your email!!", 
        text: "There is no account to this email.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("update=success") > -1){
        swal({   title: "Your Password is successfully updated!!!", 
        text: "Enter your username and password to login.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("confirm=fail") > -1){
        swal({   title: "Your account is not activated!!", 
        text: "Please verify your email address before login.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }

    //randika
    else if(window.location.href.indexOf("change=success") > -1){
        swal({   title: "your details suceessfully updated !!", 
        text: "Your details suceessfully updated.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("changew=fail") > -1){
        swal({   title: "your details not suceessfully updated !!", 
        text: " oops! sothing happen Your details not suceessfully updated try again.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
     else if(window.location.href.indexOf("Deactivate=success") > -1){
        swal({   title: "This user is deactivated succsessfully !!", 
        text: "This user is deactivated succsessfully.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("changew=fail") > -1){
        swal({   title: "your details not suceessfully deleted !!", 
        text: " oops! sothing happen Your details not suceessfully deleted try again.",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
     else if(window.location.href.indexOf("outstnding=success") > -1){
        swal({   title: "your massege successfully send to user !!", 
        text: "your massege successfully send to user.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
     else if(window.location.href.indexOf("accreq=success") > -1){
        swal({   title: "This user request accepted successfully !!", 
        text: "This user request accepted successfully.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    else if(window.location.href.indexOf("accreqw=fail") > -1){
        swal({   title: "user request not successfully accepted try again !!", 
        text: " user request not successfully accepted try again .",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    else if(window.location.href.indexOf("vehreq=success") > -1){
        swal({   title: "This user vehicle accepted successfully !!", 
        text: "This user vehicle accepted successfully.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
    
    if(window.location.href.indexOf("loginerror=failed") > -1) {
        swal({   title: "Login Failed!!", 
        text: "Please login again",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }
});


$('#uFname').keypress(function (e) {
    var txt = String.fromCharCode(e.which);
    if (!txt.match(/[A-Za-z0-9&.]/)) {
        return false;
    }
});
