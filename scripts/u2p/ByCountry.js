$(document).ready(function () {

    /*
    var gData = '{ ';

    gData += '"cols": [' +
    '{"id":"","label":"Country","pattern":"","type":"string"},' +
    '{"id":"","label":"Visitor","pattern":"","type":"number"}' +
    '],' +

    '"rows": [';

    var r = $.ajax({
    type: "POST",
    url: '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i',
    dataType: 'json',
    success: function (data) {

    for (var i = 0; i < data.length; i++) {
    gData += '{"c":[{"v":"' + data[i].country_name + '","f":null},{"v":' + data[i].Visitor + ',"f":null}]},';
    }
    gData = gData.substring(0, gData.length - 1);

    gData += ']' +
    '}';

    },
    error: function (msg) {
    HataMesaji("Unexpected Error !");
    }

    });




    $.each(data.billDetails, function(position, billDetail) {
  // first use the invoiceDate as a label
  if (billDetail.invoiceDate) {
    // You should probably format that
    chartData.labels.push(billDetail.invoiceDate); 
  } else {
    // your last data entry doesn't have an invoiceDate
    chartData.labels.push(''); // blank or think of something creative
  }

  // add the totalBills and totalAmount to the dataset
  chartData.datasets[0].data.push(billDetail.totalBills);
  chartData.datasets[1].data.push(billDetail.totalAmount);
});

    */
    
        var randomScalingFactor = function () { return Math.round(Math.random() * 100) };
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [

                        {
                            fillColor: "rgba(151,187,205,0.5)",
                            strokeColor: "rgba(151,187,205,0.8)",
                            highlightFill: "rgba(151,187,205,0.75)",
                            highlightStroke: "rgba(151,187,205,1)",
                            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                        }
                        ]
                            };


        var ctx = $("#myChart").get(0).getContext("2d");

         var myBar = new Chart(ctx).Bar(barChartData, {
            responsive: true
        });



});



