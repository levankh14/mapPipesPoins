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
mapboxgl.accessToken = 'pk.eyJ1IjoibGV2YW5raDE0IiwiYSI6ImNrNzBvYWwyazAwbWUzbW13aWkxdmJ6eTYifQ.4KJplx6pa2y4-XVJ0-Lyqw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [153.38907982294697,-27.88715927462142],
    zoom: 8
});

map.on('load', function() {
    map.addSource('lines', {
        'type': 'geojson',
        'data': "https://bitbucket.org/levankh14/assetlogue/raw/f3d9d81f82bd47090a8512335e690f73d1249a7d/sewerpipes.json.gz"
   
    });
    map.addLayer({
        'id': 'lines',
        'type': 'line',
        'source': 'lines',
        'paint': {
            'line-width': 3,
            // Use a get expression (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
            // to set the line-color to a feature property value.
            'line-color': '#F7455D'
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
