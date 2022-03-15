Highcharts.chart('container', {

    title: {
      text: 'PM2.5 집진 성능 시험'
    },
  
    yAxis: { 
      min: 0,
      max: 5200,
      title: {
        text: '분진농도(µg/m3)'
      },
    },

    xAxis:{
        min: 0,
        max: 30
    },    

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },
  
    series: [{
      name: '30분만에 제거',
      data: [5000, 4350, 3740, 3100, 2450, 
        1820, 1500, 1260, 1000, 800, 600, 
        520, 430, 350, 290, 200, 190, 180,
        170, 160, 150, 140, 130, 120, 110, 
        80, 70, 60, 50, 40, 30]
    }, {
      name: '자연감소',
      data: [5000, 5090, 5110, 5120, 5130, 
        5150, 5140, 5130, 5120, 5110, 5100, 
        5090, 5085, 5080, 5075, 5070, 5060, 
        5050, 5040, 5020, 5000, 5020, 5040, 
        5050, 5060, 5070, 5090, 5110, 5120, 
        5130, 5150 ]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });