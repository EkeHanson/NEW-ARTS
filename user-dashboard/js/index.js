
if( document.querySelector("#welcome-guest")){

    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
    let welcomeParagraph = document.getElementById("welcome-guest");
    welcomeParagraph.innerHTML =  `${userFirstName}  ${userlastName}`
     // document.getElementById("usernameId").textContent = `${userFirstName} + ${userlastName}`
 }
