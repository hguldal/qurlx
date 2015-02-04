$(".btnTumSecimiIptalEt").click(function (data) {

    $('.chkBoxMesaj').each(function () {
       
        this.checked = false;
        $(this).closest("tr").removeClass("success");
    });


});

$(".btnTumunuSec").click(function (data) {
    
        $('.chkBoxMesaj').each(function() {
                this.checked = true;  
                $(this).closest("tr").addClass("success");       
            });
    

});

$('.chkBoxMesaj').change(function () {
    var satir = $(this).closest("tr");
    if (this.checked) {
        $(satir).addClass("success");
    }
    else
    {
           $(satir).removeClass("success");
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
