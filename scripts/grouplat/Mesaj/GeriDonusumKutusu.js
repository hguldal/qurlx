$(".btnTumSecimiIptalEt").click(function (data) {

    $('.chkBoxMesaj').each(function () {
       
        this.checked = false;
        $(this).closest("tr").removeClass("danger");
    });


});
$(".btnTumunuSec").click(function (data) {
    
        $('.chkBoxMesaj').each(function() {
                this.checked = true;  
                $(this).closest("tr").addClass("danger");       
            });
    

});

$('.chkBoxMesaj').change(function () {
    var satir = $(this).closest("tr");
    if (this.checked) {
        $(satir).addClass("danger");
    }
    else
    {
           $(satir).removeClass("danger");
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
        if (confirm("Messages will delete. Are you sure ?")) {
            $.ajax({
                url: "/api/Mesaj/Sil.cshtml",
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
    }

});

$('.btnGeriDonusumKutusunuBosalt').click(function () {

    var silinecek = '';
    $('.chkBoxMesaj').each(function () {

        silinecek = silinecek + $(this).attr("data-MesajID") + ",";


    });

    silinecek = silinecek.substring(0, silinecek.length - 1)
    if (silinecek != '') {
        if (confirm("Are you sure ?")) {
            $.ajax({
                url: "/api/Mesaj/GdkBosalt.cshtml",
                type: "POST"
            })
                .done(function (data) {
                    $('.chkBoxMesaj').each(function () {

                        $(this).closest("tr").remove();

                    });
                })

               .fail(function (data) {
                  HataMesaji('Unexpected Error !');
               });
        }
    }

});

$('.btnGeriAl').click(function () {


    var geriAlinacak = '';
    $('.chkBoxMesaj').each(function () {
        if (this.checked) {
            geriAlinacak = geriAlinacak + $(this).attr("data-MesajID") + ",";
        }

    });

    geriAlinacak = geriAlinacak.substring(0, geriAlinacak.length - 1)
    if (geriAlinacak != '') {
        
            $.ajax({
                url: "/api/Mesaj/GeriAl.cshtml",
                type: "POST",
                data: {
                    sorgu: geriAlinacak
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