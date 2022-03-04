var chart = AmCharts.makeChart("chartdiv", {
    "type": "xy",
    "theme": "light",
    "marginRight": 80,
    "dataDateFormat": "YYYY-MM-DD",
    "startDuration": 1.5,
    "trendLines": [],
    "balloon": {
      "adjustBorderColor": false,
      "shadowAlpha": 0,
      "fixedPosition": true
    },
    "graphs": [{
     "bullet": "diamond",
      "maxBulletSize": 25,
      "lineAlpha": 0.8,
      "lineThickness": 2,
      "lineColor": "#b0de09",
      "fillAlphas": 0,
      "xField": "date",
      "yField": "ay",
      "valueField": "aValue"
    }, {
     "bullet": "round",
      "maxBulletSize": 25,
      "lineAlpha": 0.8,
      "lineThickness": 2,
      "lineColor": "#fcd202",
      "fillAlphas": 0,
      "xField": "date",
      "yField": "by",
      "valueField": "bValue"
    }],
    "valueAxes": [{
      "id": "ValueAxis-1",
      "axisAlpha": 0,
      "position":"right",
    }, {
      "id": "ValueAxis-2",
      "axisAlpha": 0,
      "position": "bottom"
    }],
    "allLabels": [],
    "titles": [],
    "dataProvider": [{
      "date": 0,
      "ay": 15.5,
      "by": 15.5,  
      "aValue": 15,
      "bValue": 10
    }, {
      "date": 30,
      "ay": 14.5,
      "by": 15.3,
      "aValue": 8,
      "bValue": 3
    }, {
      "date": 60,
      "ay": 12.5,
      "by": 15.1,
      "aValue": 16,
      "bValue": 4
    }, {
      "date": 90,
      "ay": 9,
      "aValue": 9
    }, {
      "date": 120,
      "by": 8.3,
      "bValue": 13
    }, {
      "date": 150,
      "ay": 3.8,
      "by": 6.3,
      "aValue": 9,
      "bValue": 13
    }, {
        "date": 160,
        "ay": 2.8,
        "by": 5,
        "aValue": 9,
        "bValue": 13
    }, {
      "date": 180,
      "ay": 3.5,
      "by": 3.5,
      "aValue": 5,
      "bValue": 2
    }, {
        "date": 190,
        "ay": 3.7,
        "by": 2.8,
        "aValue": 5,
        "bValue": 2
    }, {
      "date": 210,
      "ay": 5.3,
      "by": 3.9,
      "aValue": 10
    }, {
      "date": 240,
      "ay": 8,
      "by": 6,
      "aValue": 3,
      "bValue": 10
    }, {
      "date": 270,
      "ay": 10,
      "by": 8.3,
      "aValue": 5,
      "bValue": 13
    }, {
      "date": 300,
      "ay": 15,
      "by": 13.5,
      "bValue": 11
    }, {
      "date": 330,
      "ay": 15.2,
      "by": 15,
      "aValue": 15,
      "bValue": 10
    }, {
        "date": 360,
        "ay": 15.5,
        "by": 15.5,
        "aValue": 15,
        "bValue": 10
    }], 
  
    "export": {
      "enabled": true
    },
  
    "chartCursor": {
      "pan": true,
      "cursorAlpha": 0,
      "valueLineAlpha": 0
    }
  });

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = -80;
valueAxis.max = 80;
  

  
