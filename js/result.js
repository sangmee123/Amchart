/*Highchart line Graph */
let filename1 = 'data1.csv';
let filename2 = 'data2.csv';

d3.csv(filename2).then(function(d2) {
  d3.csv(filename1).then(function (d1) {
    let val1 = [];
    let val2 = [];

    for (let i = 0; i < d1.columns.length; i++) {
      val1.push(parseInt(d1.columns[i]));
    }
    console.log("ARR1", val1);
    
    for (let i = 0; i < d2.columns.length; i++) {
      val2.push(parseInt(d2.columns[i]));
    }
    console.log("ARR2", val2);
    
    Highcharts.chart('container1', {
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
        data: val1
      }, {
        name: '자연감소',
        data: val2
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
  });
});

/*Highchart Column Graph */
Highcharts.chart('container2', {
    data: {
      table: 'datatable'
    },
    chart: {
      type: 'column'
    },
    title: {
      text: '2021년 2분기 글로벌 스마트폰 시장 점유율'
    },
    subtitle: {
        text: '[단위: 억원]'
    },
    yAxis: {
        max: 100,
        allowDecimals: false,
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' +
          this.point.y + ' ' + this.point.name.toLowerCase();
      }
    }
});


/*Amchart Map */
var root = am5.Root.new("chartdiv1"); 

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// ====================================
// Create map
// ====================================

var map = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "none",
    projection: am5map.geoNaturalEarth1()
  })
);

// Create polygon series
var polygonSeries = map.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_continentsLow,
    exclude: ["antarctica"],
    fill: am5.color(0xbbbbbb)
  })
);

var pointSeries = map.series.push(
  am5map.MapPointSeries.new(root, {})
);

var colorSet = am5.ColorSet.new(root, {step:2});

pointSeries.bullets.push(function(root, series, dataItem) {
  var value = dataItem.dataContext.value;

  var container = am5.Container.new(root, {});
  var color = colorSet.next();
  var radius = 15 + value / 20 * 20;
  var circle = container.children.push(am5.Circle.new(root, {
    radius: radius,
    fill: color,
    dy: -radius * 2
  }))

  var pole = container.children.push(am5.Line.new(root, {
    stroke: color,
    height: -40,
    strokeGradient: am5.LinearGradient.new(root, {
      stops:[
        { opacity: 1 },
        { opacity: 1 },
        { opacity: 0 }
      ]
    })
  }));

  var label = container.children.push(am5.Label.new(root, {
    text: value + "%",
    fill: am5.color(0xffffff),
    fontWeight: "400",
    centerX: am5.p50,
    centerY: am5.p50,
    dy: -radius * 2
  }))

  var titleLabel = container.children.push(am5.Label.new(root, {
    text: dataItem.dataContext.title,
    fill: color,
    fontWeight: "500",
    fontSize: "1em",
    centerY: am5.p50,
    dy: -radius * 2,
    dx: radius
  }))
 
  return am5.Bullet.new(root, {
    sprite: container
  });
});
// ====================================
// Create pins
// ====================================

var data = [{
  "title": "북아메리카",
  "latitude": 39.563353,
  "longitude": -99.316406,
  "width": 100,
  "height": 100,
  "value":13.3
}, {
  "title": "유럽",
  "latitude": 50.896104,
  "longitude": 19.160156,
  "width": 50,
  "height": 50,
  "value":9.5
}, {
  "title": "아시아",
  "latitude": 47.212106,
  "longitude": 103.183594,
  "width": 80,
  "height": 80,
  "value":2.8  
}, {
  "title": "중동",
  "latitude": 25,
  "longitude": 45,
  "value": 47.7
}, {
  "title": "아프리카",
  "latitude": 11.081385,
  "longitude": 21.621094,
  "width": 50,
  "height": 50,
  "value":7.5
}];

for (var i = 0; i < data.length; i++) {
  var d = data[i];
  pointSeries.data.push({
    geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
    title: d.title,
    value: d.value
  });
}


/*Highchart Spline Graph */
Highcharts.chart('container3', {
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


/*Amchart Pie Graph */
/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv2");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(am5percent.PieChart.new(root, {
  layout: root.verticalLayout,
  innerRadius: am5.percent(50)
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "value",
  categoryField: "category",
  alignLabels: false
}));

series.labels.template.setAll({
  textType: "circular",
  centerX: 0,
  centerY: 0
});


// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([
  { value: 55, category: "탄수화물" },
  { value: 25, category: "지방" },
  { value: 20, category: "단백질" }
]);


// Create legend
// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15,
}));

legend.data.setAll(series.dataItems);


// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
series.appear(1000, 100);


/*배경 지도 API */
var map;
var mapBounds = new OpenLayers.Bounds(123 , 32, 134 , 43);
var mapMinZoom = 7;
var mapMaxZoom = 19;

// avoid pink tiles
OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
OpenLayers.Util.onImageLoadErrorColor = "transparent";
    
function init(){
    var options = {
        controls: [],
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        units: "m",
        controls : [],
        numZoomLevels:21,
        maxResolution: 156543.0339,
        maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34)
};
map = new OpenLayers.Map('map', options);
    
var options = {serviceVersion : "",
    layername: "",
    isBaseLayer: false,
    opacity : 1,
    type: 'png',
    transitionEffect: 'resize',
    tileSize: new OpenLayers.Size(256,256),
    min_level : 7,
    max_level : 18,
    buffer:0};
//======================================
//1. 배경지도 추가하기
vBase = new vworld.Layers.Base('VBASE');
if (vBase != null){map.addLayer(vBase);}
//2. 영상지도 추가하기
vSAT = new vworld.Layers.Satellite('VSAT');
if (vSAT != null) {map.addLayer(vSAT);};
//3. 하이브리드지도 추가하기
vHybrid = new vworld.Layers.Hybrid('VHYBRID');
if (vHybrid != null) {map.addLayer(vHybrid);} 
//4. Gray지도 추가하기
vGray = new vworld.Layers.Gray('VGRAY');
if (vGray != null){map.addLayer(vGray);}
//5. Midnight지도 추가하기
vMidnight = new vworld.Layers.Midnight('VMIDNIGHT');
if (vMidnight != null){map.addLayer(vMidnight);}
//===========================================

var switcherControl = new OpenLayers.Control.LayerSwitcher();
map.addControl(switcherControl);
switcherControl.maximizeControl();

map.zoomToExtent( mapBounds.transform(map.displayProjection, map.projection ) );
map.zoomTo(11);
        
map.addControl(new OpenLayers.Control.PanZoomBar());
//map.addControl(new OpenLayers.Control.MousePosition());
map.addControl(new OpenLayers.Control.Navigation());
//map.addControl(new OpenLayers.Control.MouseDefaults()); //2.12 No Support
map.addControl(new OpenLayers.Control.Attribution({separator:" "}))
}
function deleteLayerByName(name){
    for (var i=0, len=map.layers.length; i<len; i++) {
        var layer = map.layers[i];
        if (layer.name == name) {
            map.removeLayer(layer);
            //return layer;
            break;
        }
    }
}