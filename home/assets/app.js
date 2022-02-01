document.getElementById("Home").style.color = "blue";
document.getElementById("LightThemeBtns").style.display = "none";


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    backgroundColor = "rgb(0, 0, 0)";
    backgroundColor = "rgba(0, 0, 0, 0.9)";
    document.getElementById("Navbar").style.display = "none";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}


function Settings() {
    document.getElementById("mySideNavBarSettings").style.width = "100%";
}

function Settings2() {
    document.getElementById("mySideNavBarSettings").style.width = "100%";
    document.getElementById("Navbar").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("Navbar").style.display = "block";
}


function closeNavBar() {
    document.getElementById("mySideNavBarSettings").style.width = "0";
    document.getElementById("Settings").style.color = "white";
    document.getElementById("Home").style.color = "blue";
    document.getElementById("Navbar").style.display = "block";
}

function Home() {
    document.getElementById("Home").style.color = "blue";
    document.getElementById("AboutMe").style.color = "white";
    document.getElementById("Education").style.color = "white";
    document.getElementById("Skills").style.color = "white";
    document.getElementById("Contact").style.color = "white";
    document.getElementById("Settings").style.color = "white";
}



function AboutMe() {
    document.getElementById("AboutMe").style.color = "blue";
    document.getElementById("Home").style.color = "white";
    document.getElementById("Education").style.color = "white";
    document.getElementById("Skills").style.color = "white";
    document.getElementById("Contact").style.color = "white";
    document.getElementById("Settings").style.color = "white";

}

function Education() {
    document.getElementById("Education").style.color = "blue";
    document.getElementById("Home").style.color = "white";
    document.getElementById("AboutMe").style.color = "white";
    document.getElementById("Skills").style.color = "white";
    document.getElementById("Contact").style.color = "white";
    document.getElementById("Settings").style.color = "white";

}

function Skills() {
    document.getElementById("Skills").style.color = "blue";
    document.getElementById("Home").style.color = "white";
    document.getElementById("AboutMe").style.color = "white";
    document.getElementById("Education").style.color = "white";
    document.getElementById("Contact").style.color = "white";
    document.getElementById("Settings").style.color = "white";

}

function Contact() {
    document.getElementById("Contact").style.color = "blue";
    document.getElementById("Home").style.color = "white";
    document.getElementById("AboutMe").style.color = "white";
    document.getElementById("Education").style.color = "white";
    document.getElementById("Skills").style.color = "white";
    document.getElementById("Settings").style.color = "white";

}

function Home2() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}

function AboutMe2() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";

}

function Education2() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}

function Skills2() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}

function Contact2() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}

function body() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("Navbar").style.display = "block";
}


function Submit() {
    alert("Your Name Submitted successfully!");
}

