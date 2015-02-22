$(document).ready(function () {

    UrlYukle('hepsi');

    $("#btnURLEkle").click(function () {

        var url = $('#txtURLEkle').val();

        if (url == '' || url == null) {
            HataMesaji('URL Girmedin');
            return false;
        }
        var kategori = $('.list-group-item.active.kategoriOgesi').attr('data-kisaKod')

        $.ajax({
            type: "POST",
            url: '/ajax/UrlEkle' + '?nUrl=' + url + '&kategori=' + kategori,
            dataType: 'json',
            success: function (msg) {
                $('#modalURLEkle').modal('hide');
                $('#txtURLEkle').val('');
                var tr = $('<tr/>');
                tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span> <a href="' + location.href.replace('#', '') + msg.kisaKod + '">' + location.href.replace('#', '') + msg.kisaKod + '</td><td><a href="' + msg.url + '"> ' + msg.url + '</a></td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');
                $('#lstUrl > tbody').prepend(tr);

                var urlAdedi = parseInt($('.list-group-item.active.kategoriOgesi > span.badge').html());
                urlAdedi = urlAdedi + 1;
                $('.list-group-item.active.kategoriOgesi > span.badge').html(urlAdedi);

                var toplamUrlAdedi = parseInt($('#listeKategori>[data-kisaKod="hepsi"]>span.badge').html());
                toplamUrlAdedi = toplamUrlAdedi + 1;
                $('[data-kisaKod="hepsi"]>span.badge').html(toplamUrlAdedi);

            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
            }
        });


    });

    $('#btnKategoriEkle').click(function () {
        var kategoriAdi = $('#txtKategoriEkle').val();

        if (kategoriAdi == null || kategoriAdi == '') {
            return false;
        }

        $.ajax({
            type: "POST",
            dataType: 'json',
            url: '/ajax/KategoriEkle' + '?KategoriAdi=' + kategoriAdi,

            success: function (kategori) {

                var liste = $('#listeKategori');
                $('#modalKategoriEkle').modal('hide')
                $('#txtKategoriEkle').val('');
                $('.kategoriOgesi').removeClass('active');
                liste.append('<a href="#" class="list-group-item kategoriOgesi active" data-kisaKod="' + kategori.kisaKod + '" data-kategoriAdi="'+ kategori.kategoriAdi +'"><span class="glyphicon glyphicon-tag"></span> ' + kategoriAdi + '<span class="badge">0</span></a>');
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
        $('#kategoriAdi').html($(this).attr('data-kategoriAdi'));
    });

    function UrlYukle(kod) {

        $('.kategoriOgesi').removeClass('active');
        $('#listeKategori').find('[data-kisakod="' + kod + '"]').addClass('active');
        $.ajax({
            type: "POST",
            url: '/ajax/UrlListesi' + '?KisaKod=' + kod,

            success: function (urls) {
                $('#lstUrl > tbody').find('tr').remove();
                for (var i = 0; i < urls.length; i++) {

                    var tr = $('<tr/>');

                    tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + location.href.replace('#', '') + urls[i].kisaKod + '"> ' + location.href.replace('#', '') + urls[i].kisaKod + '</a></td><td><a href="' + urls[i].url + '">' + urls[i].url + '</td><td><a href="#" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-cog"></span></a></td>');

                    $('#lstUrl > tbody').prepend(tr);


                }


            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
            }
        });
    }

    $('#modalURLEkle').on('shown.bs.modal', function (e) {
        $('#txtURLEkle').focus();
    });

    $('#modalKategoriEkle').on('shown.bs.modal', function (e) {
        $('#txtKategoriEkle').focus();
    });

    $('#menuKategoriSil').click(function () {

        var kisaKod = $('.list-group-item.active.kategoriOgesi').attr('data-kisaKod')
        if (kisaKod != 'hepsi') {
            
       
        if (confirm('Liste silinecek Emin misin ?')) {
            $.ajax({
                type: "POST",
                dataType: 'json',
                url: '/ajax/KategoriSil' + '?KisaKod=' + kisaKod,

                success: function (msg) {
                    $('#listeKategori').find('.list-group-item.active.kategoriOgesi').remove();
                    UrlYukle('hepsi');
                    MesajKutusu('İşlem Tamam', 'Liste Başarıyla Silindi');
                },
                error: function (msg) {
                    HataMesaji("Beklenmeyen Bir Hata Meydana Geldi");
                }
            });
        } 
        
        }

    });

});

