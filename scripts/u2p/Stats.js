$(function () {


    var secenekler = {

        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 1
        },

        xAxis: {
            categories: []
        },

        title: {
            text: ''
        },
        chart: {
            renderTo: 'grafikDiv',
            type: 'column',
            defaultSeriesType: 'line'

        },
        series: []
    };

    var grafik = new Highcharts.Chart(secenekler);

    GunlereGore_Grafik();


    $('#tarihAraligi').daterangepicker(
          {
              ranges: {
                  'Today': [moment(), moment()],
                  'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                  'Last 7 Days': [moment().subtract('days', 6), moment()],
                  'Last 30 Days': [moment().subtract('days', 29), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')],
                  'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
              },
              startDate: moment().subtract('days', 29),
              endDate: moment(),
              opens: 'left'
          },


          function (start, end) {
              $('#tarihAraligi').html('<span class="glyphicon glyphicon-calendar"></span> ' + start.format('MM/DD/YYYY') + '-' + end.format('MM/DD/YYYY') + ' <b class="caret"></b>');

              $('#tarihAraligi').attr('data-baYil', start.format('YYYY'));
              $('#tarihAraligi').attr('data-baAy', start.format('MM'));
              $('#tarihAraligi').attr('data-baGun', start.format('DD'));
              $('#tarihAraligi').attr('data-biYil', end.format('YYYY'));
              $('#tarihAraligi').attr('data-biAy', end.format('MM'));
              $('#tarihAraligi').attr('data-biGun', end.format('DD'));

              GrafikOlustur();


          });

    function GrafikOlustur() {

        grafik.destroy();


        secenekler.series = [];
        secenekler.xAxis.categories = [];
        var grafikTuru = $('#grafikDiv').attr('data-Grafik');

        if (grafikTuru == 'gun') {
            GunlereGore_Grafik();
        }
        else if (grafikTuru == 'ulke') {
            UlkelereGore_Grafik();
        }
    }

    function UlkelereGore_Grafik() {

        var baYil = $('#tarihAraligi').attr('data-baYil');
        var baAy = $('#tarihAraligi').attr('data-baAy');
        var baGun = $('#tarihAraligi').attr('data-baGun');
        var biYil = $('#tarihAraligi').attr('data-biYil');
        var biAy = $('#tarihAraligi').attr('data-biAy');
        var biGun = $('#tarihAraligi').attr('data-biGun');


        var kisaKod = $('#txtKisaKod').attr('data-Kisakod');

        var url = '/ajax/stats/UlkeyeGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;

        secenekler.title.text = 'Visitor by Country'
        secenekler.yAxis.title.text = 'Visitor';
         secenekler.chart.type = "column";
         secenekler.xAxis.categories.push('Countries');
        $.getJSON(url, function (yanit) {


            for (var i = 0; i < yanit.length; i++) {
                secenekler.series.push({ name: yanit[i].country_name, data: [yanit[i].Visitor] });

            }

            grafik = new Highcharts.Chart(secenekler);
        });

    }


    function GunlereGore_Grafik() {

        var baYil = $('#tarihAraligi').attr('data-baYil');
        var baAy = $('#tarihAraligi').attr('data-baAy');
        var baGun = $('#tarihAraligi').attr('data-baGun');
        var biYil = $('#tarihAraligi').attr('data-biYil');
        var biAy = $('#tarihAraligi').attr('data-biAy');
        var biGun = $('#tarihAraligi').attr('data-biGun');


        var kisaKod = $('#txtKisaKod').attr('data-Kisakod');

        var url = '/ajax/stats/GunlereGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;


       
        secenekler.series = [{ name: 'Visitor', data: []}];
        secenekler.title.text = 'Visitor by Day'
        secenekler.yAxis.title.text = 'Visitor';
        secenekler.chart.type = "line";


        $.getJSON(url, function (yanit) {


            for (var i = 0; i < yanit.length; i++) {

                secenekler.series[0].data.push(yanit[i].Visitor);
                secenekler.xAxis.categories.push(yanit[i].gun);

            }

            grafik = new Highcharts.Chart(secenekler);
        });

    }

    $('.grafikTuru').click(function () {
        $('#grafikDiv').attr('data-Grafik', $(this).attr('data-tur'));

        GrafikOlustur();


    });

});