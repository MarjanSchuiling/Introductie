let toggleNavStatus = false;

let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

const toggleNav = () => {

  if (!toggleNavStatus) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebar.style.opacity = "1";
    toggleNavStatus = true;
  }

  else if (toggleNavStatus) {
    getSidebar.style.width = "50px";
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.opacity = "0";
    toggleNavStatus = false;
  }

}

const changeColor = (color) => {
  console.log(color)
  if (color == 'red') {
    document.body.style.backgroundColor = 'red';
  }

  else if (color == 'orange') {
    document.body.style.backgroundColor = 'orange';
  }

  else if (color == 'purple') {
    document.body.style.backgroundColor = 'purple';
  }

  else if (color == 'green') {
    document.body.style.backgroundColor = 'green';
  }

  getSidebarUl.style.visibility = "hidden";

}

let redbutton = document.getElementById("mybuttonRed");
redbutton.addEventListener("click", () => {
  changeColor('red')
});

let orangebutton = document.getElementById("mybuttonOrange");
orangebutton.addEventListener("click", () => {
  changeColor('orange')
});

let purplebutton = document.getElementById("mybuttonPurple");
purplebutton.addEventListener("click", () => {
  changeColor('purple')
});

let greenbutton = document.getElementById("mybuttonGreen");
greenbutton.addEventListener("click", () => {
  changeColor('green')
});

