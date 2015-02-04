$('.btnUpgradeAccount').click(function () {
    var UserID = $(this).attr("data-UserID");
    if (confirm('are you sure ?')) {
        $.ajax({
            type: "POST",
            url: "/api/Hesap/UpgradeAccount.cshtml",
            data: "UserID=" + UserID,

            success: function (msg) {
                MesajKutusu("OK", "User's account was upgraded to premium");

            },
            error: function (msg) {
                HataMesaji("Unexpected error");
            }
        });
    }
});