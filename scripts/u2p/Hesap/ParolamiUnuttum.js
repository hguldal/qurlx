$("#frmSifirlamaKoduGonder").validate({

    rules: {
        txtEmail: {
            required: true,
            email: true
        }
    },

    messages: {

        txtEmail: "<p class='text-danger'> Enter your e-mail</p>"

    },

    submitHandler: function (form) {


        $(form).ajaxSubmit({

            error: function (msg) { HataMesaji('Unexpected Error !'); },

            success: function (msg) {
                $("#btnSifirlamaKoduGonder").attr("disabled", false);
                if (msg == "OK") {

                    MesajKutusu("OK !", "Password reset code was sent to your e-mail");
                }
                if (msg == "epostakayitlidegil") {

                    HataMesaji("E-mail you have entered is not registered");
                }
            }

        });
    }


});