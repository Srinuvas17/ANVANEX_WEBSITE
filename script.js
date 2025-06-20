// Simple Google Maps initialization (replace YOUR_API_KEY with a valid Google Maps API key)
function initMap() {
    const hyderabad = { lat: 17.3850, lng: 78.4867 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: hyderabad,
        styles: [{ stylers: [{ saturation: -100 }, { gamma: 0.8 }, { lightness: -10 }] }]
    });
    new google.maps.Marker({ position: hyderabad, map, title: "Anvanex Office" });
}

// Load map when the page is ready
window.onload = function() {
    initMap();
};