//gruba katıl
$(".btnGrubaKatil").click(function (msg) {

    var GrupID = $(this).attr('data-GrupID');

    $.ajax({
        type: "POST",
        url: "/api/Grup/GrubaKatil.cshtml",
        data: "GrupID=" + GrupID,

        success: function (msg) {
            if (msg == 'OK') {
               
                MesajKutusu("OK", "You joined the group");
               
            }
            else if (msg == 'zatenuye') {
                HataMesaji("You are member of the group already.");
            }
            else if (msg == 'yetkisizerisim') {
                HataMesaji("Access Denied !");
            }


        },
        error: function (msg) {
            HataMesaji("Unexpected Error !");
        }
    });


});



//grubu şikayet et
$(".btnGrubuSikayetEt").click(function (msg) {

    var GrupID = $(this).attr('data-GrupID');
    
    $.ajax({
        type: "POST",
        url: "/api/Grup/GrubuSikayetEt.cshtml",
        data: "GrupID=" + GrupID,

        success: function (msg) {
            if (msg == 'OK') {
                 
                MesajKutusu("OK", "Group was reported as spam");
            }
            else if (msg == 'zatensikayetetmis') {
                HataMesaji("Group was reported as spam by your already");
            }



        },
        error: function (msg) {
            HataMesaji("Unexpected Error !");
        }
    });


});


//gruba istek gönder
$(".btnGrubaIstekGonder").click(function (msg) {

    var GrupID = $(this).attr('data-GrupID');
    var aktifDugme = $(this);

    $.ajax({
        type: "POST",
        url: "/api/Grup/GrubaIstekGonder.cshtml",
        data: "GrupID=" + GrupID,

        success: function (msg) {
            if (msg == 'OK') {
                
                MesajKutusu("OK", "Your request was sent to join the group");
            }
            else if (msg == 'zatenistekgonderilmis') {
                HataMesaji("There is already request for joining this group.");
            }



        },
        error: function (msg) {
            HataMesaji("Unexpected Error !");
        }
    });


});

//gruptan ayrıl
$(".btnGruptanAyril").click(function (msg) {
    if (confirm('Are you sure leave the group ?')) {
        var GrupID = $(this).attr('data-GrupID');

        $.ajax({
            type: "POST",
            url: "/api/Grup/GruptanAyril.cshtml",
            data: "GrupID=" + GrupID,

            success: function (msg) {
                if (msg == 'OK') {
                     window.location.href = "/";
                    MesajKutusu("OK", "You left from group");
                }
                else if (msg == 'zatenuyedegil') {
                    HataMesaji("You are not member of the group");
                }


            },
            error: function (msg) {
                HataMesaji("Unexpected error !");
            }
        });
    }

});

