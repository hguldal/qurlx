$(document).ready(function () {

    var klasorKisaKod = $("#tableKlasor").attr("data-klasorKisaKod");
    klasorIcerikYukle(klasorKisaKod);
    function klasorIcerikYukle(klasorKisaKod) {

        $("#tableKlasor").find('tr').remove();
        var url = "/ajax/Kaynak/KlasorIcerik" + "?klasorKisaKod=" + klasorKisaKod;



        $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr data-kisaKod="' + json[i].kisaKod + '"/>');
            tr.append('<td><input type="checkbox"/></td>');

            if (json[i].ogeTuru == 1) {
                tr.append('<td><span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span><a href="' + location.href + json[i].kisaKod + '"> ' + json[i].ogeAdi + '</a></td>');
            }
            else if (json[i].ogeTuru == 2) {
                tr.append('<td><span class="glyphicon glyphicon-link" aria-hidden="true"></span><a href="' + location.href + json[i].kisaKod + '"> ' + json[i].ogeAdi + '</a></td>');
            }

            else if (json[i].ogeTuru == 3) {
                tr.append('<td><span class="glyphicon glyphicon-file" aria-hidden="true"></span><a href="' + location.href + json[i].kisaKod + '"> ' + json[i].ogeAdi + '</a></td>');
            }

            var tarih = new Date(parseInt(json[i].olusturmaTarihi.substr(6)));
            tr.append("<td>" + jQuery.timeago(tarih) + "</td>");
            tr.append('<td><a href="#">' + location.href + json[i].kisaKod + '</a></td>');
            $('#tableKlasor').append(tr);
        }
    });
    }

    $('#cmbErisimTuru').selectize();

    $("#btnYeniKlasorOlustur").click(function () {
        var klasorKisaKod = $('#tableKlasor').attr('data-klasorKisaKod');
        var klasorAdi = $('#txtKlasorAdi').val();
        var erisimTuru = $('#cmbErisimTuru').val();

        if (klasorAdi == '') {
            HataMesaji('Klasör adını boş bırakamazsın');
            $('#txtKlasorAdi').focus();
        }

        $.ajax({
            type: "POST",
            url: '/ajax/Kaynak/YeniKlasorOlustur' + '?klasorKisaKod=' + klasorKisaKod + '&klasorAdi=' + klasorAdi + '&erisimTuru=' + erisimTuru,
            success: function (msg) {
                $('#yeniKlasor').modal('hide');
                klasorIcerikYukle(klasorKisaKod);


            },
            error: function (msg) {
                HataMesaji("Beklenmeyen Bir Hata Myedana Geldi");
            }
        });

    });
});

