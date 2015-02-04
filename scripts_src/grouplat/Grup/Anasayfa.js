
$(".paylasimMetin").each(function(){
if ($(this).html() != null) {
    var linkedText = Autolinker.link($(this).html());
    $(this).html(linkedText);
}    
});


 
 $('.fancybox').fancybox();
//admin
$('#txtAciklama').editable(
 {
     type: 'textarea',
     pk: function () {

         return $("#txtAciklama").attr("data-GrupID")
     },
     name: 'Aciklama',
     url: '/api/Grup/GrupBilgileriGuncelle',
     display: function (value) {
         $(this).text(value + '');
     },
     success: function (msg) {
         
             MesajKutusu("OK", "Group settings was saved successfuly");
        
     }

 });
 //admin
 $('#txtGrupWebAdresi').editable(
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



//admin
 $('#cmbKategoriSec').selectize({
     plugins: ['remove_button'],
     onItemAdd:
        function (data, $item) {
            var GrupID = $('#cmbKategoriSec').attr("data-GrupID");
            $.ajax({
                type: "POST",
                url: "/api/Grup/GrubaKategoriEkle",
                data: "KategoriID=" + data + "&GrupID=" + GrupID,

                success: function (msg) {
                   
                        MesajKutusu("OK", "Group settings was saved successfuly");
                   
                },
                error: function (msg) {
                    HataMesaji("Unexpected error while saved group settings");
                }
            });
        },
     onItemRemove:
     function (data, $item) {
         var GrupID = $('#cmbKategoriSec').attr("data-GrupID");
        
         $.ajax({
             type: "POST",
             url: "/api/Grup/GruptanKategoriCikar",
             data: "KategoriID=" + data + "&GrupID=" + GrupID,

             success: function (msg) {
                
                     MesajKutusu("OK", "Group settings was saved successfuly");
               

             },
             error: function (msg) {
                  HataMesaji("Unexpected error while saved group settings");
             }
         });
     }

 });

//admin
 $('#cmbPaylasimIzni').selectize({

     onChange:
        function (data, $item) {
            var GrupID = $('#cmbPaylasimIzni').attr("data-GrupID");
            var Name = $('#cmbPaylasimIzni').attr("data-Name");
           
            $.ajax({
                type: "POST",
                url: "/api/Grup/GrupBilgileriGuncelle",
                data: "value=" + data + "&pk=" + GrupID + "&name=" + Name,

                success: function (msg) {
                   
                        MesajKutusu("OK", "Group settings was saved successfuly");
                    
   
                },
                error: function (msg) {
                     HataMesaji("Unexpected error while saved group settings");
                }
            });
        }
 });
 //admin
 $('#cmbGonderiOnayi').selectize({

     onChange:
        function (data, $item) {
            var GrupID = $('#cmbGonderiOnayi').attr("data-GrupID");
            var Name = $('#cmbGonderiOnayi').attr("data-Name");
           
            $.ajax({
                type: "POST",
                url: "/api/Grup/GrupBilgileriGuncelle",
                data: "value=" + data + "&pk=" + GrupID + "&name=" + Name,

                success: function (msg) {
                   
                        MesajKutusu("OK", "Group settings was saved successfuly");
                   
   
                },
                error: function (msg) {
                    HataMesaji("Unexpected error while saved group settings");
                }
            });
        }
 });
 //admin
 $('#cmbUyeOnayTuru').selectize({

     onChange:
        function (data, $item) {
            var GrupID = $('#cmbUyeOnayTuru').attr("data-GrupID");
            var Name = $('#cmbUyeOnayTuru').attr("data-Name");
           
            $.ajax({
                type: "POST",
                url: "/api/Grup/GrupBilgileriGuncelle",
                data: "value=" + data + "&pk=" + GrupID + "&name=" + Name,

                success: function (msg) {
                    
                        MesajKutusu("OK", "Group settings was saved successfuly");
                    
   
                },
                error: function (msg) {
                     HataMesaji("Unexpected error while saved group settings");
                }
            });
        }
 });
 //admin
 $('#cmbGizlilik').selectize({

     onChange:
        function (data, $item) {
            var GrupID = $('#cmbGizlilik').attr("data-GrupID");
            var Name = $('#cmbGizlilik').attr("data-Name");
           
            $.ajax({
                type: "POST",
                url: "/api/Grup/GrupBilgileriGuncelle",
                data: "value=" + data + "&pk=" + GrupID + "&name=" + Name,

                success: function (msg) {
                    
                        MesajKutusu("OK", "Group settings was saved successfuly");
                    
  
                },
                error: function (msg) {
                     HataMesaji("Unexpected error while saved group settings");
                }
            });
        }
 });
 //admin
 $('#cmbGrupYoneticileri').selectize({
     plugins: ['remove_button'],
     onItemAdd:
        function (data, $item) {
            var GrupID = $('#cmbGrupYoneticileri').attr("data-GrupID");
            
                $.ajax({
                    type: "POST",
                    url: "/api/Grup/GrubaYoneticiAta",
                    data: "UserID=" + data + "&GrupID=" + GrupID,

                    success: function (msg) {
                       
                            MesajKutusu("OK", "Group settings was saved successfuly");
                        
     
                    },
                    error: function (msg) {
                         HataMesaji("Unexpected error while saved group settings");
                    }
                });
            
        },
         onItemRemove:
        function (data, $item) {
            var GrupID = $('#cmbGrupYoneticileri').attr("data-GrupID");
            
                $.ajax({
                    type: "POST",
                    url: "/api/Grup/GruptanYoneticiyiKaldir",
                    data: "UserID=" + data + "&GrupID=" + GrupID,

                    success: function (msg) {
                        
                            MesajKutusu("OK", "Group settings was saved successfuly");
                       
        
                    },
                    error: function (msg) {
                         HataMesaji("Unexpected error while saved group settings");
                    }
                });
            
        }

 });

 //admin
 $('.btnGrupUyeSil').click(function () {
     var GrupID = $(this).attr('data-GrupID');
     var UserID = $(this).attr('data-UserID');
     var cikarilacak = $(this);
     if (confirm('The member will remove from the group. Are you sure ?')) {
         $.ajax({
             type: "POST",
             url: "/api/Grup/GruptanUyeCikar",
             data: "GrupID=" + GrupID + "&UserID=" + UserID,

             success: function (msg) {
                 
                     $(cikarilacak).closest('p').hide();
                     MesajKutusu("OK", "Group settings was saved successfuly");
                
               
             },
             error: function (msg) {
                  HataMesaji("Unexpected error while saved group settings");
             }
         });
     }
 });

//admin

 $('.btnIstekKabulEt').click(function () {
     var GrupID = $(this).attr('data-GrupID');
     var UserID = $(this).attr('data-UserID');
     var cikarilacak = $(this);
     
         $.ajax({
             type: "POST",
             url: "/api/Grup/GrupUyeIstekKabulEt",
             data: "GrupID=" + GrupID + "&UserID=" + UserID,

             success: function (msg) {
                 
                     $(cikarilacak).closest('p').hide();
                     MesajKutusu("OK", "Group settings was saved successfuly");
                 
               
             },
             error: function (msg) {
                  HataMesaji("Unexpected error while saved group settings");
             }
         });
     
 });

 //admin
 $('.btnIstekReddet').click(function () {
     var GrupID = $(this).attr('data-GrupID');
     var UserID = $(this).attr('data-UserID');
     var cikarilacak = $(this);
     
         $.ajax({
             type: "POST",
             url: "/api/Grup/GrupUyeIstekReddet",
             data: "GrupID=" + GrupID + "&UserID=" + UserID,

             success: function (msg) {
                
                     $(cikarilacak).closest('p').hide();
                     MesajKutusu("OK", "Group settings was saved successfuly");
                 
                
             },
             error: function (msg) {
                  HataMesaji("Unexpected error while saved group settings");
             }
         });
     
 });

 $("#lnkFotografSec").click(function () {
    
     $("#fileFotografSec").click();

 });

 $("#lnkGrupFotografSec").click(function () {
    
     $("#fileGrupFotografSec").click();

 });

 $("#fileGrupFotografSec").change(function () {

     var file = this.files[0];
     name = file.name;
     size = file.size;
     type = file.type;

     if (size > 10000000) {
         $("#fileGrupFotografSec").val('');
         HataMesaji("Photo size too big.");
     }

     else if (file.type != 'image/png' && file.type != 'image/jpg' && !file.type != 'image/gif' && file.type != 'image/jpeg') {
         $("#fileGrupFotografSec").val('');
         HataMesaji("Invalid file format");
     }
     else {
         var reader = new FileReader();
         reader.onload = function (e) {
             if ($('#fileGrupFotografSec').val() != '') {
         d = new FormData();
         var dosya = $('#fileGrupFotografSec')[0].files[0];        
         var GrupID = $('#fileGrupFotografSec').attr("data-GrupID");
         d.append('file', dosya);
         d.append('GrupID', GrupID);
       
         $.ajax({
             url: '/api/Grup/fotografDegistir.cshtml',
             data: d,
             cache: false,
             dataType: 'json',
             contentType: false,
             processData: false,
             type: 'POST',
             success: function (data) {
                   $('#imgGrupFotograf').removeClass('hide');
                    $('#imgGrupFotograf').attr('src', e.target.result);
             },
             error: function (de) {
                 HataMesaji("Unexpected Error !");

             }
         });
     }
     else {
         HataMesaji('Please select photo file for sharing');
     }



           
         }
         reader.readAsDataURL(file);

     }

 });

  $("#lnkDosyaSec").click(function () {
    
     $("#fileDosyaSec").click();

 });

 $("#fileFotografSec").change(function () {

     var file = this.files[0];
     name = file.name;
     size = file.size;
     type = file.type;

     if (size > 10000000) {
         $("#fileFotografSec").val('');
         HataMesaji("Photo size too big.");
     }

     else if (file.type != 'image/png' && file.type != 'image/jpg' && !file.type != 'image/gif' && file.type != 'image/jpeg') {
         $("#fileFotografSec").val('');
         HataMesaji("Invalid file format");
     }
     else {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#imgPaylasilanFotograf').show();
             $('#imgPaylasilanFotograf').removeClass('hide');
             $('#imgPaylasilanFotograf').attr('src', e.target.result);
         }
         reader.readAsDataURL(file);

     }

 });


 $("#fileDosyaSec").change(function () {

     var file = this.files[0];
     name = file.name;
     size = file.size;
     type = file.type;

     if (size > 10000000) {
         $("#fileDosyaSec").val('');
         HataMesaji("File size too big");
     }


     else {
         var reader = new FileReader();

         reader.onload = function (e) {
             $('#lblDosyaAdi').html(name);
         }
         reader.readAsDataURL(file);

     }

 });

 $("#btnFotoPaylas").click(function () {
     if ($('#fileFotografSec').val() != '') {
         d = new FormData();
         var dosya = $('#fileFotografSec')[0].files[0];
         var Metin = $('#txtFotoPaylas').val();
         var GrupID = $(this).attr("data-GrupID");

         d.append('file', dosya);
         d.append('GrupID', GrupID);
         d.append('Metin', Metin);
         $.ajax({
             url: '/api/Paylasim/fotografPaylas.cshtml',
             data: d,
             cache: false,
             dataType: 'json',
             contentType: false,
             processData: false,
             type: 'POST',
             success: function (data) {

                 var html = '';
                 html = '<tr><td>' +
                 '<div class="media well">' +
                            '<a class="pull-left" href="#">' +
                            '<img class="media-object" src="../images/profilresimleri/' + data.FotoURL + '" width="64" height="64">' +
                            '</a><span class="pull-right"><small> a few second ago </small><button class="btn-link btnPaylasimSil" data-PaylasimID="' + data.PaylasimID +'"><span class="glyphicon glyphicon-remove"></span></button></span>' +
                                '<div class="media-body">' +
                                    '<h4 class="media-heading">' + data.Ad + ' ' + data.Soyad;

                 if (data.Onayli == 1) { html += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span>'; };


                 html += ' <small> Share a Photo</small></h4> <span></span>' +
                                        '<p>' +
                                            data.Metin +
                                        '</p>' +

                                        '<p>' +
                                            '<br>' +
                                                '<img src="/Paylasim/fotoDosyasiOku?image=' + data.KayitAdi + '"  width="480" class="img-thumbnail">' +
                                        '</p>' +
                                        '<p>' +
                                        '<button class="lnkPaylasimBegen btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-heart"></span> Like</small></button>' +
                                        '<button class="lnkPaylasimSikayetEt btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-ban-circle"></span> Report Spam</small></button>';
                 html += '<button class="lnkPaylasimYorumlariGor btn-link" data-PaylasimID="' + data.PaylasimID + '" data-toggle="collapse" data-target="#yorumlar-' + data.PaylasimID + '" data-Gosterildi="false"><small><span class="glyphicon glyphicon-comment"></span> Comments</small></button>';
                 html += '<button class="btn-link pull-right lnkbegenenKisiler" data-html="true"  data-container="body" data-toggle="popover" data-placement="top" data-content="" data-PaylasimID="' + data.PaylasimID + '" ><small data-PaylasimBegeniAdedi="0" data-PaylasimID="' + data.PaylasimID + '"> Likes(0) </small></button>';
                 html += '</p>';

                 html += '<div id="yorumlar-' + data.PaylasimID + '" class="collapse media" data-PaylasimID="' + data.PaylasimID + '">';

                 html += '</div>';

                 if (data.PaylasimOnayi == 0) {
                     html += '<p class="alert alert-danger"> Waiting for admin approval...</p>';
                 }

                 html += '<div>';
                 html += '<textarea class="form-control" placeholder="Write a Comment..." ID="txtYorum-' + data.PaylasimID + '" style="height: 40px;resize: none;"></textarea>';
                 html += '<br>';
                 html += '<button class="btn btn-default btn-xs pull-right YorumGonder" data-PaylasimID="' + data.PaylasimID + '"> Send</button>';
                 html += '</div>';

                 html += '</div>';
                 html += '</div>';
                 html += '</td></tr>';

                 $('#listPaylasim').prepend(html).fadeIn('slow');
                 $('#fileFotografSec').val('');
                 $('#imgPaylasilanFotograf').hide();
                 $('#txtFotoPaylas').val('');
                 LinkPaylasimYorumlariGorOlayKaydet();
                 YorumGonderOlayKaydet();
                 YorumBegenOlayKaydet();
                 YorumSikayetEtOlayKaydet();
                 LinkPaylasimBegenenGosterOlayKaydet();
                 LinkPaylasimSikayetOlayKaydet();
                 ButtonPaylasimSilOlayKaydet();
                 LinkPaylasimPinleOlayKaydet();
                 LinkPaylasimUnPinleOlayKaydet();
             },
             error: function (de) {
                 HataMesaji("Unexpected Error while Photo sharing");

             }
         });
     }
     else {
         HataMesaji('Please select photo file for sharing');
     }
 });


 $("#btnYaziPaylas").click(function () {

     d = new FormData();

     var Metin = $('#txtYaziPaylas').val();
     var GrupID = $(this).attr("data-GrupID");
     d.append('GrupID', GrupID);
     d.append('Metin', Metin);
     if (Metin != '') {
         $.ajax({
             url: '/api/Paylasim/YaziPaylas.cshtml',
             data: d,
             cache: false,
             dataType: 'json',
             contentType: false,
             processData: false,
             type: 'POST',
             success: function (data) {

                 var html = '';
                 html = '<tr><td>' +
                 '<div class="media well">' +
                            '<a class="pull-left" href="#">' +
                            '<img class="media-object" src="../images/profilresimleri/' + data.FotoURL + '" width="64" height="64">' +
                            '</a><span class="pull-right"><small> a few second ago </small><button class="btn-link btnPaylasimSil" data-PaylasimID="' + data.PaylasimID + '"><span class="glyphicon glyphicon-remove"></span></button></span>' +
                                '<div class="media-body">' +
                                    '<h4 class="media-heading">' + data.Ad + ' ' + data.Soyad;

                 if (data.Onayli == 1) { html += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span>'; };


                 html += ' <small> Shared a Text</small></h4> <span></span>' +
                                        '<p>' +
                                            Autolinker.link(data.Metin) +
                                        '</p>' +

                                        '<p>' +
                                        '<button class="lnkPaylasimBegen btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-heart"></span> Like</small></button>' +
                                        '<button class="lnkPaylasimSikayetEt btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-ban-circle"></span> Report Spam</small></button>';
                 html += '<button class="lnkPaylasimYorumlariGor btn-link" data-PaylasimID="' + data.PaylasimID + '" data-toggle="collapse" data-target="#yorumlar-' + data.PaylasimID + '" data-Gosterildi="false"><small><span class="glyphicon glyphicon-comment"></span> Comments</small></button>';
                 html += '<button class="btn-link pull-right lnkbegenenKisiler" data-html="true"  data-container="body" data-toggle="popover" data-placement="top" data-content="" data-PaylasimID="' + data.PaylasimID + '" ><small data-PaylasimBegeniAdedi="0" data-PaylasimID="' + data.PaylasimID + '"> Likes(0)</small></button>';
                 html += '</p>';

                 html += '<div id="yorumlar-' + data.PaylasimID + '" class="collapse media" data-PaylasimID="' + data.PaylasimID + '">';

                 html += '</div>';
                 html += '<div>';
                 if (data.PaylasimOnayi == 0) {
                     html += '<p class="alert alert-danger"> Waiting for admin approval...</p>';
                 }
                 html += '<textarea class="form-control" placeholder="Write a Comment..." ID="txtYorum-' + data.PaylasimID + '" style="height: 40px;resize: none;"></textarea>';
                 html += '<br>';
                 html += '<button class="btn btn-default btn-xs pull-right YorumGonder" data-PaylasimID="' + data.PaylasimID + '"> Send</button>';
                 html += '</div>';

                 html += '</div>';
                 html += '</div>';
                 html += '</td></tr>';

                 $('#listPaylasim').prepend(html).fadeIn('slow');
                 $('#txtYaziPaylas').val('');
                 LinkPaylasimYorumlariGorOlayKaydet();
                 YorumGonderOlayKaydet();
                 YorumBegenOlayKaydet();
                 YorumSikayetEtOlayKaydet();
                 LinkPaylasimBegenenGosterOlayKaydet();
                 LinkPaylasimSikayetOlayKaydet();
                 ButtonPaylasimSilOlayKaydet();
                 LinkPaylasimPinleOlayKaydet();
                 LinkPaylasimUnPinleOlayKaydet();
             },
             error: function (de) {
                 HataMesaji("Unexpected Error while text sharing");

             }
         });
     }
     else {
         HataMesaji('Enter text for sharing');
     }
 });


 $("#btnDosyaPaylas").click(function () {
     if ($('#fileDosyaSec').val() != '') {
         d = new FormData();
         var dosya = $('#fileDosyaSec')[0].files[0];
         var Metin = $('#txtDosyaPaylas').val();
         var GrupID = $(this).attr("data-GrupID");

         d.append('file', dosya);
         d.append('GrupID', GrupID);
         d.append('Metin', Metin);
         $.ajax({
             url: '/api/Paylasim/DosyaPaylas.cshtml',
             data: d,
             cache: false,
             dataType: 'json',
             contentType: false,
             processData: false,
             type: 'POST',
             success: function (data) {

                 var html = '';
                 html = '<tr><td>' +
                 '<div class="media well">' +
                            '<a class="pull-left" href="#">' +
                            '<img class="media-object" src="../images/profilresimleri/' + data.FotoURL + '" width="64" height="64">' +
                            '</a><span class="pull-right"><small> a few second ago </small><button class="btn-link btnPaylasimSil" data-PaylasimID="' + data.PaylasimID +'"><span class="glyphicon glyphicon-remove"></span></button></span>' +
                                '<div class="media-body">' +
                                    '<h4 class="media-heading">' + data.Ad + ' ' + data.Soyad;

                 if (data.Onayli == 1) { html += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span>'; };


                 html += ' <small> Shared a File</small></h4> <span></span>' +
                                        '<p>' +
                                            data.Metin +
                                        '</p>' +

                                        '<p>' +
                                            '<br>' +
                                                '<a href="/Paylasim/DosyaOku/' + data.ID + '">' + data.DosyaAdi + ' <span class="glyphicon glyphicon-download"></span></a>' +
                                        '</p>' +
                                        '<p>' +
                                        '<button class="lnkPaylasimBegen btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-heart"></span> Like</small></button>' +
                                        '<button class="lnkPaylasimSikayetEt btn-link" data-PaylasimID="' + data.PaylasimID + '"><small><span class="glyphicon glyphicon-ban-circle"></span> Report Spam</small></button>';
                 html += '<button class="lnkPaylasimYorumlariGor btn-link" data-PaylasimID="' + data.PaylasimID + '" data-toggle="collapse" data-target="#yorumlar-' + data.PaylasimID + '" data-Gosterildi="false"><small><span class="glyphicon glyphicon-comment"></span> Comments</small></button>';
                 html += '<button class="btn-link pull-right lnkbegenenKisiler" data-html="true"  data-container="body" data-toggle="popover" data-placement="top" data-content="" data-PaylasimID="' + data.PaylasimID + '" ><small data-PaylasimBegeniAdedi="0" data-PaylasimID="' + data.PaylasimID + '"> Likes(0) </small></button>';
                 html += '</p>';

                 html += '<div id="yorumlar-' + data.PaylasimID + '" class="collapse media" data-PaylasimID="' + data.PaylasimID + '">';

                 html += '</div>';
                 html += '<div>';

                 if (data.PaylasimOnayi == 0) {
                     html += '<p class="alert alert-danger">  Waiting for admin approval...</p>';
                 }
                 html += '<textarea class="form-control" placeholder="Write a Comment..." ID="txtYorum-' + data.PaylasimID + '" style="height: 40px;resize: none;"></textarea>';
                 html += '<br>';
                 html += '<button class="btn btn-default btn-xs pull-right YorumGonder" data-PaylasimID="' + data.PaylasimID + '"> Send</button>';
                 html += '</div>';

                 html += '</div>';
                 html += '</div>';
                 html += '</td></tr>';

                 $('#listPaylasim').prepend(html).fadeIn('slow');
                 $('#fileDosyaSec').val('');

                 $('#txtDosyaPaylas').val('');
                 LinkPaylasimYorumlariGorOlayKaydet();
                 YorumGonderOlayKaydet();
                 YorumBegenOlayKaydet();
                 YorumSikayetEtOlayKaydet();
                 LinkPaylasimBegenenGosterOlayKaydet();
                 LinkPaylasimSikayetOlayKaydet();
                 ButtonPaylasimSilOlayKaydet();
                 LinkPaylasimPinleOlayKaydet();
                 LinkPaylasimUnPinleOlayKaydet();

             },
             error: function (de) {
                 HataMesaji("Unexpected Error while file sharing");

             }
         });
     }
     else {
         HataMesaji('Select a file for sharing');
     }
 });



 LinkPaylasimYorumlariGorOlayKaydet();
 YorumGonderOlayKaydet();
 YorumBegenOlayKaydet()
 YorumSikayetEtOlayKaydet();
 YorumBegenmektenVazgecOlayKaydet();
 LinkPaylasimBegenenGosterOlayKaydet();
 LinkPaylasimSikayetOlayKaydet();
 ButtonPaylasimSilOlayKaydet();
 LinkPaylasimPinleOlayKaydet();
 LinkPaylasimUnPinleOlayKaydet();
 function YorumGonderOlayKaydet() {
     $('.YorumGonder').off('click');
     $('.YorumGonder').on('click', function (e) {
         var PaylasimID = $(this).attr('data-PaylasimID');
         var Yorum = $('#txtYorum-' + PaylasimID).val();
         if (Yorum.trim() != '') {
             $.ajax({
                 url: '/api/Paylasim/paylasimaYorumEkle.cshtml',
                 data: {
                     PaylasimID: PaylasimID,
                     Yorum: Yorum
                 },

                 dataType: 'json',

                 type: 'POST',
                 success: function (data) {

                     var html = '<div class="DivYorum">';
                     html += '<a class="pull-left" href="#">' +
                        '   <img class="media-object" src="/images/profilresimleri/' + data.FotoURL + '" width="32" height="32">' +
                        ' </a><span class="pull-right"><small> a few second</small></span> ' +
                     ' <div class="media-body"> ' +
                        ' <p class="media-heading"><small>' + data.Ad + ' ' + data.Soyad;

                     if (data.Onayli == 1) { html += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span>'; };


                     html += '<br>' + data.Yorum + '</small></p>';

                     html += '<p class="media-heading"><small><button class="btn btn-xs  btn-danger YSil" data-YorumID="' + data.ID + '" title="Sil"><span class="glyphicon glyphicon-remove" ></span></button></small></p>';

                     html += '</div></div> ';

                     $('#yorumlar-' + PaylasimID).append(html);
                     $('#yorumlar-' + PaylasimID).addClass('in');
                     $('.lnkPaylasimYorumlariGor[data-PaylasimID="' + PaylasimID + '"]').attr('data-Gosterildi','true')
                     $('#txtYorum-' + PaylasimID).val('');
                     $('#txtYorum-' + PaylasimID).focus();
                     YorumSilOlayKaydet();

                 },
                 error: function (de) {
                     HataMesaji("Unexpected error while adding comment");

                 }
             });
         }
     })

     
 }

 
 function LinkPaylasimYorumlariGorOlayKaydet()
 {
     $('.lnkPaylasimYorumlariGor').off('click');
     $('.lnkPaylasimYorumlariGor').on('click', function (e) {

         var PaylasimID = $(this).attr("data-PaylasimID");
         var Gosterildi = $(this).attr("data-Gosterildi");
         var aktifLink = $(this);
         if (Gosterildi == 'false') {
             $.ajax({
                 url: '/api/Paylasim/JsonPaylasimYorumlari.cshtml',
                 data: {
                     PaylasimID: PaylasimID
                 },

                 dataType: 'json',

                 type: 'POST',
                 success: function (data) {
                     for (var i = 0; i < data.length; i++) {
                         var html = '<div class="DivYorum">';
                         html += '<a class="pull-left" href="#">' +
                        '   <img class="media-object" src="/images/profilresimleri/' + data[i].FotoURL + '" width="32" height="32">' +
                        ' </a><span class="pull-right"><small>' + data[i].Tarih + '</small></span> ' +
                     ' <div class="media-body"> ' +
                        ' <p class="media-heading"><small>' + data[i].Ad + ' ' + data[i].Soyad;
                         if (data[i].Onayli == 1) { html += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span>'; };

                         html += '<br>' + data[i].YorumMetni + '</small></p>';

                         if (data[i].SilmeIzni == 1) { html += '<p class="media-heading"><small><button class="btn btn-xs  btn-danger YSil" data-YorumID="' + data[i].ID + '" title="Delete"><span class="glyphicon glyphicon-remove" ></span></button></small></p>'; }

                         html += '</div></div> ';

                         $('#yorumlar-' + PaylasimID).append(html);
                         aktifLink.attr('data-Gosterildi', 'true');
                         $('#yorumlar-' + PaylasimID).addClass('in');

                     }
                     YorumSilOlayKaydet();
                 },
                 error: function (de) {
                     HataMesaji("Unexpected error while adding comment");

                 }
             });
         }
     })
 }

 //admin + member
 function YorumSilOlayKaydet()
 {
     $('.YSil').off('click');
     $('.YSil').on("click", function (e) {
                         var ID = $(this).attr("data-YorumID");
                         var silinecekElement = $(this).closest('.DivYorum')
                         if (confirm('Comment will delete. Are u sure ?')) {
                             $.ajax({
                                 type: "POST",
                                 url: "/api/Paylasim/YorumSil",
                                 data: "ID=" + ID,

                                 success: function (msg) {
                                    
                                         silinecekElement.hide('medium');

                                    
                                     
                                 },
                                 error: function (msg) {
                                     HataMesaji("Unexpected error while deleting comment");
                                 }
                             });


                         }

                     });
 }

 function YorumBegenOlayKaydet()
 {
      $('.lnkPaylasimBegen').off('click');
      $('.lnkPaylasimBegen').on("click", function (e) {
          var PaylasimID = $(this).attr('data-PaylasimID');
          var aktifLink = $(this);

          $.ajax({
              type: "POST",
              url: "/api/Paylasim/paylasimBegen",
              data: "PaylasimID=" + PaylasimID,

              success: function (msg) {
                  

                      aktifLink.html('<small> Cancel Like</small>');
                      var begeniLabel = $('small[data-PaylasimID="' + PaylasimID + '"]');
                      var begeniAdedi = 0;
                      begeniAdedi = parseInt(begeniLabel.attr('data-PaylasimBegeniAdedi'));

                      begeniLabel.attr('data-PaylasimBegeniAdedi', begeniAdedi + 1);
                      begeniLabel.html('Likes (' + begeniLabel.attr('data-PaylasimBegeniAdedi') + ')');
                      aktifLink.removeClass('lnkPaylasimBegen');
                      aktifLink.addClass('lnkPaylasimBegenmektenVazgec');
                      YorumBegenmektenVazgecOlayKaydet();

                  
                 
              },
              error: function (msg) {
                  HataMesaji("Unexpected error !");
              }
          });

      });
 }

 function YorumSikayetEtOlayKaydet()
 {
      $('.lnkPaylasimSikayetEt').off('click');
      $('.lnkPaylasimSikayetEt').on("click", function (e) {
         $(this).html('<small> You Reported as Spam</small>');
      });
 }
 function YorumBegenmektenVazgecOlayKaydet()
 {
      $('.lnkPaylasimBegenmektenVazgec').off('click');
      $('.lnkPaylasimBegenmektenVazgec').on("click", function (e) {
          var PaylasimID = $(this).attr('data-PaylasimID');

          var aktifLink = $(this);

          $.ajax({
              type: "POST",
              url: "/api/Paylasim/paylasimBegeniGeriAl",
              data: "PaylasimID=" + PaylasimID,

              success: function (msg) {
                  
                      aktifLink.html('<small> Like</small>');
                      var begeniLabel = $('small[data-PaylasimID="' + PaylasimID + '"]');
                      var begeniAdedi = 0;
                      begeniAdedi = parseInt(begeniLabel.attr('data-PaylasimBegeniAdedi'));

                      begeniLabel.attr('data-PaylasimBegeniAdedi', begeniAdedi - 1);
                      begeniLabel.html('Likes (' + begeniLabel.attr('data-PaylasimBegeniAdedi') + ')');
                      begeniLabel.attr('data-content', '');
                      begeniLabel.popover('toggle');
                      aktifLink.addClass('lnkPaylasimBegen');
                      aktifLink.removeClass('lnkPaylasimBegenmektenVazgec');
                      YorumBegenOlayKaydet();
                  
                 
              },
              error: function (msg) {
                  HataMesaji("Unexpected Error !");
              }
          });


      });
 }

 function LinkPaylasimBegenenGosterOlayKaydet() {
      $('.lnkbegenenKisiler').off('click');
      $('.lnkbegenenKisiler').on('click', function () {

          var PaylasimID = $(this).attr('data-PaylasimID');
          var kisiler = '';
          var aktifLink = $(this);
          aktifLink.attr('data-content','');
          setTimeout(function () { aktifLink.popover('hide') }, 4000);

          $.ajax({
              url: '/api/Paylasim/JsonPaylasimiBegenenKisiler.cshtml',
              data: {
                  PaylasimID: PaylasimID
              },

              dataType: 'json',

              type: 'GET',
              success: function (data) {

                  for (var i = 0; i < data.length; i++) {

                      kisiler += '<p><small>';
                      kisiler += data[i].Ad + ' ' + data[i].Soyad;
                      if (data[i].Onayli == 1) {
                          kisiler += ' <span class="glyphicon glyphicon-ok-sign" title="Verified Account"></span></small></p>';
                      }

                  }

                  aktifLink.attr('data-content', kisiler);
                  aktifLink.popover('show');

              },
              error: function (de) {

              }
          });




      });
 }


 function LinkPaylasimSikayetOlayKaydet() {
      $('.lnkPaylasimSikayetEt').off('click');
      $('.lnkPaylasimSikayetEt').on('click', function () {

          var PaylasimID = $(this).attr('data-PaylasimID');

          var aktifLink = $(this);

          $.ajax({
              url: '/api/Paylasim/SikayetEt.cshtml',
              data: {
                  PaylasimID: PaylasimID
              },


              type: 'POST',
              success: function (data) {

                  if (data == 'zatensikayetedilmis') {
                      HataMesaji('Sharing was reported as spam already by your.');
                  }
                  else
                  {
                      MesajKutusu('OK','Sharing was reported as spam')
                  }
              },
              error: function (de) {
                  HataMesaji('Unexpected Error !');

              }
          });




      });
 }



 function LinkPaylasimPinleOlayKaydet() {
      $('.lnkPaylasimPinle').off('click');
      $('.lnkPaylasimPinle').on('click', function () {

          var PaylasimID = $(this).attr('data-PaylasimID');
          var GrupID = $(this).attr('data-GrupID');

          var aktifLink = $(this);

          $.ajax({
              url: '/api/Paylasim/PaylasimPin.cshtml',
              data: {
                  PaylasimID: PaylasimID,
                  GrupID: GrupID
              },


              type: 'POST',
              success: function (data) {

                  if (data == 'zatenpinli') {
                      HataMesaji('Sharing is already pinned');
                  }
                  else {
                      $(aktifLink).removeClass('lnkPaylasimPinle');
                      $(aktifLink).addClass('lnkPaylasimUnPinle');
                      $(aktifLink).html('<small><span class="glyphicon glyphicon-pushpin"></span> Unpin from Profile</small>');
                      LinkPaylasimUnPinleOlayKaydet();
                      MesajKutusu('OK', 'Sharing was pinned');
                  }
              },
              error: function (de) {
                  HataMesaji('Unexpected Error !');

              }
          });




      });
 }

 function LinkPaylasimUnPinleOlayKaydet() {
      $('.lnkPaylasimUnPinle').off('click');
      $('.lnkPaylasimUnPinle').on('click', function () {

          var PaylasimID = $(this).attr('data-PaylasimID');
          var GrupID = $(this).attr('data-GrupID');

          var aktifLink = $(this);

          $.ajax({
              url: '/api/Paylasim/PaylasimUnpin.cshtml',
              data: {
                  PaylasimID: PaylasimID,
                  GrupID: GrupID
              },


              type: 'POST',
              success: function (data) {

                  $(aktifLink).addClass('lnkPaylasimPinle');
                  $(aktifLink).removeClass('lnkPaylasimUnPinle');
                  $(aktifLink).html('<small><span class="glyphicon glyphicon-pushpin"></span> Pin to Profile</small>');
                  LinkPaylasimPinleOlayKaydet();
                  MesajKutusu('OK', 'Sharing was unpinned');

              },
              error: function (de) {
                  HataMesaji('Unexpected Error !');

              }
          });




      });
 }


 function ButtonPaylasimSilOlayKaydet()
 {
      $('.btnPaylasimSil').off('click');
      $('.btnPaylasimSil').on('click', function () {
          if (confirm('Sharing will delete. Are you sure ?')) {
              var PaylasimID = $(this).attr('data-PaylasimID');

              var aktifLink = $(this);

              $.ajax({
                  url: '/api/Paylasim/PaylasimSil.cshtml',
                  data: {
                      PaylasimID: PaylasimID
                  },


                  type: 'POST',
                  success: function (data) {
                    
                    
                          aktifLink.closest('tr').hide('slow');

                      
                  },
                  error: function (de) {
                      HataMesaji('Unexpected Error !');

                  }
              });

          }

      });
 }

 //admin
 $('.lnkPaylasimOnayla').click(function(){
      if (confirm('Sharing Apporoval ?')) {
              var PaylasimID = $(this).attr('data-PaylasimID');

              var aktifLink = $(this);
             
              $.ajax({
                  url: '/api/Paylasim/PaylasimOnayla.cshtml',
                  data: {
                      PaylasimID: PaylasimID
                  },


                  type: 'POST',
                  success: function (data) {


                     
                           aktifLink.closest('p').hide('slow');

                      
                  },
                  error: function (de) {
                      HataMesaji('Unexpected Error !');

                  }
              });

          }

 });
