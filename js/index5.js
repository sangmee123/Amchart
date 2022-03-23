Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
   
    xAxis: {
        categories: ['1월', '3월', '6월', '9월', '12월', '']
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '자연광',
        marker: {
            enabled: false
        },
        data: [7.0, 25.0, 50.0, {
            y: 89,
            marker: { 
                enabled: false
            }
        }, 56.3, 11.0]

    }, {
        name: '인공지능',
        color: 'red',
        marker: {
            enabled: false
        },
        data: [60.0, 61.7, 65.9,{
            y: 80.5,
        }, 65.2, 60.5]
    }]
});