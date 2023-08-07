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


async function submitHandler(event){
  console.log("inside this function");
  event.preventDefault();
  
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const subject=document.getElementById('subjectInput').value;
  const message=document.getElementById('messageInput').value;
  console.log(name,email,subject,message);

  const data = {
    name,
    email,
    subject,
    message
  };

  console.log(data);

  

  try {
    const response = await fetch('http://localhost:4000/api/v1/submitfeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    setTimeout(() => {console.log("yes reloaded");
      window.location.reload();
      
    }, 1);
    


  }
   catch (error) {
    console.error('Error sending the API request:', error);
   
  }
  
}
  