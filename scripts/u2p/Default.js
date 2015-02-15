$(document).ready(function () {

   
    $("#btnUrlEkle").click(function () {

        var url = $('#url').val();

        if (url == '') {
            HataMesaji('Url alanını boş bırakamazsın');
            $('#url').focus();
        }
        else {
            $.ajax({
                type: "POST",
                url: '/ajax/UrlEkle' + '?nUrl=' + url,
                dataType: 'json',
                success: function (msg) {
                    var tr = $('<tr/>');
                    
                    tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + msg.url + '"> ' + msg.url + '</a></td><td><a href="' +  location.href + msg.kisaKod   + '">' + location.href + msg.kisaKod +'</td><td></td>');
                    $('#lstUrl > tbody').prepend(tr);
                    
                    $('#url').val('');

                },
                error: function (msg) {
                    HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
                }
            });
        }

    });


});