function DarkTheme() {
    document.getElementById("mySideNavBarSettings").style.backgroundColor = "black";
    document.getElementById("mySideNavBarSettings").style.color = "white";
    document.getElementById("ParentSection").style.backgroundColor = "black";
    document.getElementById("ParentSection").style.color = "white";
    document.getElementById("UpArrow1").style.display = "block";
    document.getElementById("UpArrow2").style.display = "none";
    document.getElementById("CardsSection2").style.display = "block";
    document.getElementById("CardsSection1").style.display = "none";
    document.getElementById("LightThemeBtns").style.display = "none";
    document.getElementById("DarkThemeBtns").style.display = "block";
    let UpArrow1 = document.getElementById("UpArrow1");

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 425 || document.documentElement.scrollTop > 425) {
            UpArrow1.style.display = "block";
        } else {
            UpArrow1.style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

function LightTheme() {
    document.getElementById("mySideNavBarSettings").style.backgroundColor = "white";
    document.getElementById("mySideNavBarSettings").style.color = "black";
    document.getElementById("ParentSection").style.backgroundColor = "white";
    document.getElementById("ParentSection").style.color = "black";
    document.getElementById("UpArrow1").style.display = "none";
    document.getElementById("UpArrow2").style.display = "block";
    document.getElementById("CardsSection2").style.display = "none";
    document.getElementById("CardsSection1").style.display = "block";
    document.getElementById("LightThemeBtns").style.display = "block";
    document.getElementById("DarkThemeBtns").style.display = "none";
    let UpArrow2 = document.getElementById("UpArrow2");

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 425 || document.documentElement.scrollTop > 425) {
            UpArrow2.style.display = "block";
        } else {
            UpArrow2.style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

let UpArrow1 = document.getElementById("UpArrow1");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 425 || document.documentElement.scrollTop > 425) {
        UpArrow1.style.display = "block";
    } else {
        UpArrow1.style.display = "none";
    }
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("About Section").className = "slideUp";
    }
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        document.getElementById("Education Section").className = "slideUp";
    }
    if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
        document.getElementById("Skills Section").className = "slideUp";
    }
    if (document.body.scrollTop > 2250 || document.documentElement.scrollTop > 2250) {
        document.getElementById("Contact Section").className = "slideUp";
    }
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("AboutMe").style.color = "white";
        document.getElementById("Home").style.color = "blue";
        document.getElementById("Education").style.color = "white";
        document.getElementById("Skills").style.color = "white";
        document.getElementById("Contact").style.color = "white";
        document.getElementById("Settings").style.color = "white";
    }
    if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
        document.getElementById("AboutMe").style.color = "blue";
        document.getElementById("Home").style.color = "white";
        document.getElementById("Education").style.color = "white";
        document.getElementById("Skills").style.color = "white";
        document.getElementById("Contact").style.color = "white";
        document.getElementById("Settings").style.color = "white";
    }
    if (document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450) {
        document.getElementById("AboutMe").style.color = "white";
        document.getElementById("Home").style.color = "white";
        document.getElementById("Education").style.color = "blue";
        document.getElementById("Skills").style.color = "white";
        document.getElementById("Contact").style.color = "white";
        document.getElementById("Settings").style.color = "white";
    }
    if (document.body.scrollTop > 1950 || document.documentElement.scrollTop > 1950) {
        document.getElementById("AboutMe").style.color = "white";
        document.getElementById("Home").style.color = "white";
        document.getElementById("Education").style.color = "white";
        document.getElementById("Skills").style.color = "blue";
        document.getElementById("Contact").style.color = "white";
        document.getElementById("Settings").style.color = "white";
    }
    if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
        document.getElementById("AboutMe").style.color = "white";
        document.getElementById("Home").style.color = "white";
        document.getElementById("Education").style.color = "white";
        document.getElementById("Skills").style.color = "white";
        document.getElementById("Contact").style.color = "blue";
        document.getElementById("Settings").style.color = "white";
    }

}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function Search() {
    let Search = prompt("Enter the Name of the page you are searching.");

    if (Search == "Home") {
        alert("Opening Home Page...");
        window.open("#");
        window.close("YOSHITHA_RATHNAYAKE.html");
    } else if (Search == "About") {
        alert("Opening About Page...");
        window.open("#About Section");
        window.close("YOSHITHA_RATHNAYAKE.html");
    } else if (Search == "Education") {
        alert("Opening Education Page...");
        window.open("#Education Section");
        window.close("YOSHITHA_RATHNAYAKE.html");
    } else if (Search == "Skills") {
        alert("Opening Skills Page...");
        window.open("#Skills Section");
        window.close("YOSHITHA_RATHNAYAKE.html");
    } else if (Search == "Contact") {
        alert("Opening Contact Page...");
        window.open("#Contact Section");
        window.close("YOSHITHA_RATHNAYAKE.html");
    } else if (Search == "Settings") {
        alert("Opening Settings Page...");
        document.getElementById("mySideNavBar").style.width = "100%";
    } else {
        alert("Page not found as " + Search)
    }

}

function Exit() {
    alert("Thank you for watch my website. Have a nice day!");
    window.close("YOSHITHA_RATHNAYAKE.html");
}

function Print() {
    alert("Well done! You are printing my website");
    print();
}


var modal = document.getElementById("myModal");


var img = document.getElementById("me");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}

function myImage() {
    document.getElementsByClassName("NavigationBar").style.display = "none";
}

function myImageClose() {
    document.getElementsByClassName("NavigationBar").style.display = "block";
}
