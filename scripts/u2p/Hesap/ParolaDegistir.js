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
            required: "<p class='text-danger'> Geçerli parolanı gir</p>",
            minlength: "<p class='text-danger'> Parolan en az 6 karakterden oluşmalı</p>"
        },

        txtYeniParola: {
            required: "<p class='text-danger'> Yeni parolanı tekrar gir</p>",
            minlength: "<p class='text-danger'> Yeni parolan en az 6 karakterden oluşmalı</p>"
        },
        txtReYeniParola: {
            required: "<p class='text-danger'> Yeni parolanı tekrar gir</p>",
            equalTo: "<p class='text-danger'> Girdiğin parolalar birbiriyle uyuşmadı</p>",
            minlength: "<p class='text-danger'>Parolan en az 6 karakterden oluşmalı</p>"
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