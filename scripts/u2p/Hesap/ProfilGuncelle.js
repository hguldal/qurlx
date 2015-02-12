 $("#lnkGrupFotografSec").click(function () {
    
     $("#fileProfilFotografSec").click();

 });

 $("#fileProfilFotografSec").change(function () {

     var file = this.files[0];
     name = file.name;
     size = file.size;
     type = file.type;

     if (size > 3000000) {
         $("#fileProfilFotografSec").val('');
         HataMesaji("Profil fotoğraf dosyası çok büyük");
     }

     else if (file.type != 'image/png' && file.type != 'image/jpg' && !file.type != 'image/gif' && file.type != 'image/jpeg') {
         $("#fileProfilFotografSec").val('');
         HataMesaji("Invalid file format");
     }
     else {
         var reader = new FileReader();
         reader.onload = function (e) {
             if ($('#fileProfilFotografSec').val() != '') {
                
                 $('#imgProfilFoto').attr('src', e.target.result);
             }
             else {
                 HataMesaji('Fotoğraf seç !');
             }

         }
         reader.readAsDataURL(file);

     }

 });


 $('#buttonProfilGuncelle').click(function () {
     
     d = new FormData();

     var ad = $('#txtAd').val();
     var soyad = $('#txtSoyad').val();
     d.append('txtAd', ad);
     d.append('txtSoyad', soyad);

     if ($("#fileProfilFotografSec").val() != '') {
         var dosya = $('#fileProfilFotografSec')[0].files[0];
         d.append('file', dosya);
     }

     if ( $('#imgProfilFoto').attr('src') =='/images/profilresimleri/noimage.jpg')
     {
         d.append('fotoKaldir', "true");
     }

     if (ad == '' || soyad == '') {
         HataMesaji("Adını veya soyadını girmedin");
     }
     else {

         $.ajax({
             url: '/ajax/Hesap/ProfilGuncelle.cshtml',
             data: d,
             cache: false,
             contentType: false,
             processData: false,
             type: 'POST',
             success: function (data) {
                 MesajKutusu('OK', 'Profilin başarıyla güncellendi');
             },
             error: function (de) {
                 HataMesaji("Beklenmeyen bir hata meydana geldi !");

             }
         });

     }
 });

 $('#btnProfilFotoKaldir').click(function () {
    
     $('#imgProfilFoto').attr('src', '/images/profilresimleri/noimage.jpg');

 });