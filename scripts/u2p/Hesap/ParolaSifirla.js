$(document).ready(function () {

    $("#frmParolaSifirla").validate({

        rules: {

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

            txtParola: {
                required: "<p class='text-danger'> Enter your password</p>",
                minlength: "<p class='text-danger'>Password must be at least six characters</p>"
            },

            txtReParola: {
                required: "<p class='text-danger'> Confirm password</p>",
                equalTo: "<p class='text-danger'> Passwords you have entered are mismatch</p>",
                minlength: "<p class='text-danger'>Password must be at least six characters</p>"
            }


        },

        submitHandler: function (form) {
            $(form).ajaxSubmit({

                error: function (msg) {HataMesaji('Unexpected Error !');},

                success: function (msg) {
                    if (msg == "OK") {
                      
                        MesajKutusu("OK !","Password was reset successfuly")
                    }

                    if (msg == "hata") {
                      
                        HataMesaji("Unexpected Error !");
                    }


                }

            });
        }


    });




});