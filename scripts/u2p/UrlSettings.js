

$('#cmbErisimTuru').selectize({

    onItemAdd:
            function (data, $item) {
                var alan = 'erisimTuru';
                var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
                var deger = data;
                console.log("pk=" + kisaKod + "&name=" + alan + '&value=' + deger);
                $.ajax({
                    type: 'POST',
                    url: '/ajax/URLOzellikKaydet',
                    data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
                    success: function (msg) {
                        MesajKutusu("OK", "URL settings was saved successfuly");
                    },
                    error: function (msg) {
                        HataMesaji("Unexpected error while saved URL settings");
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
                    url: '/ajax/URLOzellikKaydet',
                    data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
                    success: function (msg) {
                        MesajKutusu("OK", "URL settings was saved successfuly");
                    },
                    error: function (msg) {
                        HataMesaji("Unexpected error while saved URL settings");
                    }
                });
            }
});


$('#datetimepicker1').datetimepicker(
   
   'setStartDate','2012-01-01'
    
    );

$("#datetimepicker1").on("changeDate", function (e) {

    var alan = 'erisimBaslamaTarihi';
    var kisaKod = $("#lblKisaKod").attr("data-kisaKod");
    var deger = e.date;

    console.log(e.date);

    $.ajax({
        type: 'POST',
        url: '/ajax/URLOzellikKaydet',
        data: "pk=" + kisaKod + "&name=" + alan + '&value=' + deger,
        success: function (msg) {
            MesajKutusu("OK", msg);
        },
        error: function (msg) {
            HataMesaji("Unexpected error while saved URL settings");
        }
    });

});


 
$('#datetimepicker2').datetimepicker();

$('#txtKisaKod').editable(
{
    pk: function () {
        return $("#lblKisaKod").attr("data-kisaKod")
    },

    name: 'kisaKod',

    url: '/ajax/URLOzellikKaydet',

    display: function (value) {
        $(this).text(value + '');
    },

    success: function (msg) {
        if (msg == 'kisakodvar') {
            HataMesaji("URL name you have entered already registered");
            return false;
        }
        else {

           
                window.location.href = '/UrlSettings/' + msg;
            
            MesajKutusu("OK", "URL settings was saved successfuly");
        }
    }
});


$('#txtAciklama').editable(
{
    pk: function () {
        return $("#lblKisaKod").attr("data-kisaKod")
    },

    name: 'aciklama',

    url: '/ajax/URLOzellikKaydet',

    display: function (value) {
        $(this).text(value + '');
    },

    success: function (msg) {
        if (msg == 'kisakodvar') {
            HataMesaji("URL name you have entered already registered");
            return false;
        }
        else {
            
            MesajKutusu("OK", "URL settings was saved successfuly");
        }
    }
});