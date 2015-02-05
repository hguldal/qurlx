$('.btnUpgradeAccount').click(function () {
    var UserID = $(this).attr("data-UserID");
    if (confirm('Emin misin ?')) {
        $.ajax({
            type: "POST",
            url: "/api/Hesap/UpgradeAccount.cshtml",
            data: "UserID=" + UserID,

            success: function (msg) {
                MesajKutusu("OK", "Hesabın premimum'a yükseltildi");

            },
            error: function (msg) {
                HataMesaji("Beklenmeyen bir hata meydana geldi");
            }
        });
    }
});