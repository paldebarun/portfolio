var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

var burger_button=document.getElementById('burger-button');
var cross_button=document.getElementById('cross-button');
var sidebar=document.getElementsByClassName('nav-items')[0];

// console.log(burger_button);
// console.log(cross_button);
// console.log(sidebar);

function exitHandler(){

burger_button.classList.remove("inactive");
sidebar.classList.add("inactive");

}

function openSidebar(){
  burger_button.classList.add("inactive");
  sidebar.classList.remove("inactive");
}
  