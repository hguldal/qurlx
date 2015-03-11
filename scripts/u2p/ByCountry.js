$(function () {

    var options = {
        chart: {
            renderTo: 'container',
            type: 'bar'
        },
        series: []
    };

    var url = '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i';

    var chart = new Highcharts.Chart(options);




    $("#grafikCiz").click(function () {

        chart.destroy();

        $.getJSON(url, function (yanit) {

            for (var i = 0; i < yanit.length; i++) {
                options.series.push({ name: yanit[i].country_name, data: [yanit[i].Visitor] });

            }

           chart = new Highcharts.Chart(options);
        });
    });

});