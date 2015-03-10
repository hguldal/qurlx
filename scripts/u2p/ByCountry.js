 

 
           

        google.load("visualization", "1", { packages: ["barchart"] });
        google.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var gData = "{";
            gData += '"cols": [' +
                                '{"id":"","label":"Country","pattern":"","type":"string"' +
                                '{"id":"","label":"Count","pattern":"","type":"number"' +
                                '],' +

                                '"rows": [';

            $.ajax({
                type: "POST",
                url: '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i',
                dataType: 'json',
                success: function (data) {
                    
                    for (var i = 0; i < data.length; i++) {
                        gData += 'dddf';
                    }
                    gData = gData.substring(1, gData.length - 1);

                    gData += ']' +
                            '}';

                },
                error: function (msg) {
                    HataMesaji("Unexpected Error !");
                }

            });

            console.log(gData);
          
            var data = new google.visualization.DataTable(gData);
 
            
            var options = {};

            var chart = new google.visualization.BarChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }