// Get Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanN0b3J5IiwiYSI6ImNpbTZnbzNqbDAyNzd0em0zbzd4bWE3NTQifQ.wd6RY9Km7IuzYuKu4Z3Log';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/danieljstory/cjqpqu7160add2qn4w3ahyxks', // stylesheet location
    center: [-33.547704,27.789823], // starting position [lng, lat]
    zoom: 0.3 // starting zoom
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

    map.addLayer({
      id: 'Buffalo Bill',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://danieljstory.6kgyb3tc'
      },
      'source-layer': 'buffalo-bill-master-9ju0dx',
      paint: {
      'circle-radius': 4,
      'circle-opacity': 0.2,
      'circle-color': 'rgb(255, 142, 238)'
      }
    });
    
    map.addLayer({
      id: 'Cooper Bailey',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://danieljstory.21cvqmhe'
      },
      'source-layer': 'cooper-bailey-master-53k5wd',
      paint: {
      'circle-radius': 4,
      'circle-opacity': 0.2,
      'circle-color': 'rgb(244, 235, 66)'
      }
    });
});