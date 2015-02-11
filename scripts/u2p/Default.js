$(document).ready(function () {
    var url = "/api/Kaynak/KlasorIcerik";
    $.getJSON(url,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');

            tr.append("<td>" + json[i].ogeID + "</td>");
            
            tr.append("<td>" + json[i].ogeTuru + "</td>");
            tr.append("<td>" + json[i].ogeAdi + "</td>");
            tr.append("<td>" + jQuery.timeago(json[i].olusturmaTarihi) + "</td>");
            tr.append("<td>" + location.href + json[i].kisaKod + "</td>");
            $('#tableKlasor').append(tr);
        }
    });
});