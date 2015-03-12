$(document).ready(function () {

    UrlYukle('-1');

    $('body').on('click', '.kategoriOgesi', function () {
        var kategoriID = $(this).attr('data-kategoriID');
        $('.kategoriOgesi').removeClass('active');
        $(this).addClass('active');
        UrlYukle(kategoriID);
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
        var kategoriID = $('.list-group-item.active.kategoriOgesi').attr('data-kategoriID');

        $.ajax({
            type: "POST",
            url: '/ajax/UrlEkle' + '?nUrl=' + url + '&kategoriID=' + kategoriID + '&aciklama=' + urlAciklama,
            dataType: 'json',
            success: function (msg) {
                $('#modalURLEkle').modal('hide');
                $('#txtURLEkle').val('');
                $('#txtURLAciklama').val('');
                var tr = $('<tr/>');
                tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span></td><td>' + urlAciklama + '</td><td><a href="' + location.href.replace('#', '') + msg.kisaKod + '" title="' + msg.url + '" > ' + location.href.replace('#', '') + msg.kisaKod + '</a></td><td><a href="/ChangeURLSettings/' + msg.kisaKod + '" class="btn btn-xs btn-info" title="Change Settings"><span class="glyphicon glyphicon-cog"></span></a> <a href="#" class="btn btn-xs btn-danger lnkUrlSil" title="Delete URL" data-kisakod="' + msg.kisaKod + '"><span class="glyphicon glyphicon-trash"></span></a> <a href="Stats/' + msg.kisaKod + '" class="btn btn-xs btn-info" title="URL Stats"><span class="glyphicon glyphicon-stats"></span></a></td>');
                $('#lstUrl > tbody').prepend(tr);

                var urlAdedi = parseInt($('.list-group-item.active.kategoriOgesi > span.badge').html());
                urlAdedi = urlAdedi + 1;
                $('.list-group-item.active.kategoriOgesi > span.badge').html(urlAdedi);

                var toplamUrlAdedi = parseInt($('#listeKategori>[data-kategoriID="-1"]>span.badge').html());
                toplamUrlAdedi = toplamUrlAdedi + 1;
                $('[data-kategoriID="-1"]>span.badge').html(toplamUrlAdedi);


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
                liste.append('<a href="#" class="list-group-item kategoriOgesi active" data-kategoriID="' + kategori.kategoriID + '" data-kategoriAdi="' + kategori.kategoriAdi + '">' + kategoriAdi + '<span class="badge">0</span></a>');
                $('#lstUrl > tbody').find('tr').remove();
                $('.list-group-item.kategoriOgesi.active').focus();


            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });

    });

    function UrlYukle(kategoriID) {

        $.ajax({
            type: "POST",
            url: '/ajax/UrlListesi' + '?kategoriID=' + kategoriID,

            success: function (urls) {
                //tabloyu temizle
                $('#lstUrl > tbody').find('tr').remove();

                //urlleri tek tek tabloya ekle
                for (var i = 0; i < urls.length; i++) {

                    var tr = $('<tr/>');

                    tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span></td><td>' + urls[i].aciklama + '</td><td><a href="' + location.href.replace('#', '') + urls[i].kisaKod + '" title="' + urls[i].url + '">' + location.href.replace('#', '') + urls[i].kisaKod + '</td><td><a href="/ChangeURLSettings/' + urls[i].kisaKod + '" class="btn btn-info btn-xs" title="Change Settings"><span class="glyphicon glyphicon-cog"></span></a> <a href="#" class="btn btn-xs btn-danger lnkUrlSil" title="Delete URL" data-kisaKod=' + urls[i].kisaKod + '><span class="glyphicon glyphicon-trash"></span></a> <a href="Stats/' + urls[i].kisaKod + '" class="btn btn-xs btn-info" title="URL Stats"><span class="glyphicon glyphicon-stats"></span></a></td>');

                    $('#lstUrl > tbody').prepend(tr);

                }
                //yukarıda liste adını ve adresi göster
                if (kategoriID != '-1') {
                    $('#kategoriAdi').html($('#listeKategori>[data-kategoriID="' + kategoriID + '"]').attr('data-kategoriAdi'));
                }
                else {
                    $('#kategoriAdi').html($('#listeKategori>[data-kategoriID="-1"]').attr('data-kategoriAdi'));
                    $('#listeKategori>[data-kategoriID="-1"]').addClass('active');
                }


            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });
    }

    $('.menuKategoriSil').click(function () {

        var kategoriID = $('.list-group-item.active.kategoriOgesi').attr('data-kategoriID')
        if (kategoriID != '-1') {

            if (confirm('Are you sure ?')) {
                $.ajax({
                    type: "POST",
                    dataType: 'json',
                    url: '/ajax/KategoriSil' + '?kategoriID=' + kategoriID,

                    success: function (msg) {
                        $('#listeKategori').find('.list-group-item.active.kategoriOgesi').remove();
                        UrlYukle('-1');
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

