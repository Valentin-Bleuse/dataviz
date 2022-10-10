function RedirectionJavascript() {
    document.location.href = "../";
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
        }

    }
    else {
        RedirectionJavascript()
    }
}