$('#cmbKategoriSec').selectize({
    
    onItemAdd:
            function (data, $item) {
                
            }
});



$('#txtKisaKod').editable(
{
pk: function () {
return $("#txtGrupWebAdresi").attr("data-GrupID")
},
name: 'GrupURL',
url: '/api/Grup/GrupBilgileriGuncelle',
display: function (value) {
$(this).text(value + '');
},
success: function (msg) {
if (msg == 'grupadialinmis') {
HataMesaji("Group name you have entered already registered");
return false;
}
else {
MesajKutusu("OK", "Group settings was saved successfuly");
}
}
});