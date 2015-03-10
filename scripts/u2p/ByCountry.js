 var dataDizi = $.ajax({

                url: '/ajax/stats/UlkeyeGore?kisaKod=' + '1w0i',

                async: false

            }).responseText;

            
        google.load("visualization", "1", { packages: ["geochart"] });
        google.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var data = new google.visualization.DataTable();
  // Add columns
  data.addColumn('string', 'Employee Name');
  data.addColumn('date', 'Start Date');

  // Add empty rows
  data.addRows(6);
  
  data.setCell(0, 0, 'Mike');
  data.setCell(0, 1, {v:new Date(2008,1,28), f:'February 28, 2008'});
  data.setCell(1, 0, 'Bob');
  data.setCell(1, 1, new Date(2007, 5, 1));
  data.setCell(2, 0, 'Alice');
  data.setCell(2, 1, new Date(2006, 7, 16));
  data.setCell(3, 0, 'Frank');
  data.setCell(3, 1, new Date(2007, 11, 28));
  data.setCell(4, 0, 'Floyd');
  data.setCell(4, 1, new Date(2005, 3, 13));
  data.setCell(5, 0, 'Fritz');
  data.setCell(5, 1, new Date(2007, 9, 2));

            
            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

            chart.draw(data, options);
        }