import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      style={{ marginTop: 40 }}
      javaScriptEnabled={true}
      source={{
        html: `
      <script src="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css" rel="stylesheet" />
<div id="map" style="position: absolute; top:44px; bottom: 0; width: 100%" ></div>
<script>
mapboxgl.accessToken =
"pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [153.38907982294697,-27.88715927462142],
zoom: 3
});

map.on('load', function() {
map.addSource('points', {
    'type': 'geojson',
    'data': 'https://bitbucket.org/alex-alexandrius/geojson_host/raw/01ef3176c467b08200614de78beb17e3a9006cde/manholes.json.gz'
});
map.addLayer({
    'id': 'points',
    'type': 'circle',
    'source': 'points',
paint: {
// Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
// with three steps to implement three types of circles:
//   * Blue, 20px circles when point count is less than 100
//   * Yellow, 30px circles when point count is between 100 and 750
//   * Pink, 40px circles when point count is greater than or equal to 750
'circle-color': [
    'step',
    ['get', 'point_count'],
    '#51bbd6',
    100,
    '#f1f075',
    750,
    '#f28cb1'
],
'circle-radius': [
    'step',
    ['get', 'point_count'],
    20,
    100,
    30,
    750,
    40
]
}
});
});
</script>

      `
      }}
    />
  );
}

const styles = StyleSheet.create({});
