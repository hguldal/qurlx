$(document).ready(function () {

    UrlYukle('hepsi');

    $('body').on('click', '.kategoriOgesi', function () {
         var kod = $(this).attr('data-kisakod');
                    $('.kategoriOgesi').removeClass('active');
                    $(this).addClass('active');
                    UrlYukle(kod);
    });

    $('body').on('click', '.lnkUrlSil', function () {
                var kisakod = $(this).attr('data-kisakod');
                var satir = $(this).closest('tr');

                    if (confirm('Are you sure ?')) {

                        $.ajax({
                            type: "POST",
                            url: '/ajax/UrlSil?' + 'KisaKod=' + kisakod,
                            dataType: 'json',
                            success: function (msg) {

                                $(satir).animate({ backgroundColor: 'gray' }, 150).fadeOut(150, function () {
                                    $(satir).remove();
                                });

                                var toplamUrlAdedi = parseInt($('#listeKategori>[data-kisaKod="hepsi"]>span.badge').html());
                                toplamUrlAdedi = toplamUrlAdedi - 1;
                                $('[data-kisaKod="hepsi"]>span.badge').html(toplamUrlAdedi);

                            },
                            error: function (msg) {
                                HataMesaji("Unexpected Error !");
                            }
                        });


                    }
        
    });

    $("#btnURLEkle").click(function () {

        var url = $('#txtURLEkle').val();
        var urlAciklama = $('#txtURLAciklama').val();

        if (url == '' || url == null) {
            HataMesaji('URL Girmedin');
            return false;
        }
        var kategori = $('.list-group-item.active.kategoriOgesi').attr('data-kisaKod')

        $.ajax({
            type: "POST",
            url: '/ajax/UrlEkle' + '?nUrl=' + url + '&kategori=' + kategori + '&aciklama=' + urlAciklama,
            dataType: 'json',
            success: function (msg) {
                $('#modalURLEkle').modal('hide');
                $('#txtURLEkle').val('');
                $('#txtURLAciklama').val('');
                var tr = $('<tr/>');
                tr.append('<td><h4><span class="glyphicon glyphicon-link" aria-hidden="true"></span></h4></td><td>' + urlAciklama + '<br> <a href="' + location.href.replace('#', '') + msg.kisaKod + '">' + location.href.replace('#', '') + msg.kisaKod + '</td><td><a href="' + msg.url + '"> ' + msg.url + '</a></td><td><a href="#" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-cog"></span></a> <a href="#" class="btn btn-xs btn-danger lnkUrlSil" data-kisakod="' + msg.kisaKod +'"><span class="glyphicon glyphicon-trash"></span></a></td>');
                $('#lstUrl > tbody').prepend(tr);

                var urlAdedi = parseInt($('.list-group-item.active.kategoriOgesi > span.badge').html());
                urlAdedi = urlAdedi + 1;
                $('.list-group-item.active.kategoriOgesi > span.badge').html(urlAdedi);

                var toplamUrlAdedi = parseInt($('#listeKategori>[data-kisaKod="hepsi"]>span.badge').html());
                toplamUrlAdedi = toplamUrlAdedi + 1;
                $('[data-kisaKod="hepsi"]>span.badge').html(toplamUrlAdedi);


            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
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
                liste.append('<a href="#" class="list-group-item kategoriOgesi active" data-kisaKod="' + kategori.kisaKod + '" data-kategoriAdi="' + kategori.kategoriAdi + '"><strong>' + kategoriAdi + '</strong><span class="badge">0</span><br>' + location.href.replace('#', '') + kategori.kisaKod + '</a>');
                $('#lstUrl > tbody').find('tr').remove();
                $('.list-group-item.kategoriOgesi.active').focus();


            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });

    });

    function UrlYukle(kod) {

        $.ajax({
            type: "POST",
            url: '/ajax/UrlListesi' + '?KisaKod=' + kod,

            success: function (urls) {
                //tabloyu temizle
                $('#lstUrl > tbody').find('tr').remove();

                //urlleri tek tek tabloya ekle
                for (var i = 0; i < urls.length; i++) {

                    var tr = $('<tr/>');

                    tr.append('<td><h4><span class="glyphicon glyphicon-link" aria-hidden="true"></span></h4></td><td>' + urls[i].aciklama + '<br><a href="' + location.href.replace('#', '') + urls[i].kisaKod + '"> ' + location.href.replace('#', '') + urls[i].kisaKod + '</a></td><td><a href="' + urls[i].url + '">' + urls[i].url + '</td><td><a href="#" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-cog"></span></a> <a href="#" class="btn btn-xs btn-danger lnkUrlSil" data-kisaKod=' + urls[i].kisaKod + '><span class="glyphicon glyphicon-trash"></span></a></td>');

                    $('#lstUrl > tbody').prepend(tr);

                }
                //yukarıda liste adını ve adresi göster
                if (kod != 'hepsi') {
                    $('#kategoriAdi').html($('#listeKategori>[data-kisaKod="' + kod + '"]').attr('data-kategoriAdi') + '<br><small>' + location.href.replace('#', '') + kod + '</small>');
                }
                else {
                    $('#kategoriAdi').html($('#listeKategori>[data-kisaKod="hepsi"]').attr('data-kategoriAdi'));
                }
               

            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });
    }

    $('#menuKategoriSil').click(function () {

        var kisaKod = $('.list-group-item.active.kategoriOgesi').attr('data-kisaKod')
        if (kisaKod != 'hepsi') {


            if (confirm('Are you sure ?')) {
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    url: '/ajax/KategoriSil' + '?KisaKod=' + kisaKod,

                    success: function (msg) {
                        $('#listeKategori').find('.list-group-item.active.kategoriOgesi').remove();
                        UrlYukle('hepsi');
                        MesajKutusu('İşlem Tamam', 'List was deleted successfuly');
                    },
                    error: function (msg) {
                        HataMesaji("Unexpected Error !");
                    }
                });
            }

        }

    });

    $('#modalURLEkle').on('shown.bs.modal', function (e) {
        $('#txtURLAciklama').focus();
    });

    $('#modalKategoriEkle').on('shown.bs.modal', function (e) {
        $('#txtKategoriEkle').focus();
    });
});

