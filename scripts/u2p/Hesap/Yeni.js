$(document).ready(function () {
   

    $("#frmYeniUye").validate({

        rules: {
            
            txtAd: {
                required: true

            },
            
            txtSoyad: {
                required: true
            },
            txtEposta: {
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

           
            txtAd: "<p class='text-danger'> Adını Gir</p>",
            txtEposta: "<p class='text-danger'> E-Posta Adresini Gir</p>",
            txtSoyad: "<p class='text-danger'> Soyadını Gir</p>",
           
            txtParola: {
                required: "<p class='text-danger'> Parola Gir</p>",
                minlength: "<p class='text-danger'> Parolan en az 6 karakterden oluşmalıdır</p>"
            },

            txtReParola: {
                required: "<p class='text-danger'> Parolanı tekrar gir</p>",
                equalTo: "<p class='text-danger'> Girdiğin parolalar birbiriyle uyuşmadı</p>",
                minlength: "<p class='text-danger'>Parolan en az 6 karakterden oluşmalıdır</p>"
            }


        },

        submitHandler: function (form) {

            
            $(form).ajaxSubmit({

                error: function (msg) { HataMesaji('Beklenmeyen bir hata meydana geldi !');},

                success: function (msg) {
                    if (msg == "OK") {
                       
                        window.location.href = "/";
                    }
                    if (msg == "epostakayitli") {
                       
                        HataMesaji('Girdiğin e-posta adresi daha önce kayıt edilmiş.');
                    }

                   
                }

            });

        }


    });




});