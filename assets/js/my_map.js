// Get Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanN0b3J5IiwiYSI6ImNpbTZnbzNqbDAyNzd0em0zbzd4bWE3NTQifQ.wd6RY9Km7IuzYuKu4Z3Log';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/danieljstory/cjqpqu7160add2qn4w3ahyxks', // stylesheet location
    center: [-6.527360,18.167268], // starting position [lng, lat]
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

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

  // Popup for Barnum and Bailey
    map.on('mouseenter', 'Barnum and Bailey', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Get the information to display
        var info = "<p id=\"city\">" + e.features[0].properties.city + "</p><p id=\"state\">" + e.features[0].properties.state + "</p><p id=\"country\">" + e.features[0].properties.country + "<p id=\"circus\">Barnum and Bailey</p>";

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(info)
            .addTo(map);
    });

    map.on('mouseleave', 'Barnum and Bailey', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });


    // Popup for Buffal Bill
    map.on('mouseenter', 'Buffalo Bill', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Get the information to display
        var info = "<p id=\"city\">" + e.features[0].properties.city + "</p><p id=\"state\">" + e.features[0].properties.state + "</p><p id=\"country\">" + e.features[0].properties.country + "<p id=\"circus\">Buffalo Bill</p>";

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(info)
            .addTo(map);
    });

    map.on('mouseleave', 'Buffalo Bill', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });

    // Popup for Cooper Bailey
    map.on('mouseenter', 'Cooper Bailey', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Get the information to display
        var info = "<p id=\"city\">" + e.features[0].properties.city + "</p><p id=\"state\">" + e.features[0].properties.state + "</p><p id=\"country\">" + e.features[0].properties.country + "<p id=\"circus\">Cooper Bailey</p>";

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(e.features[0].geometry.coordinates)
            .setHTML(info)
            .addTo(map);
    });

    map.on('mouseleave', 'Cooper Bailey', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});