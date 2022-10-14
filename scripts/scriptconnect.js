let function_occurence = 0;
let etat = 0
let u = "";
let p = "";
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
        }

    }
    else if (u == "gaelle") {
        console.log("yeeeey")
        if (p == "chat") {
            console.log("omg")
            document.querySelector(".container-connection").style.display = "none"
            document.querySelector(".easter-egg").style.display = "flex"
            document.querySelector(".easter-cat").style.display = "block"
        }

    }

}



function RedirectionStats() {
    document.location.href = "../";
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
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([lat, long]).addTo(map);
    fin += 1;
    console.log(fin)
    if (fin >= 8) {
        setTimeout(active_typing, 2000);
    }
    // validateForm();
}

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

    var type = function () {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }
        if (document.querySelector("#user-connected") != null) {
            document.querySelector("#user-connected").innerHTML = u;
        }
    };

    return {

        type: type
    };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

// typewriter.type();




function active_typing() {

    document.querySelector("#map").style.display = "none";
    document.querySelector("#typewriter").style.display = "block";
    document.querySelector("#typewriter").style.display = "block";
    // document.querySelector("#typewriter:after").style.display = "block";


    typewriter.type();
}

function initialisation() {
    recuperation_form()
    if (navigator.geolocation) {
        /* geolocation is available */
        document.querySelector(".container-connection").style.display = "none"
        document.querySelector("#map").style.display = "flex"
        navigator.geolocation.getCurrentPosition((position) => {
            zooming(position.coords.latitude, position.coords.longitude);
        });

    } else {
        active_typing();
    }
    // active_typing();
    // RedirectionStats()
}

    //Le if else est seulement un easter egg
