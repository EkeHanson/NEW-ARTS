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

if (document.querySelector("#signUpBtn")) {
    document.getElementById('signUpBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        
        function getParameterByName(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
        let email = getParameterByName('email');

        // Change button text to "Signing up..."
        document.getElementById('signUpBtn').textContent = 'Signing up...';

        // Get form data
        let formData = {
            first_name: document.getElementById('firstName').value,
            last_name: document.getElementById("lastName").value,
            password: document.getElementById("password").value,
            email: email
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
                // Redirect to login page on successful signup
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
            // Handle signup errors
            console.error('There was a problem with the fetch operation:', error);
            // Change button text back to "Sign up HERE"
            document.getElementById('signUpBtn').textContent = 'Sign up HERE';
        });
    });
}


if (document.querySelector("#logInForm")) {
    document.getElementById('signInBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Change button text to "Signing in..."
        document.getElementById('signInBtn').textContent = 'Signing in...';

        // Get form data
        let formData = {
            password: document.getElementById("logPass").value,
            email: document.getElementById("logEmail").value
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
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Handle successful login
            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('userId', data.user_id);
            localStorage.setItem('userFirstName', data.user_first_name);
            localStorage.setItem('userLastName', data.user_last_name);
            localStorage.setItem('userEmail', data.user_email);
            // Redirect to courses page
            window.location.href = coursesPage;
        })
        .catch(error => {
            // Handle login errors
            alert("Incorrect email or password");
            console.error('There was a problem with the fetch operation:', error);
            // Change button text back to "Sign in"
            document.getElementById('signInBtn').textContent = 'Sign in';
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


 if (document.querySelector('#restpword')) {

     function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    let resetToken = getParameterByName('reset_token');
    let email = getParameterByName('email');
    let password = document.getElementById('passwordResetBtn').value;
    
    document.getElementById('restBtn').addEventListener('click', function(event) {
        event.preventDefault();
          
          // Change button text to "Signing in..."
          document.getElementById('restBtn').textContent = 'Resetting Password...';
  
          // Get form data
          let data = {
              reset_token: resetToken,
              password: password,
              email: email
          };
  
          // Send POST request using fetch API
          fetch('https://new-arts-api.onrender.com/user/password/reset/confirm/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          })
          .then(response => {
              if (response.ok) {
                  window.location.href = loginPage;
                  return response.json();
              }
              throw new Error('Network response was not ok.');
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
              alert("Incorrect email or password");
              document.getElementById('restBtn').textContent = 'New Password';
          });
      });
}




if (document.querySelector("#admin-dshboard")) {
        // Add event listener to the form submission
        document.getElementById('submit-category').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Get form data
            let name = document.getElementById('category-title').value;
            let details = document.getElementById('category-description').value;
            let imageInput = document.getElementById('category-image');
            let image = imageInput.files[0];
    
            // Create a FormData object
            let formData = new FormData();
            formData.append('name', name);
            formData.append('details', details);
            formData.append('image', image);
    
            // Send POST request using fetch API
            fetch('https://new-arts-api.onrender.com/course/categories/', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    // Category created successfully
                    window.location.href = "courses.html";
                } else {
                    // Error handling
                    throw new Error('Failed to create category');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while creating the category.');
            });
        });


        // Add event listener to the form submission
        document.getElementById('submit-instructor').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Get form data
            let instructor_email = document.getElementById('instructor-email').value;
            let instructor_first_name = document.getElementById('instructor-first-name').value;
            let instructor_last_name = document.getElementById('instructor-last-name').value;
            let imageInput = document.getElementById('instructor-image');
            let image = imageInput.files[0];
            

            // Create a FormData object
            let formData = new FormData();
            formData.append('email', instructor_email);
            formData.append('instructor_first_name', instructor_first_name);
            formData.append('instructor_last_name', instructor_last_name);
            formData.append('image', image);
    
            // Send POST request using fetch API
            fetch('https://new-arts-api.onrender.com/course/instructors/', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    // Category created successfully
                    window.location.href = "instructors.html";
                } else {
                    // Error handling
                    throw new Error('Failed to create instructor');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while creating the instructors.');
            });
        });


    };


    

//     document.getElementById('submit-instructor').addEventListener('click', function(event) {
//         event.preventDefault();

//         // Change button text to "Creating Category..."
//         document.getElementById('submit-instructor').textContent = 'Creating Instructor...';

//         // Get form data
//         // let instructor_id = document.getElementById('instructor-id').value;
//         let instructor_email = document.getElementById('instructor-email').value;
//         let instructor_first_name = document.getElementById('instructor-first-name').value;
//         let instructor_last_name = document.getElementById('instructor-last-name').value;
//         let imageInput = document.getElementById('instructor-image');
//         let image = null;

//         if (imageInput.files.length > 0) {
//             // If a file has been selected, use the first file
//             image = imageInput.files[0];
//         } else {
//             // Handle case where no file has been selected
//             alert("Please select an image for the category.");
//             return; // Exit the function early
//         }

//         let formData = new FormData();
//         // formData.append('instructor_id', instructor_id);
//         formData.append('instructor_email', instructor_email);
//         formData.append('instructor_first_name', instructor_first_name);
//         formData.append('instructor_last_name', instructor_last_name);
//         formData.append('image', image);

//         // Send POST request using fetch API
//         fetch('http://127.0.0.1:9090/course/instructors/', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Network response was not ok.');
//         })
//         .then(data => {
//             window.location.href = "instuctors.html";
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle errors
//             console.error('There was a problem with the fetch operation:', error);
//             alert("An error occurred while creating the category.");
//         });
//     });
