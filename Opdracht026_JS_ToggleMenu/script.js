let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";

    for (let i = 0; i < getSidebarLinks.length; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";

    for (let i = 0; i < getSidebarLinks.length; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }

}

//Hieronder wil ik nog even laten zien, dat ik wilde proberen in Javascript de achtergrondkleur te laten veranderen. 
//Dit is zo alleen gelukt voor de button, maar niet voor de gehele achtergrond.

//var button = document.getElementById("mybuttonPurple");
 
//button.addEventListener("click", function() {
//    const curColour = button.style.backgroundColor;
// 
//    if (curColour === 'purple') {
//        button.style.backgroundColor = "green";
//    }
//    else {
//        button.style.backgroundColor = "purple";
//    }
//});


//En hier had ik nog een manier gevonden dat als je op een button klikt, er een alert opent. 
//Is natuurlijk niet hetzelfde als de achtergrond functie, maar ik zocht naar mogelijkheden om die actie in Javascript te krijgen.

//let alertButton = document.getElementById("mybuttonRed");
//alertButton.addEventListener("click", function () {
//  alert("button clicked!");
//});
