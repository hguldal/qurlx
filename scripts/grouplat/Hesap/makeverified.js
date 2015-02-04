$('.btnVerifyUser').click(function () {
    var UserID = $(this).attr("data-UserID");
    if (confirm('are you sure ?')) {
        $.ajax({
            type: "POST",
            url: "/api/Hesap/makeverified.cshtml",
            data: "UserID=" + UserID,

            success: function (msg) {
                MesajKutusu("OK", "User was mark as verified");

            },
            error: function (msg) {
                HataMesaji("Unexpected error");
            }
        });
    }
});