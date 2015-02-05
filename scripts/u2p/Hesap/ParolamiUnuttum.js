$("#frmSifirlamaKoduGonder").validate({

    rules: {
        txtEmail: {
            required: true,
            email: true
        }
    },

    messages: {

        txtEmail: "<p class='text-danger'> E-posta adresini gir</p>"

    },

    submitHandler: function (form) {


        $(form).ajaxSubmit({

            error: function (msg) { HataMesaji('Beklenmeyen bir hata oluştu !'); },

            success: function (msg) {
                $("#btnSifirlamaKoduGonder").attr("disabled", false);
                if (msg == "OK") {

                    MesajKutusu("OK !", "Parola sıfırlama kodu e-posta adresine gönderildi");
                }
                if (msg == "epostakayitlidegil") {

                    HataMesaji("Girdiğin e-posta adresi sistemde kayıtlı değil");
                }
            }

        });
    }


});