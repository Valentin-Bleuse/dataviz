


function RedirectionStats() {
    document.location.href = "../";
}
let zoom = 0
function zooming(lat, long) {
    positions(lat, long, zoom);
    zoom += 2;
    setTimeout(positions, 500, lat, long, zoom);
    zoom += 2;
    setTimeout(positions, 1000, lat, long, zoom);
    zoom += 3;
    setTimeout(positions, 1500, lat, long, zoom);
    zoom += 3;
    setTimeout(positions, 2000, lat, long, zoom);
    zoom += 3;
    setTimeout(positions, 2500, lat, long, zoom);
    zoom += 3;
    setTimeout(positions, 3000, lat, long, zoom);
    zoom += 3;
    setTimeout(positions, 3500, lat, long, zoom);
    zoom += 3;
    //     console.log("zoom =" + zoom);
    //     console.log(index);

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
function active_typing() {
    document.querySelector("#map").style.display = "none";
    document.querySelector(".wrapper-coding").style.display = "block"
    document.querySelector(".typing-effect").style.display = "block"
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
            document.querySelector(".easter-tri").style.display = "block"
        }

    }
    else if (u.value == "gaelle") {
        console.log("yeeeey")
        if (p.value == "chat") {
            console.log("omg")
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector(".easter-egg").style.display = "flex"
            document.querySelector(".easter-cat").style.display = "block"
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
        // active_typing();
        // RedirectionStats()
    }





}