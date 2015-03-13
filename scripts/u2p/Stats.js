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

    GrafikCiz();


    $('#tarihAraligi').daterangepicker(
          {
              ranges: {
                  'Today': [moment(), moment()],
                  'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                  'Last 7 Days': [moment().subtract('days', 6), moment()],
                  'Last 30 Days': [moment().subtract('days', 29), moment()],
                  'This Month': [moment().startOf('month'), moment().endOf('month')],
                  'This Year': [moment().startOf('year'), moment().endOf('year')]
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
              GrafikCiz();


          });

    $('.grafikTuru').click(function () {
        var grafikTuru = $(this).attr('data-tur');
        $('#grafikDiv').attr('data-Grafik', grafikTuru);
        $('#lstGrafikTurleri>li').removeClass('active');
        $(this).closest('li').addClass('active');
        GrafikCiz();

    });


    function GrafikCiz() {
        var baYil = $('#tarihAraligi').attr('data-baYil');
        var baAy = $('#tarihAraligi').attr('data-baAy');
        var baGun = $('#tarihAraligi').attr('data-baGun');
        var biYil = $('#tarihAraligi').attr('data-biYil');
        var biAy = $('#tarihAraligi').attr('data-biAy');
        var biGun = $('#tarihAraligi').attr('data-biGun');
        var kisaKod = $('#txtKisaKod').attr('data-Kisakod');
        var url = '';
        var grafikTuru = $('#grafikDiv').attr('data-Grafik');

        //Grafik varsa temizle
        grafik.destroy();
        secenekler.series = [];
        secenekler.xAxis.categories = [];

        //Grafik seçenekleri
        if (grafikTuru == 'ulke') {

            url = '/ajax/stats/UlkeyeGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;
            secenekler.title.text = 'Visitor by Country'
            secenekler.yAxis.title.text = 'Visitor';
            secenekler.chart.type = "column";
            secenekler.xAxis.categories.push('Countries');
        }
        else if (grafikTuru == 'gun') {
            url = '/ajax/stats/GunlereGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;
            secenekler.series = [{ name: 'Visitor', data: []}];
            secenekler.title.text = 'Visitor by Day'
            secenekler.yAxis.title.text = 'Visitor';
            secenekler.chart.type = "line";
        }
        else if (grafikTuru == 'ay') {
            url = '/ajax/stats/AylaraGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;
            secenekler.series = [{ name: 'Visitor', data: []}];
            secenekler.title.text = 'Visitor by Month'
            secenekler.yAxis.title.text = 'Visitor';
            secenekler.chart.type = "line";

        }

        else if (grafikTuru == 'yil') {
            url = '/ajax/stats/YillaraGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;
            secenekler.series = [{ name: 'Visitor', data: []}];
            secenekler.title.text = 'Visitor by Year'
            secenekler.yAxis.title.text = 'Visitor';
            secenekler.chart.type = "line";

        }

       else if (grafikTuru == 'saat') {
            url = '/ajax/stats/SaatlereGore?kisaKod=' + kisaKod + '&baYil=' + baYil + '&baAy=' + baAy + '&baGun=' + baGun + '&biYil=' + biYil + '&biAy=' + biAy + '&biGun=' + biGun;
            secenekler.series = [{ name: 'Visitor', data: []}];
            secenekler.title.text = 'Visitor by Hour'
            secenekler.yAxis.title.text = 'Visitor';
            secenekler.chart.type = "line";

        }

        //grafiğin türüne göre ajax isteği gönder ve gelen yanıtların işle
        $.getJSON(url, function (yanit) {

            //ülkelere göre grafik
            if (grafikTuru == 'ulke') {
                for (var i = 0; i < yanit.length; i++) {
                    secenekler.series.push({ name: yanit[i].country_name, data: [yanit[i].Visitor] });

                }
            }

            //günlere göre grafik
            else if (grafikTuru == 'gun') {
                for (var i = 0; i < yanit.length; i++) {

                    secenekler.series[0].data.push(yanit[i].Visitor);
                    secenekler.xAxis.categories.push(yanit[i].gun);

                }
            }
            else if (grafikTuru == 'ay') {
                for (var i = 0; i < yanit.length; i++) {

                    secenekler.series[0].data.push(yanit[i].Visitor);
                    secenekler.xAxis.categories.push(AyAdi(yanit[i].ay));

                }
            }
            else if (grafikTuru == 'yil') {
                for (var i = 0; i < yanit.length; i++) {

                    secenekler.series[0].data.push(yanit[i].Visitor);
                    secenekler.xAxis.categories.push(yanit[i].yil);

                }
            }

            else if (grafikTuru == 'saat') {
                for (var i = 0; i < yanit.length; i++) {

                    secenekler.series[0].data.push(yanit[i].Visitor);
                    secenekler.xAxis.categories.push(yanit[i].saat);

                }
            }

            //grafiği çiz...
            grafik = new Highcharts.Chart(secenekler);
            $('#grafikDiv').attr('data-Grafik', grafikTuru);

        });


    }

    function AyAdi(ayNumarasi) {
        var ayAdlari = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return ayAdlari[ayNumarasi - 1];
    }


    $('#cmbCihazTuru').selectize({

        onItemAdd:
            function (data, $item) {

            }
    });

});