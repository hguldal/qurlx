$(document).ready(function () {
    UrlYukle('hepsi');

    $("#btnUrlEkle").click(function () {

        var url = prompt("URL'ni buraya yapıştır");

        if (url == '' || url == null) {
            return false;
        }
        else {
            $.ajax({
                type: "POST",
                url: '/ajax/UrlEkle' + '?nUrl=' + url,
                dataType: 'json',
                success: function (msg) {
                    var tr = $('<tr/>');
                    tr.append('<td><h5><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + msg.url + '"> ' + msg.url + '</a></h5></td><td><h5><a href="' + location.href + msg.kisaKod + '">' + location.href + msg.kisaKod + '</h5></td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');
                    $('#lstUrl > tbody').prepend(tr);

                },
                error: function (msg) {
                    HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
                }
            });
        }

    });

    $('#btnKategoriEkle').click(function () {
        var kategoriAdi = prompt("Kategoriye bir ad ver");

        if (kategoriAdi == null || kategoriAdi == '') {
            return false;
        }

        $.ajax({
            type: "POST",
            url: '/ajax/KategoriEkle' + '?KategoriAdi=' + kategoriAdi,

            success: function (kategoriID) {

                var liste = $('#listeKategori');

                liste.append('<a href="' + location.href + 'Kategori?KategoriID=' + kategoriID + '" class="list-group-item"><span class="glyphicon glyphicon-tag"></span> ' + kategoriAdi + '<span class="badge">0</span></a>');


            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
            }
        });

    });

    $('.kategoriOgesi').click(function () {
        var kod = $(this).attr('data-kisakod');
        $('.kategoriOgesi').removeClass('active');
        $(this).addClass('active');
        UrlYukle(kod);


    });

    function UrlYukle(kod) {
        $.ajax({
            type: "POST",
            url: '/ajax/UrlListesi' + '?KisaKod=' + kod,

            success: function (urls) {
                $('#lstUrl > tbody').find('tr').remove();
                for (var i = 0; i < urls.length; i++) {

                    var tr = $('<tr/>');

                    tr.append('<td><h5><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + urls[i].url + '"> ' + urls[i].url + '</a></h5></td><td><h5><a href="' + location.href + urls[i].kisaKod + '">' + location.href + urls[i].kisaKod + '</h5></td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');

                    $('#lstUrl > tbody').prepend(tr);


                }


            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
            }
        });
    }
});

