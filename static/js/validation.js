/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    var app = angular.module("regForm", []);
        app.controller('regFormC', function($scope) {
            $scope.user = {
                uFname: {
                    required: true,
                    minlength: 3,
                    maxlength: 15
                },
                
                uLname: {
                    required: true,
                    minlength: 3,
                    maxlength: 15
                },
                
                uPhoneNum: {
                    required: true,
                    minlength: 10,
                    maxlength: 10
                },
                
                userEmail: {
                    required: true,
                    minlength: 3
                    
                },
                
                userName: {
                    required: true,
                    minlength: 5,
                    maxlength: 15
                },
                
                uNICNum: {
                    required: true,
                    minlength: 9,
                    maxlength: 9
                },
                
                uSLMC: {
                    required: true,
                    minlength: 5,
                    maxlength: 5
                }
            }
    });

