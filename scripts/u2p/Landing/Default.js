$('#btnKisalt').click(function () {

    var url = $('#txtUrl').val();
    if (url) {
        $.ajax({
            type: "POST",
            dataType: 'json',
            url: '/ajax/UrlEklePublic' + '?nUrl=' + url,

            success: function (msg) {
                $('#txtUrl').val(window.location.host + '/' + msg.kisaKod);
                $('#txtUrl').focus(function () { $('#txtUrl').select(); });
                $('#btnKisalt').attr('disabled', 'true');
                $('#txtUrl').focus();

            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });
    }
});
