$(document).ready(function () {

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
            HataMesaji('Enter URL');
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
                tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span></td><td>' + urlAciklama + '</td><td><a href="' + location.href.replace('#', '') + msg.kisaKod + '" title="' + msg.url + '" > ' + location.href.replace('#', '') + msg.kisaKod + '</a></td><td><a href="/ChangeURLSettings/' + msg.kisaKod + '" class="btn btn-success" title="Change Settings"><span class="glyphicon glyphicon-cog"></span></a> <a href="#" class="btn btn-danger lnkUrlSil" title="Delete URL" data-kisakod="' + msg.kisaKod + '"><span class="glyphicon glyphicon-trash"></span></a> <a href="Stats/' + msg.kisaKod + '" class="btn btn-info" title="URL Stats"><span class="glyphicon glyphicon-stats"></span></a></td>');
                $('#lstUrl > tbody').prepend(tr);

                
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
                location.href = '/' + kategori.kategoriID;
                
            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }
        });

    });


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
                        location.href = '/';

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

