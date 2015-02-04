$('#btnYanitla').click(function () {

    d = new FormData();
    var kime = $("#lblKimden").attr("data-GondericiID");
    var konu = $("#lblKonu").html();
    var mesaj = $("#txtMetin").val();
    if (mesaj != "") {
        d.append("txtKime", kime);
        d.append("txtKonu", 'RE:' + konu);
        d.append("txtMetin", mesaj);


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