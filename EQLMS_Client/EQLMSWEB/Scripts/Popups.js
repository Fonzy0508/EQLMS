var x = document.getElementById("tle").innerHTML;
console.log(x);

function Sections() {
    document.getElementsByClassName("AddSection")[0].style.display = "block";
    document.getElementsByClassName("blurbg")[0].style.display = "block";
}
function ESections() {
    document.getElementsByClassName("editsection")[0].style.display = "block";
    document.getElementsByClassName("blurbg")[0].style.display = "block";
}
function Adviser() {
    document.getElementsByClassName("adviser")[0].style.display = "block";
    document.getElementsByClassName("blurbg")[0].style.display = "block";
}
function AddStudentPP() {
    document.getElementsByClassName("Studentacc")[0].style.display = "block";
    document.getElementsByClassName("blurbg")[0].style.display = "block";
}
function Addmodules() {
    document.getElementsByClassName("Addmodules")[0].style.display = "block";
    document.getElementsByClassName("blurbg")[0].style.display = "block";
}
function XSections() {
    if (x == "Home Page") {
        document.getElementsByClassName("addSection")[0].style.display = "none";
        document.getElementsByClassName("editsection")[0].style.display = "none";
        document.getElementsByClassName("adviser")[0].style.display = "none";
    } else if (x == "Registrar - Home") {
        document.getElementsByClassName("Studentacc")[0].style.display = "none";
    } else {
        document.getElementsByClassName("Addmodules")[0].style.display = "none";
    }

    document.getElementsByClassName("blurbg")[0].style.display = "none";
}

function rotatezy() {
    var x = document.getElementsByClassName("dropSbtn");
    if (x[0].style.transform == "rotate(0deg)") {
        x[0].style.transform = "rotate(180deg)";
    }  else {
        x[0].style.transform = "rotate(360deg)";
    }
}