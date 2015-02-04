 $('.txtKime').selectize({
            plugins: ['remove_button'],
            valueField: 'UserID',
            labelField: 'adsoyad',
            searchField: 'adsoyad',
            options: [],
            create: false,
            load: function (query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/Mesaj/JsonKisiListesi.cshtml',
                    data: {
                          sorgu: query
                          },
                    dataType: 'json',
                    type: 'GET',
                    error: function () {
                       
                        callback();
                    },
                    success: function (res) {
                       callback(res);
                    }
                });
            }

        });


        $("#btnMesajGonder").click(function (msg) {
            
                $("#frmMesajGonder").submit();
            
        });


        var t = $("#frmMesajGonder").validate({
            ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
            rules: {

                txtKime: {
                    required: true
                },

                txtKonu: {
                    required: true
                },

                txtMetin: {
                    required: true
                }

            },

            messages: {
                txtKime: "<p class='text-danger'> Enter recipient</p>",
                txtKonu: "<p class='text-danger'> Enter subject</p>",
                txtMetin: "<p class='text-danger'> Enter message</p>"
            },

            submitHandler: function (form) {

                d = new FormData();
                var kime = $("#txtKime").val();
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

  
