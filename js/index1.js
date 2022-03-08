Highcharts.chart('container', {

    title: {
      text: 'PM2.5 집진 성능 시험'
    },
  
    yAxis: {
      title: {
        text: '분진농도(µg/m3)'
      }
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
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: '자연감소',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
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