$(document).ready(function () {

    $('#cmbBaslangicTarihiAy').val($('#cmbBaslangicTarihiAy').attr('data-ilkdeger'));
    $('#cmbBaslangicTarihiGun').val($('#cmbBaslangicTarihiGun').attr('data-ilkdeger'));
    $('#cmbBaslangicTarihiYil').val($('#cmbBaslangicTarihiYil').attr('data-ilkdeger'));
    $('#cmbBaslangicTarihiSaat').val($('#cmbBaslangicTarihiSaat').attr('data-ilkdeger'));

    $('#cmbBitisTarihiAy').val($('#cmbBitisTarihiAy').attr('data-ilkdeger'));
    $('#cmbBitisTarihiGun').val($('#cmbBitisTarihiGun').attr('data-ilkdeger'));
    $('#cmbBitisTarihiYil').val($('#cmbBitisTarihiYil').attr('data-ilkdeger'));
    $('#cmbBitisTarihiSaat').val($('#cmbBitisTarihiSaat').attr('data-ilkdeger'));

    $('#cmbErisimTuru').val($('#cmbErisimTuru').attr('data-ilkdeger'));
    $('#cmbGorunur').val($('#cmbGorunur').attr('data-ilkdeger'));


    $('#cmbErisimTuru').selectize({

        onItemAdd:
            function (data, $item) {
                var alan = 'erisimTuru';
                var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
                var deger = data;
                $.ajax({
                    type: 'POST',
                    url: '/Ajax/OzellikKaydet',
                    data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
                    success: function (msg) {
                        MesajKutusu("OK", "Settings were saved successfuly");
                    },
                    error: function (msg) {
                        HataMesaji("Unexpected error!");
                    }
                });
            }
    });


    $('#cmbGorunur').selectize({

        onItemAdd:
            function (data, $item) {
                var alan = 'aramalardaGoster';
                var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
                var deger = data;
                console.log("pk=" + kisaKod + "&name=" + alan + '&value=' + deger);
                $.ajax({
                    type: 'POST',
                    url: '/Ajax/OzellikKaydet',
                    data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
                    success: function (msg) {
                        MesajKutusu("OK", "Settings were saved successfuly");
                    },
                    error: function (msg) {
                        HataMesaji("Unexpected error!");
                    }
                });
            }
    });


    $('.cmbBaslamaTarihi').change(function () {
        var gun = $('#cmbBaslangicTarihiGun').val();
        var ay = $('#cmbBaslangicTarihiAy').val();
        var yil = $('#cmbBaslangicTarihiYil').val();
        var saat = $('#cmbBaslangicTarihiSaat').val();

        var alan = 'erisimBaslamaTarihi';
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        var deger = gun + '-' + ay + '-' + yil + '-' + saat;

        $.ajax({
            type: 'POST',
            url: '/Ajax/OzellikKaydet',
            data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
            success: function (msg) {
                MesajKutusu("OK", "Settings were saved successfuly");
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });


    });


    $('#txtKisaKod').editable(
{
    pk: function () {
        return $("#lblKisaKod").attr("data-kisaKod")
    },

    name: 'kisaKod',

    url: '/Ajax/OzellikKaydet',

    display: function (value) {
        $(this).text(value + '');
    },

    success: function (msg) {
        if (msg == 'kisakodvar') {
            HataMesaji("Address you have entered is already registered");
            return false;
        }
        else {


            window.location.href = '/ChangeURLSettings/' + msg;

            MesajKutusu("OK", "Settings were saved successfuly");
        }
    }
});


    $('#txtAciklama').editable(
{
    pk: function () {
        return $("#lblKisaKod").attr("data-kisaKod")
    },

    name: 'aciklama',

    url: '/Ajax/OzellikKaydet',

    display: function (value) {
        $(this).text(value + '');
    },

    success: function (msg) {
        if (msg == 'kisakodvar') {
            HataMesaji("Address you have entered is already registered");
            return false;
        }
        else {

            MesajKutusu("OK", "Settings were saved successfuly");
        }
    }
});


    $('.cmbBitisTarihi').change(function () {
        var gun = $('#cmbBitisTarihiGun').val();
        var ay = $('#cmbBitisTarihiAy').val();
        var yil = $('#cmbBitisTarihiYil').val();
        var saat = $('#cmbBitisTarihiSaat').val();

        var alan = 'erisimBitisTarihi';
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        var deger = gun + '-' + ay + '-' + yil + '-' + saat;

        $.ajax({
            type: 'POST',
            url: '/Ajax/OzellikKaydet',
            data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
            success: function (msg) {
                MesajKutusu("OK", "Settings were saved successfuly");
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });


    });



    $('#btnKodUret').click(function () {
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        $.ajax({
            type: 'POST',
            url: '/Ajax/ErisimKoduUret',
            data: "kisaKod=" + kisaKod,
            success: function (msg) {
                $('#cmbErisimKodlari').prepend('<option value="' + msg + '" selected >' + msg + '</option>');
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });


    $('#btnKodSil').click(function () {
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        var erisimKodu = $('#cmbErisimKodlari').val();
        $.ajax({
            type: 'POST',
            url: '/Ajax/ErisimKoduSil',
            data: "kisaKod=" + kisaKod + "&erisimKodu=" + erisimKodu,
            success: function (msg) {
                $("#cmbErisimKodlari option:selected").remove();
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });


    $('#btnErisimKullaniciEkle').click(function () {
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        var ePosta = $("#txtEposta").val();
        $.ajax({
            type: 'POST',
            url: '/Ajax/ErisimKullaniciEkle',
            data: "kisaKod=" + kisaKod + "&ePosta=" + ePosta,
            success: function (msg) {
                if (msg == 'zatenyetkili') {
                    HataMesaji("This user is already authorized");
                    $("#txtEposta").focus();
                    return false;
                }
                if (msg == 'kullaniciyok') {
                    HataMesaji("Email address you have entered is not registered");
                    $("#txtEposta").focus();
                    return false;
                }

                $('#cmbErisimIzinleri').append('<option value="' + ePosta + '" selected >' + ePosta + '</option>');
                $("#txtEposta").val('');
                $("#txtEposta").focus();
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });

    $('#btnErisimKullaniciCikar').click(function () {
        var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
        var ePosta = $("#cmbErisimIzinleri").val();
        $.ajax({
            type: 'POST',
            url: '/Ajax/ErisimKullaniciCikar',
            data: "kisaKod=" + kisaKod + "&ePosta=" + ePosta,
            success: function (msg) {
                $("#cmbErisimIzinleri option:selected").remove();

            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });

    $('#cmbTags').selectize({
        valueField: 'etiket',
        labelField: 'etiket',
        searchField: ['etiket', 'etiket'],
        create: true,
        plugins: ['remove_button'],
        maxItems: null,

        load: function (query, callback) {
            if (query.length < 2) return callback();
            $.ajax({
                url: '/Ajax/JsonEtiketListesi',
                type: 'GET',
                dataType: 'json',
                data: {
                    filtre: query
                },
                error: function () {
                    callback();
                },
                success: function (res) {
                    callback(res);
                }
            });
        },


        onItemAdd: function (value, $item) {
            var etiket = value;

            var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
            if (etiket.length < 2) { return false; }
            $.ajax({
                type: 'POST',
                url: '/Ajax/EtiketEkle',
                data: "kisaKod=" + kisaKod + "&etiket=" + etiket,
                success: function (msg) {
                    MesajKutusu("OK", etiket + " was added");
                },
                error: function (msg) {
                    HataMesaji("Unexpected error!");
                }
            });

        },

        onItemRemove: function (value) {
            var etiket = value;

            var kisaKod = $("#lblKisaKod").attr("data-kisaKod");

            $.ajax({
                type: 'POST',
                url: '/Ajax/EtiketSil',
                data: "kisaKod=" + kisaKod + "&etiket=" + etiket,
                success: function (msg) {

                },
                error: function (msg) {
                    HataMesaji("Unexpected error!");
                }
            });
        }
    });


});