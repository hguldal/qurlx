$(function () {
    

     var secenekler = {
            chart: {
                renderTo: 'container',
                type: 'column'

            },
            series: []
        };

        var grafik = new Highcharts.Chart(secenekler);

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
      endDate: moment()
  },

   
  function (start, end) {
      $('#tarihAraligi').html('<span class="glyphicon glyphicon-calendar"></span> ' + start.format('MMMM,DD YYYY') + '-' + end.format('MMMM,DD YYYY') + ' <b class="caret"></b>');

      $('#tarihAraligi').attr('data-baslangicTarihi', start.format('MM-DD-YYYY'));
      $('#tarihAraligi').attr('data-bitisTarihi', end.format('MM-DD-YYYY'));

      UlkelereGore_Grafik();

  });

    function UlkelereGore_Grafik() {

        var baslangicTarihi = $('#tarihAraligi').attr('data-baslangicTarihi');
        var bitisTarihi = $('#tarihAraligi').attr('data-bitisTarihi');
        var kisaKod = $('#txtKisaKod').attr('data-Kisakod');

      

        var url = '/ajax/stats/UlkeyeGore?kisaKod=' + kisaKod + '&baslangicTarihi=' + baslangicTarihi + '&bitisTarihi=' + bitisTarihi;

        grafik.destroy();
       
        $.getJSON(url, function (yanit) {

            for (var i = 0; i < yanit.length; i++) {
                secenekler.series.push({ name: yanit[i].country_name, data: [yanit[i].Visitor] });

            }

            grafik = new Highcharts.Chart(secenekler);
        });
    }


});