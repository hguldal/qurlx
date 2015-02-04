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


        $("#btnIlet").click(function (msg) {
            
                $("#frmMesajGonder").submit();
            
        });


        var t = $("#frmMesajGonder").validate({
            ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
            rules: {

                txtKime: {
                    required: true
                }

            },

            messages: {
                txtKime: "<p class='text-danger'> Enter recipient</p>"

            },

            submitHandler: function (form) {

                d = new FormData();
                var kime = $("#txtKime").val();
                var mesajID = $("#btnIlet").attr("data-MesajID");
             
                d.append("txtKime", kime);
                d.append("MesajID", mesajID);


                $.ajax({
                    url: '/api/Mesaj/Ilet.cshtml',
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

  
