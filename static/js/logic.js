// Create a map object
var myMap = L.map("mapid", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }
).addTo(myMap);

// get earthquake data

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";

d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   // createFeatures(data.features);
//   console.log(data);
//   // console.log(data.features[0].geometry.coordinates[0]);
//   var lat =[];
//   var lon=[];
//   var depth=[];
//   var Place =[];
//   var location =[];
//   for (var i = 0; i < data.features.length; i++) {
//     lat.push(data.features[i].geometry.coordinates[0]);
//     lon.push(data.features[i].geometry.coordinates[1]);
//     depth.push(data.features[i].geometry.coordinates[2]);
//     Place.push(data.features[i].properties.place);
//     location.push([lat, lon]);
   
//   }
  
  L.geoJson(data, {
    onEachfeature:function(feature, layer){
      layer.bindPopup("depth" + feature.geometry.coordinates[2]);
    }
  }).addTo(myMap);
});

function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.geometry.coordinates[2]),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

function getColor(depth) {
  switch (true) {
  case depth > 90:
    return "#ea2c2c";
  case depth > 70:
    return "#ea822c";
  case depth > 50:
    return "#ee9c00";
  case depth > 30:
    return "#eecc00";
  case depth > 10:
    return "#d4ee00";
  default:
    return "#98ee00";
  }
}

function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}
 
L.geoJson(data, {
  // We turn each feature into a circleMarker on the map.
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng);
  },
  // We set the style for each circleMarker using our styleInfo function.
  style: styleInfo,
  // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
        + feature.properties.place
    );
  }
}).addTo(map);