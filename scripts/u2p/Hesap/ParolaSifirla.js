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
                required: "<p class='text-danger'> Yeni parolanı gir</p>",
                minlength: "<p class='text-danger'> Yeni parolan en az 6 karakterden oluşmalı</p>"
            },

            txtReParola: {
                required: "<p class='text-danger'> Yeni parolanı tekrar gir</p>",
                equalTo: "<p class='text-danger'> Girdiğin parolalar birbiriyle uyuşmadı</p>",
                minlength: "<p class='text-danger'>Parolan en az 6 karakterden oluşmalı</p>"
            }


        },

        submitHandler: function (form) {
            $(form).ajaxSubmit({

                error: function (msg) {HataMesaji('Beklenmeyen bir hata meydana geldi !');},

                success: function (msg) {
                    if (msg == "OK") {
                      
                        MesajKutusu("OK !","Parolan başarıyla değiştirildi")
                    }

                    if (msg == "hata") {
                      
                        HataMesaji("Beklenmeyen bir hata meydana geldi !");
                    }


                }

            });
        }


    });




});