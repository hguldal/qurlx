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
                    url: '/ajax/OzellikKaydet',
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
                    url: '/ajax/OzellikKaydet',
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
            url: '/ajax/OzellikKaydet',
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

    url: '/ajax/OzellikKaydet',

    display: function (value) {
        $(this).text(value + '');
    },

    success: function (msg) {
        if (msg == 'kisakodvar') {
            HataMesaji("Address you have entered is already registered");
            return false;
        }
        else {


            window.location.href = '/ChangeSettings/' + msg;

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

    url: '/ajax/OzellikKaydet',

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
            url: '/ajax/OzellikKaydet',
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
            url: '/ajax/ErisimKoduUret',
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
            url: '/ajax/ErisimKoduSil',
            data: "kisaKod=" + kisaKod + "&erisimKodu=" + erisimKodu,
            success: function (msg) {
                $("#cmbErisimKodlari option:selected").remove();
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });

});