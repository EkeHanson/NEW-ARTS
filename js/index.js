let loginPage = "https://new-arts-website.vercel.app/login.html"
let coursesPage = "https://new-arts-website.vercel.app/courses.html"

if (document.querySelector("#signUpBtn")){
    let emailVerification = "https://new-arts-website.vercel.app/email-verification.html"

document.getElementById("signUpBtn").addEventListener("click", function() {
    let email = document.getElementById("signUpEmail").value;
    fetch('https://new-arts-api.onrender.com/user/send-registration-email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'X-CSRFToken': csrf_token, // Make sure to include the CSRF token if CSRF protection is enabled
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        if (data.message === 'Email sent successfully') {
            window.location.href = emailVerification;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
    });
});
}

if (document.querySelector("#submitBtn")){
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    
    // Get form data
    let formData = {
        first_name: document.getElementById('firstName').value,
        last_name : document.getElementById("lastName").value,
        password : document.getElementById("password").value,
        email : email
        // Add other form fields similarly
    };

    // Send POST request using fetch API
    fetch('https://new-arts-api.onrender.com/user/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            window.location.href = loginPage;
            return response.json();
            
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Handle response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
});
}


if (document.querySelector("#logInForm")){
    
    document.getElementById('signInBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
      
    // Get form data
    let formData = {
        password : document.getElementById("logPass").value,
        email : document.getElementById("logEmail").value
    };

    // Send POST request using fetch API
    fetch('https://new-arts-api.onrender.com/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
             // Save response details to local storage
            response.json().then(data => {
            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('userId', data.user_id);
            localStorage.setItem('userFirstName', data.user_first_name);
            localStorage.setItem('userLastName', data.user_last_name);
            });
            window.location.href = coursesPage;
            return response.json();
            
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Handle response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
});
}

if (document.querySelector("#joinForFreeBtn")) {
    console.log("Join for free Button Found");

    function checkLoginStatus() {
        let accessToken = localStorage.getItem('accessToken');
        let loginLink = document.getElementById('logginBtn');
        let joinForFreeBtn = document.getElementById('joinForFreeBtn');

        if (accessToken) {
            joinForFreeBtn.textContent = 'Dashboard';
            loginLink.textContent = 'Logout';

            loginLink.addEventListener('click', function() {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('userId');
                localStorage.removeItem('userFirstName');
                localStorage.removeItem('userLastName');
             
                window.location.href = 'index.html';
            });
            joinForFreeBtn.addEventListener('click', function() {
                window.location.href = 'user-dashboard/dashboard.html'; // Corrected URL format
            });
        } else {
            joinForFreeBtn.addEventListener('click', function() {
                window.location.href = 'signup.html';});
        }
    }

    checkLoginStatus();
}

if( document.querySelector("#home")){
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
    console.log(userFirstName)
    console.log(userlastName)
    let welcomeParagraph = document.getElementById("welcome-guest");
    let userName = document.getElementById("userName");


    welcomeParagraph.innerHTML =  `${userFirstName}  ${userlastName}`
    userName.innerHTML =  `${userFirstName}  ${userlastName}`
     document.getElementById("usernameId").textContent = `${userFirstName} + ${userlastName}`


     document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = 'index.html';
    });


 }

