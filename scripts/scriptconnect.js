function RedirectionStats() {
    document.location.href = "../";
}
let zoom = 0

function zooming(lat, long) {
    positions(lat, long, zoom);
    zoom += 2;
    for (let index = 0; index < 5; index++) {

        positions(lat, long, zoom);
        zoom += 3;
        setTimeout(() => {
            a = 1
        }, 3000);
        console.log("zoom =" + zoom);
        console.log(index);

    }
}




function positions(lat, long, lader) {
    // console.log(lat);
    // console.log(long)
    // console.log(long + lat)
    var container = L.DomUtil.get('map');
    if (container != null) {
        container._leaflet_id = null;
    }
    var map = L.map('map').setView([lat, long], lader);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([lat, long]).addTo(map);
}


function validateForm() {
    var u = document.querySelector(".username");
    var p = document.querySelector(".password");
    //Le if else est seulement un easter egg
    if (u.value == "tristan") {
        console.log("yeeeey")
        if (p.value == "garcia") {
            console.log("omg")
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector(".easter-egg").style.display = "flex"
        }

    }
    else {
        if (navigator.geolocation) {
            /* geolocation is available */
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector("#map").style.display = "flex"
            navigator.geolocation.getCurrentPosition((position) => {
                zooming(position.coords.latitude, position.coords.longitude);
            });








        } else {
            /* geolocation IS NOT available */
        }

        // RedirectionStats()
    }





}