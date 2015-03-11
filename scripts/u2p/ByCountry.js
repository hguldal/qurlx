$(function () {
    var bitis = new Date();
    

    
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
    } ,

  
  function(start, end) {
        $('#tarihAraligi').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    }
);

    $("#grafikCiz").click(function () {

        var options = {
            chart: {
                renderTo: 'container',
                type: 'column'

            },
            series: []
        };

        var chart = new Highcharts.Chart(options);
        var url = '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i';
        chart.destroy();

        $.getJSON(url, function (yanit) {

            for (var i = 0; i < yanit.length; i++) {
                options.series.push({ name: yanit[i].country_name, data: [yanit[i].Visitor] });

            }

            chart = new Highcharts.Chart(options);
        });
    });

});