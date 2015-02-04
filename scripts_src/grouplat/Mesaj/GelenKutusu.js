
$(".btnTumSecimiIptalEt").click(function (data) {

    $('.chkBoxMesaj').each(function () {
       
        this.checked = false;
        $(this).closest("tr").removeClass("success");
    });


});

$(".btnTumunuSec").click(function (data) {

    $('.chkBoxMesaj').each(function () {
       
        this.checked = true;
        $(this).closest("tr").addClass("success");
    });


});

$('.chkBoxMesaj').change(function () {
    var satir = $(this).closest("tr");
    
    if (this.checked) {
        $(satir).addClass("success");
        $('.btnYanitla').attr('href','/Mesaj/Yanitla?ID=' + $(this).attr('data-MesajID'));
        $('.btnIlet').attr('href','/Mesaj/Ilet?ID=' + $(this).attr('data-MesajID'));
    }
    else {
        $(satir).removeClass("success");
        $('.btnYanitla').attr('href','#');
        $('.btnIlet').attr('href','#');
    }
});



$('.btnSil').click(function () {
    var silinecek = '';
    $('.chkBoxMesaj').each(function () {
        if (this.checked) {
            silinecek = silinecek + $(this).attr("data-MesajID") + ",";
        }

    });

    silinecek = silinecek.substring(0, silinecek.length - 1)
    if (silinecek != '') {
        $.ajax({
            url: "/api/Mesaj/GdkGonder.cshtml",
            type: "POST",
            data: {
                sorgu: silinecek
            }
        })
                .done(function (data) {
                    $('.chkBoxMesaj').each(function () {
                        if (this.checked) {
                            $(this).closest("tr").remove();
                        }
                    });
                })

               .fail(function (data) {
                   HataMesaji('Unexpected Error !');
               });
    }

});


$('#btnOkunduOlarakIsaretle').click(function () {
    var isaretlenecek = '';

    $('.chkBoxMesaj').each(function () {
        if (this.checked) {
            isaretlenecek = isaretlenecek + $(this).attr("data-MesajID") + ",";
        }

    });

    isaretlenecek = isaretlenecek.substring(0, isaretlenecek.length - 1)
    if (isaretlenecek != '') {
        $.ajax({
            url: "/api/Mesaj/OkunduOlarakIsaretle.cshtml",
            type: "POST",
            data: {
                sorgu: isaretlenecek
            }
        })
                .done(function (data) {

                    $('.chkBoxMesaj').each(function () {
                        if (this.checked) {
                            var l ='#lblOkunmadi-' +   $(this).attr("data-MesajID");
                            $(l).remove();
                        }
                    });
                })

               .fail(function (data) {
                   HataMesaji('Unexpected Error !');
               });
    }

});