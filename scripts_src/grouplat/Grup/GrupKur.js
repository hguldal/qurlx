 $('#cmbKategori').selectize({
    plugins: ['remove_button'],
    maxItems: 10
});


$("#btnGrupKur").click(function (msg) {
            
                $("#frmGrupKur").submit();
            
        });


        var t = $("#frmGrupKur").validate({

            rules: {

                txtGrupAdi: {
                    required: true
                }
            },

            messages: {
                txtGrupAdi: "<p class='text-danger'> Enter the group name</p>"

            },

            submitHandler: function (form) {

                $(form).ajaxSubmit({

                    error: function (msg) { HataMesaji("Unexpected error !"); },

                    success: function (msg) {
                        if (msg == 'grupuyeligiyetersiz') {
                            HataMesaji("In onder to create a group you must follow at least three groups");
                        }
                        else if (msg=='grupkurmasiniriasilmis') {
                            HataMesaji("You have a group already. Standart accounts can create one group only");
                        }
                        else {
                            window.location.href = "/Grup/Gruplarim";
                        }

                    }

                });
            }


        });

  
