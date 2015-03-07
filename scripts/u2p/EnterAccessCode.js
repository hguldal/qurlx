$(document).ready(function () {

    $('#btnKodGir').click(function () {
        var kisaKod = $("#txtKisaKod").val();
        var erisimKodu = $("#txtErisimKodu").val();

        if (!erisimKodu) {
            HataMesaji("Your must enter access code !");
            $('#txtErisimKodu').focus();
            return false;
        }
        $.ajax({
            type: 'POST',
            url: '/ajax/ErisimKoduKontrol',
            data: "kisaKod=" + kisaKod + "&erisimKodu=" + erisimKodu,
            success: function (msg) {
                if (msg == "OK") {
                    location.href = "/" + kisaKod;
                }
                else if (msg=="erisimengellendi")
                {
                    HataMesaji("Access Denied:Invalid Access Code");    
                }
            },
            error: function (msg) {
                HataMesaji("Unexpected error!");
            }
        });

    });
});