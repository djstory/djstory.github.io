// Get Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanN0b3J5IiwiYSI6ImNpbTZnbzNqbDAyNzd0em0zbzd4bWE3NTQifQ.wd6RY9Km7IuzYuKu4Z3Log';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/danieljstory/cjqpqu7160add2qn4w3ahyxks', // stylesheet location
    center: [3.753665,25.279444], // starting position [lng, lat]
    zoom: 1 // starting zoom
});

map.on('load', function() {
    map.addLayer({
      id: 'Barnum and Bailey',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://danieljstory.cngdjl6u'
      },
      'source-layer': 'barnum-master-0jn77a',
      paint: {
      'circle-radius': 4,
      'circle-opacity': 0.2,
      'circle-color': 'rgb(124, 218, 255)'
    }
    });
}).