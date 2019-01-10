// Get Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanN0b3J5IiwiYSI6ImNpbTZnbzNqbDAyNzd0em0zbzd4bWE3NTQifQ.wd6RY9Km7IuzYuKu4Z3Log';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/danieljstory/cjqpqu7160add2qn4w3ahyxks', // stylesheet location
    center: [7.497612,22.589419], // starting position [lng, lat]
    zoom: 1 // starting zoom
});