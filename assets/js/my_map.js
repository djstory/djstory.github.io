// Get Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsanN0b3J5IiwiYSI6ImNpbTZnbzNqbDAyNzd0em0zbzd4bWE3NTQifQ.wd6RY9Km7IuzYuKu4Z3Log';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});