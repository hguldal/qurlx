$(document).ready(function () {
    
        var gData = '{ ';

        gData += '"cols": [' +
                                '{"id":"","label":"Country","pattern":"","type":"string"},' +
                                '{"id":"","label":"Visitor","pattern":"","type":"number"}' +
                                '],' +

                                '"rows": [';

        $.ajax({
            type: "POST",
            url: '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i',
            dataType: 'json',
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    gData += '{"c":[{"v":"' + data[i].country_code + '","f":null},{"v":' + data[i].Visitor + ',"f":null}]},';
                }
                gData = gData.substring(0, gData.length - 1);

                gData += ']' +
                            '}';

            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }

        });

    google.load("visualization", "1", { packages: ["geochart"] });
    google.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {


        var data = new google.visualization.DataTable(gData);


        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }

});