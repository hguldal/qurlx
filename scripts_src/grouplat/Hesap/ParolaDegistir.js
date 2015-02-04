$("#frmParolaDegistir").validate({

    rules: {

        txtParola: {
            required: true,
            minlength: 6
        },


        txtYeniParola: {
            required: true,
            minlength: 6
        },

        txtReYeniParola: {
            required: true,
            minlength: 6,
            equalTo: "#txtYeniParola"
        }

    },

    messages: {

        txtParola: {
            required: "<p class='text-danger'> Enter your password</p>",
            minlength: "<p class='text-danger'> Password must be at least six characters</p>"
        },

        txtYeniParola: {
            required: "<p class='text-danger'> Confirm password</p>",
            minlength: "<p class='text-danger'> Password must be at least six characters</p>"
        },
        txtReYeniParola: {
            required: "<p class='text-danger'> Confirm password</p>",
            equalTo: "<p class='text-danger'> Passwords you have entered are mismatch</p>",
            minlength: "<p class='text-danger'>Password must be at least six characters</p>"
        }


    },

    submitHandler: function (form) {


        $(form).ajaxSubmit({

            error: function (msg) { HataMesaji("On error occured while password is changing"); },

            success: function (msg) {
                if (msg == "OK") {
                    MesajKutusu("OK !", "Password was changed");

                }
                if (msg == "hata") {

                    HataMesaji("On error occured while password is changing");
                }
            }

        });
    }
});