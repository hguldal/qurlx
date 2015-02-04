


        $("#btnMesajGonder").click(function (msg) {
            
                $("#frmMesajGonder").submit();
            
        });


        var t = $("#frmMesajGonder").validate({
            ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
            rules: {

                txtKonu: {
                    required: true
                },

                txtMetin: {
                    required: true
                }

            },

            messages: {

                txtKonu: "<p class='text-danger'> Enter subject</p>",
                txtMetin: "<p class='text-danger'> Enter message</p>"
            },

            submitHandler: function (form) {

                d = new FormData();
                var kime = $("#txtKime").attr("data-UserID");
                var konu = $("#txtKonu").val();
                var mesaj = $("#txtMetin").val();
                var dosya = $('#fileUpload')[0].files[0];
                d.append("txtKime", kime);
                d.append("txtKonu", konu);
                d.append("txtMetin", mesaj);
                d.append('file', dosya);

                $.ajax({
                    url: '/api/Mesaj/Gonder.cshtml',
                    data: d,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: function (data) { 
                        window.location.href = "/Mesaj/Gonderilen";
                       
                    },
                    error: function (de) {
                        HataMesaji('Unexpected Error !');
                    }
                });

            }


        });

  
