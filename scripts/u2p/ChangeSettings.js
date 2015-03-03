

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