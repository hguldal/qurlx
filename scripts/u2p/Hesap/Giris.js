$("#btnLogin").click(function () {

    var ePosta = $('#txtEposta').val();
    var parola = $('#txtParola').val();

    $.ajax({
        url: '/ajax/Hesap/OturumAc.cshtml?txtEposta=' + ePosta + '&txtParola=' + parola,
        type: 'POST',
        success: function (msg) {
            
                location.href = "/";
            
           
        },
        error: function (msg) {

            HataMesaji("Login Failed !");

        }
    });

});
