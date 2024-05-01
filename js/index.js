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
      alert("You clicked to sign in")
      alert("You have just let's see if we can let you sign in")
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
            localStorage.setItem('userEmail', data.user_email);
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
        alert("login Error")
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

if( document.querySelector("#dashboard")){
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');

    

    let userName = document.getElementById("userName");
    userName.innerHTML =  userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest";

    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";

    let welcomeParagraph = document.getElementById("welcome-guest");
    welcomeParagraph.innerHTML =  userFirstName !== null ? `${userFirstName} ${userlastName}` : "Guest";
    

    document.getElementById("usernameId").textContent = userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest"


     document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = '../index.html';
    });
 }

 if(document.querySelector("#assessmentPage")){
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
   
    let userName = document.getElementById("userName");
    userName.innerHTML =  userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest";

    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";

    let welcomeParagraph = document.getElementById("welcome-guest");
    welcomeParagraph.innerHTML =  userFirstName !== null ? `${userFirstName} ${userlastName}` : "Guest";
    

    document.getElementById("usernameId").textContent = userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest"



    document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = 'www.google.com';
    });
 }
 if(document.querySelector("#assessmentPage")){
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
 
    let userName = document.getElementById("userName");
    userName.innerHTML =  userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest";

    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";

    let welcomeParagraph = document.getElementById("welcome-guest");
    welcomeParagraph.innerHTML =  userFirstName !== null ? `${userFirstName} ${userlastName}` : "Guest";
    

    document.getElementById("usernameId").textContent = userFirstName !== null ? `${userFirstName}  ${userlastName}` : "Guest"



    document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = '../index.html';
    });
 }


 if(document.querySelector("#instructor-dashboard")){
    alert("You are in the Instructor Dashboard")
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
 
    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";


    document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = '../index.html';
    });
 }
 if(document.querySelector("#start-lesson")){
    alert("You are in the Instructor Dashboard")
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
 
    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";


    document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = '../index.html';
    });
 }
 if(document.querySelector("#view-course")){
    alert("You are in the instructor viewcourse ")
    let userFirstName = localStorage.getItem('userFirstName');
    let userlastName = localStorage.getItem('userLastName');
 
    let user = document.getElementById("user");
    user.textContent = userFirstName !== null ?  userFirstName : "Guest";


    document.getElementById('logOutBtn').addEventListener('click', function() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userFirstName');
        localStorage.removeItem('userLastName');
        window.location.href = '../index.html';
    });
 }

 if(document.querySelector(".pay-sec")){
    
    let userEmail = localStorage.getItem('userEmail');
    // Function to initialize payment
    function initializePayment() {
        // Replace 'your_public_key' with your actual Paystack public key
        let publicKey = 'pk_test_3444178a2e2dda33f778668a54dc53bc712d04a3';
        let email = userEmail; // Get the user's email dynamically
        let amount = 44900; // Amount in kobo (44900 kobo = ₦449)
        let metadata = {
            custom_fields: [
                {
                    display_name: "Course Name",
                    variable_name: "course_name",
                    value: "NCFE CACHE Level 2 Certificate in the care and Management of Diabetes"
                }
            ]
        };

        // Initialize payment
        PaystackPop.setup({
            key: publicKey,
            email: email,
            amount: amount,
            metadata: metadata,
            currency: "NGN", // Change to appropriate currency code
            ref: "ARTS-" + Math.floor((Math.random() * 1000000000) + 1), // Unique reference
            callback: function (response) {
                // Callback function after payment is completed
                console.log(response);
                alert('Payment successful. Transaction reference: ' + response.reference);
            },
            onClose: function () {
                alert('Payment window closed.');
            }
        }).openIframe();
    }

    // Add click event listener to the "Proceed with payment" link
    document.addEventListener('DOMContentLoaded', function () {
        var proceedLink = document.querySelector('.pay-Check-top a');
        if (proceedLink) {
            proceedLink.addEventListener('click', function (event) {
                event.preventDefault();
                initializePayment();
            });
        }
    });
 }

