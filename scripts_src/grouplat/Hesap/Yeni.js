$(document).ready(function () {
   

    $("#frmYeniUye").validate({

        rules: {
             txtGrupURL: {
                required: true
               
            },

            txtAd: {
                required: true

            },
            
            txtSoyad: {
                required: true
            },
            txtEmail: {
                required: true,
                email: true
            },

            txtParola: {
                required: true,
                minlength: 6
            },

            txtReParola: {
                required: true,
                minlength: 6,
                equalTo: "#txtParola"
            }

        },

        messages: {

            txtGrupURL: "<p class='text-danger'> Enter username</p>",
            txtAd: "<p class='text-danger'> Enter your name</p>",
            txtEmail: "<p class='text-danger'> Enter your e-mail</p>",
            txtSoyad: "<p class='text-danger'> Enter surname</p>",
           
            txtParola: {
                required: "<p class='text-danger'> Enter password</p>",
                minlength: "<p class='text-danger'> Password must be at least six characters</p>"
            },

            txtReParola: {
                required: "<p class='text-danger'> Confirm password</p>",
                equalTo: "<p class='text-danger'> Passwords you have entered are mismatch</p>",
                minlength: "<p class='text-danger'>Password must be at least six characters.</p>"
            }


        },

        submitHandler: function (form) {

            
            $(form).ajaxSubmit({

                error: function (msg) { HataMesaji('Unexpected Error !');},

                success: function (msg) {
                    if (msg == "OK") {
                       
                        window.location.href = "/";
                    }
                    if (msg == "epostakayitli") {
                       
                        HataMesaji('E-mail you have entered already registered');
                    }

                    if (msg == "grupurlkayitli") {
                       
                        HataMesaji('Username you have entered is already registered');
                    }
                }

            });

        }


    });




});