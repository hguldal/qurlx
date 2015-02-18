$(document).ready(function () {

    UrlYukle('hepsi');

    $("#btnUrlEkle").click(function () {

        var url = prompt("URL'ni buraya yapıştır");
        var kategori = $('.list-group-item.active.kategoriOgesi').attr('data-kisaKod')
        if (url == '' || url == null) {
            return false;
        }
        else {
            $.ajax({
                type: "POST",
                url: '/ajax/UrlEkle' + '?nUrl=' + url + '&kategori=' + kategori,
                dataType: 'json',
                success: function (msg) {
                    var tr = $('<tr/>');
                    tr.append('<td><h5><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + msg.url + '"> ' + msg.url + '</a></h5></td><td><h5><a href="' + location.href.replace('#', '') + msg.kisaKod + '">' + location.href.replace('#', '') + msg.kisaKod + '</h5></td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');
                    $('#lstUrl > tbody').prepend(tr);

                    var urlAdedi = parseInt($('.list-group-item.active.kategoriOgesi > span.badge').html());
                    urlAdedi = urlAdedi + 1;
                    $('.list-group-item.active.kategoriOgesi > span.badge').html(urlAdedi);
                },
                error: function (msg) {
                    HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
                }
            });
        }

    });

    $('#btnKategoriEkle').click(function () {
        var kategoriAdi = prompt("Listene bir ad ver");

        if (kategoriAdi == null || kategoriAdi == '') {
            return false;
        }

        $.ajax({
            type: "POST",
            dataType: 'json',
            url: '/ajax/KategoriEkle' + '?KategoriAdi=' + kategoriAdi,

            success: function (kategori) {

                var liste = $('#listeKategori');
              
                $('.kategoriOgesi').removeClass('active');
                liste.append('<a href="#" class="list-group-item kategoriOgesi active" data-kisaKod="' + kategori.kisaKod + '"><span class="glyphicon glyphicon-tag"></span> ' + kategoriAdi + '<span class="badge">0</span></a>');
                $('#lstUrl > tbody').find('tr').remove();
                $('.list-group-item.kategoriOgesi.active').focus();
                $('.kategoriOgesi').on('click', function () {
                    var kod = $(this).attr('data-kisakod');
                    $('.kategoriOgesi').removeClass('active');
                    $(this).addClass('active');
                    UrlYukle(kod);
                });

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

                    tr.append('<td><h5><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + urls[i].url + '"> ' + urls[i].url + '</a></h5></td><td><h5><a href="' + location.href.replace('#', '') + urls[i].kisaKod + '">' + location.href.replace('#', '') + urls[i].kisaKod + '</h5></td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');

                    $('#lstUrl > tbody').prepend(tr);


                }


            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
            }
        });
    }

});

