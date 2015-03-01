$('#cmbErisimTuru').selectize({
    
    onItemAdd:
            function (data, $item) {
                
            }
});


$('#cmbGorunur').selectize({
    
    onItemAdd:
            function (data, $item) {
                
            }
});

$('#datetimepicker1').datetimepicker();
 
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