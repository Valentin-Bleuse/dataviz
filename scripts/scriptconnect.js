let function_occurence = 0;
let etat = 0
let u = "";
let p = "";
let typewriter_num = 0;

function removing(params) {
    document.querySelector(".username").value = "";
    console.log("removed u")
    document.querySelector(".password").value = "";
}

function recuperation_form() {
    u = document.querySelector(".username");
    p = document.querySelector(".password");
    u = u.value;
    p = p.value;
    if (u == "tristan") {
        console.log(u.value)
        console.log("yeeeey")
        if (p == "garcia") {
            console.log("omg")
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector(".easter-egg").style.display = "flex"
            document.querySelector(".easter-tri").style.display = "block"
            return 1
        }

    }
    else if (u == "gaelle") {
        console.log("yeeeey")
        if (p == "chat") {
            console.log("omg")
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector(".easter-egg").style.display = "flex"
            document.querySelector(".easter-cat").style.display = "block"
            return 1
        }

    }

}

function RedirectionStats() {
    document.location.href = "../graph1.html";
}
let zoom = 0
let fin = 0;
function zooming(lat, long) {
    positions(lat, long, zoom);
    zoom += 2;
    for (let index = 1; index < 8; index++) {
        setTimeout(positions, (index * 500), lat, long, zoom);
        zoom += 3;


    }
    console.log(fin)

}

function positions(lat, long, lader) {

    var container = L.DomUtil.get('map');
    if (container != null) {
        container._leaflet_id = null;
    }
    var map = L.map('map').setView([lat, long], lader);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    var greenIcon = L.icon({
        iconUrl: 'images/marker.png',
        iconSize: [38, 60.8], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker([lat, long], { icon: greenIcon }).addTo(map);
    fin += 1;
    console.log(fin)
    if (fin >= 8) {
        setTimeout(active_typing("#map", "#typewriter"), 3000);
    }

}

function active_typing(to_remove, to_display) {
    console.log("cache", to_remove);
    document.querySelector(to_remove).style.display = "none";
    console.log("affiche", to_display);
    document.querySelector(to_display).style.display = "block";
    var app = document.querySelector(to_display);

    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 75,


    });

    typewriter

        .pauseFor(300)
        .typeString('Utilisateur connecté : ' + u + '<br>')
        .pauseFor(300)
        .typeString('Utilisateur Authentifié<br>')
        .typeString('Utilisateur Localisé : ' + etat_localisation() + '<br>')
        .typeString('Connexion')
        .pauseFor(200)
        .typeString('.')
        .pauseFor(200)
        .typeString('.')
        .pauseFor(200)
        .typeString('.<br>')
        .pauseFor(1000)
        .typeString('Corrélations disponibles : ')
        .pauseFor(1000)
        .typeString('3<br>')
        .pauseFor(500)
        .typeString('Accès aux corrélations')
        .pauseFor(400)
        .typeString('.')
        .pauseFor(200)
        .typeString('.')
        .pauseFor(200)
        .typeString('.')
        .pauseFor(200)
        .callFunction(() => {
            RedirectionStats();
        })
        .start();

    // if (document.querySelector(".final") !== null) {
    //     
    // }
    // else {
    //     console.log("echec")
    // }

}

function etat_localisation() {
    if (etat == 1) {
        etat = 'Réussite'
        return etat
    }
    else {
        etat = 'échec'
        return etat
    }
}


function initialisation() {
    if (recuperation_form() != 1) {
        if (navigator.geolocation) {
            /* geolocation is available */
            etat = 1;
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector("#map").style.display = "flex"

            navigator.geolocation.getCurrentPosition((position) => {
                console.log(GeolocationPositionError)
                zooming(position.coords.latitude, position.coords.longitude);

            },
                function (error) {
                    if (error.code == error.PERMISSION_DENIED) {
                        etat = 0;
                        active_typing("#map", "#typewriter");
                    }

                });

        } else {
            console.log("Votre Moteur de recherche n'est pas à jour")
        }

    }
}