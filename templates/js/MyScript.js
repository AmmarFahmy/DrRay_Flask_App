/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    if(window.location.href.indexOf("updatea=success") > -1){
        swal({   title: "Update success !!", 
        text: "Your details suceessfully updated.",   
        type: "success",
        icon: "success",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    }else if(window.location.href.indexOf("updatea=fail") > -1){
        swal({   title: "Oops !", 
        text: "Couldn't update the data",   
        type: "warning",
        icon: "warning",
        showCancelButton: false,   
        confirmButtonColor: "#DD6B55",
        closeOnConfirm: false,
        confirmButtonText: "OK!"});
    } 
});
