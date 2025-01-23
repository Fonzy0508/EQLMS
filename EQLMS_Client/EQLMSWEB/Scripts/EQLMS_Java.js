var x = document.getElementById("tle").innerHTML;
var navS = document.getElementsByClassName("LiS");
var navA = document.getElementsByClassName("LiA");
var navT = document.getElementsByClassName("LiT");
var navR = document.getElementsByClassName("LiR");
var altternav = document.getElementsByClassName("UIP");
var LP = document.getElementsByClassName("Login");
var grade1 = document.getElementById("G1");
var getg = document.getElementById("tlezy");



if (x == "Login") {
    var j = LP;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
    document.getElementsByClassName("Lzy")[0].style.display = "block";
    document.getElementById("Loginbtn").style.display = "block";
    document.getElementById("Aboutbtn").style.display = "block";
} else if (x == "Student Home" || x == "Schedule Student" || x == "Student Modules"|| x == "Student Account") {
    var y = navA;
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    var z = navS;
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "block";
    }
    var x = navT;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var t = navR;
    for (var i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
    var j = altternav;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "block";
    }
    document.getElementById("ablir").style.display = "none";
    document.getElementById("SAP").style.display = "block";
    document.getElementById("AAP").style.display = "none";
    document.getElementById("TAP").style.display = "none";
} else if (x == "Admin Home" || x == "Schedule Admin" || x == "Manage Subjects" || x == "Admin Modules" || x == "About" || x == "Account Lists" || x == "Create Account" || x == "Admin Account") {
    var y = navA;
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
    var z = navS;
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var x = navT;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var t = navR;
    for (var i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
    var j = altternav;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "block";
    }
    document.getElementById("ablir").style.display = "block";
    document.getElementById("SAP").style.display = "none";
    document.getElementById("AAP").style.display = "block";
    document.getElementById("TAP").style.display = "none";
    document.getElementById("RAP").style.display = "none";
} else if (x == "Teacher Home" || x == "Schedule Teacher" || x == "Teacher Modules" || x == "Teacher Account") {
    var y = navA;
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    var z = navS;
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var x = navT;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    var t = navR;
    for (var i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
    var j = altternav;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "block";
    }
    document.getElementById("ablir").style.display = "none";
    document.getElementById("SAP").style.display = "none";
    document.getElementById("AAP").style.display = "none";
    document.getElementById("TAP").style.display = "block";
    document.getElementById("RAP").style.display = "none";

} else if (x == "Registrar Home" || x == "Registrar Account") {
    var y = navA;
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    var z = navS;
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var x = navT;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var t = navR;
    for (var i = 0; i < t.length; i++) {
        t[i].style.display = "block";
    }
    var j = altternav;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "block";
    }
    document.getElementById("ablir").style.display = "none";
    document.getElementById("SAP").style.display = "none";
    document.getElementById("AAP").style.display = "none";
    document.getElementById("TAP").style.display = "none";
    document.getElementById("RAP").style.display = "block";

} else {
    var j = LP;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "block";
    }
    var y = navA;
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    var z = navS;
    for (var i = 0; i < z.length; i++) {
        z[i].style.display = "none";
    }
    var x = navT;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var t = navR;
    for (var i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
    var j = altternav;
    for (var i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
     document.getElementsByClassName("Lzy")[0].style.display = "none";
    
}

if (window.innerWidth < 500) {
    document.getElementsByClassName("TXTT")[0].innerHTML = "TMES";
} else {
    document.getElementsByClassName("TXTT")[0].innerHTML = "Tungkong Mangga Elementary School";
}

function loginrn() {
    document.getElementById("Loginbtn").style.display = "none";
}
function EditNum() {
    document.getElementById("A_telnum").style.display = "none";   
    document.getElementById("A_phonenum").style.display = "none";
    document.getElementById("A_edit").style.display = "none";
    document.getElementById("A_editphone").style.display = "block";   
    document.getElementById("A_edittel").style.display = "block";   
    document.getElementById("A_close").style.display = "block";   
}
function editaboutinfo() {
    document.getElementsByClassName("Abouttxt") [0].style.display = "none";
    document.getElementById("A_edit2").style.display = "none";
    document.getElementById("A_close2").style.display = "block";   
    document.getElementById("aboutinfotxt").style.display = "block";


}
function editloc() {
    document.getElementsByClassName("zy")[2].style.display = "none";
    document.getElementById("A_Editloc").style.display = "none";
    document.getElementsByClassName("locedit")[0].style.display = "block";
    document.getElementsByClassName("x")[1].style.display = "block";
    //document.getElementById("A_close3").style.display = "block";
}

function closeedit() {
    //about contact number
    document.getElementById("A_telnum").style.display = "Block";
    document.getElementById("A_phonenum").style.display = "Block";
    document.getElementById("A_edit").style.display = "Block";
    document.getElementById("A_editphone").style.display = "none";
    document.getElementById("A_edittel").style.display = "none";
    document.getElementById("A_close").style.display = "none";   

    //about info
    document.getElementById("aboutinfo").style.display = "block";
    document.getElementById("A_edit2").style.display = "block";
    document.getElementById("A_close2").style.display = "none";
    document.getElementById("aboutinfotxt").style.display = "none";

    //location
    document.getElementsByClassName("zy")[2].style.display = "block";
    document.getElementById("A_Editloc").style.display = "block";
    document.getElementsByClassName("locedit")[0].style.display = "none";
    document.getElementsByClassName("x")[1].style.display = "none";


}
function GetGradelvl1() {
    var gradegetter = document.getElementById("tlezy").innerHTML;
    gradegetter = 1;
    console.log(gradegetter);
}
function GetSubjectScience() {

}
//function teacherView() {
//    //about page
   
//    //about page
//    if (x == "About") {
//        var y = document.getElementsByClassName("zy");
//        for (var i = 0; i < y.length; i++) {
//            y[i].style.display = "none";
//        }
//        var z = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < z.length; i++) {
//            z[i].style.display = "block";
//        }

//        var a = document.getElementsByClassName("adminview");
//        for (var i = 0; i < a.length; i++) {
//            a[i].style.display = "none";
//        }
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "none";
//        }
//        doc
//        console.log("abouthere")
//    }
//    else if (x == "Modules") {
//        //module page
//        var z = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < z.length; i++) {
//            z[i].style.display = "block";
//        }

//        var a = document.getElementsByClassName("adminview");
//        for (var i = 0; i < a.length; i++) {
//            a[i].style.display = "none";
//        }
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "none";
//        }
//        document.getElementsByClassName("Teacherposition")[0].style.display = "block";
//    } else if (x == "Scedule") {
//        //schedule page
//        document.getElementsByClassName("rightnav")[0].style.display = "block";
//    } else {

//    }

//}
//function studentView() {
//    if (x == "About") {
//        //about page
//        var y = document.getElementsByClassName("zy");
//        for (var i = 0; i < y.length; i++) {
//            y[i].style.display = "none";
//        }
//        var z = document.getElementsByClassName("adminview");
//        for (var i = 0; i < z.length; i++) {
//            z[i].style.display = "none";
//        }

//        var b = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < b.length; i++) {
//            b[i].style.display = "none";
//        }
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "block";
//        }
//    }
//    else if (x == "Modules") {
//        //module
//        var z = document.getElementsByClassName("adminview");
//        for (var i = 0; i < z.length; i++) {
//            z[i].style.display = "none";
//        }

//        var b = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < b.length; i++) {
//            b[i].style.display = "none";
//        }
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "block";
//        }
//        console.log("module");
//        document.getElementsByClassName("Teacherposition")[0].style.display = "block";
//    } else if (x == "Scedule") {
//        //schedule page
//        document.getElementsByClassName("MBV-Maincont")[0].style.width = "100%";
//        document.getElementsByClassName("rightnav")[0].style.display = "none";
//    } else {

//    }

   
   
//}
//function adminView() {
//    //about page
//    if (x == "About") {
//        var y = document.getElementsByClassName("adminview");
//        for (var i = 0; i < y.length; i++) {
//            y[i].style.display = "block";
//        }
//        var a = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < a.length; i++) {
//            a[i].style.display = "none";
//        };
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "none";
//        }
//        console.log("abouthere");
//    }
//    else if (x == "Modules") {
//        //module page
//        var z = document.getElementsByClassName("adminview");
//        for (var i = 0; i < z.length; i++) {
//            z[i].style.display = "block";
//        };
//        var a = document.getElementsByClassName("teacherview");
//        for (var i = 0; i < a.length; i++) {
//            a[i].style.display = "none";
//        };
//        var c = document.getElementsByClassName("studentview");
//        for (var i = 0; i < c.length; i++) {
//            c[i].style.display = "none";
//        }
//        console.log("module");
//        document.getElementsByClassName("Teacherposition")[0].style.display = "none";
//    } else if (x == "Scedule") {
//        //schedule page
//        document.getElementsByClassName("rightnav")[0].style.display = "block";
//    } else if (x == "Registrar - Home") {
//        //schedule page
//        var f = document.getElementsByClassName("adminview");
//        for (var i = 0; i < f.length; i++) {
//            f[i].style.display = "block";
//        };
//    } else {
        
//    }
    
//}