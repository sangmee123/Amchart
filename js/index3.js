var root = am5.Root.new("chartdiv"); 

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