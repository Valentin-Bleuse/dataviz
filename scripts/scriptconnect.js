function validateForm() {
    var u = document.getElementsByClassName("username").value;
    var p = document.getElementsByClassName("password").value;

    if (u == "tristan") {
        document.querySelector(".container-connection").style.display = "none"
    }
    if (p == "garcia") {
        alert("Please enter you Password");
        return false;
    }

    alert("All datas are valid!, send it to the server!")

    return true;
}