$(document).ready(function () {

    
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

    var grafik = new Chart(ctx).Bar(barChartData, {
        responsive: true

    });

    $("#grafikCiz").click(function () {
        grafik.destroy();

        var da = {
            labels: [],
            datasets: [

                        {
                            fillColor: "rgba(151,187,205,0.5)",
                            strokeColor: "rgba(151,187,205,0.8)",
                            highlightFill: "rgba(151,187,205,0.75)",
                            highlightStroke: "rgba(151,187,205,1)",
                            data: []
                        }
                        ]
        };

        var r = $.ajax({
            type: "POST",
            url: '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i',
            dataType: 'json',
            success: function (data) {

                for (var i = 0; i < data.length; i++) {
                    da.labels.push(data[i].country_name);
                    da.datasets[0].data.push('3');
                }

                grafik = new Chart(ctx).Bar(da, {
                    responsive: true

                });
            },
            error: function (msg) {
                HataMesaji("Unexpected Error !");
            }

        });



    });




});



