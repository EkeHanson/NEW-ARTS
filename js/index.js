import { SERVER_URL } from '../config.js';

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
            document.getElementById('submit-category').textContent = "Submitting ..."
            fetch('https://new-arts-api.onrender.com/course/categories/', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    // Category created successfully
                    document.getElementById('submit-category').textContent = "Submitting"
                    window.location.href = "courses.html";
                } else {
                    // Error handling
                    throw new Error('Failed to create category');
                }
            })
            .catch(error => {
                document.getElementById('submit-category').textContent = "Submitting"
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
            document.getElementById('submit-instructor').textContent = "Submitting ..."
            fetch('https://new-arts-api.onrender.com/course/instructors/', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    // Category created successfully
                    document.getElementById('submit-instructor').textContent = "Submitting"
                    window.location.href = "instructors.html";
                } else {
                    // Error handling
                    throw new Error('Failed to create instructor');
                }
            })
            .catch(error => {
                document.getElementById('submit-instructor').textContent = "Submitting"
                console.error('Error:', error);
                alert('An error occurred while creating the instructors.');
            });
        });


        //COURSES
        // Fetch data from the Category API endpoint // Fetch data from the Instructors API endpoint
            fetch('https://new-arts-api.onrender.com/course/instructors/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Get the select element
                const selectElement = document.querySelector('#selectInstructor');

                // Loop through the categories and create options
                data.forEach(instructor => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = `${instructor.instructor_last_name} ${instructor.instructor_id}` ; // Use category name as option text
                    optionElement.value = instructor.id; // Optionally, set the value of each option
                    selectElement.appendChild(optionElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
                        // Fetch categories
            fetch('https://new-arts-api.onrender.com/course/categories/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const selectElement = document.querySelector('#selectCategory');
                data.forEach(category => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = category.name;
                    optionElement.value = category.id;
                    selectElement.appendChild(optionElement);
                });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

            // Handle form submission
            document.getElementById('submit-course').addEventListener('click', function(event) {
            event.preventDefault();

            // Get form data
            const category = document.querySelector('#selectCategory').value;
            const instructor = document.querySelector('#selectInstructor').value;
            const course_description = document.getElementById('course-description').value;
            const course_title = document.getElementById('course-title').value;
            const course_price = document.getElementById('course-price').value;
            const course_duration = document.getElementById('course-duration').value;

            const formData = new FormData();
            formData.append('category', category);
            formData.append('title', course_title);
            formData.append('details', course_description);
            formData.append('amount', course_price);
            formData.append('duration', course_duration);
            formData.append('instructor', instructor);

            // Send POST request using fetch API
            fetch('https://new-arts-api.onrender.com/course/', {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('submit-course').textContent = "Submit";
                    window.location.href = "courses.html";
                } else {
                    throw new Error('Failed to create Course');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while creating the Course.');
                document.getElementById('submit-course').textContent = "Submit";
            });
            });

    // Add event listener to the select element
    document.querySelector('#selctionSchedule').addEventListener('change', function(event) {
        // Get the selected category value
        const selectedCategory = event.target.value;

        // Get all list items under the schedule
        const scheduleItems = document.querySelectorAll('.schedule-dlt-main ul li');

        // Hide all schedule items
        scheduleItems.forEach(item => {
            item.style.display = 'none';
        });

        // Show the specific schedule items based on the selected category
        if (selectedCategory === '1') {
            // Show items for option 1
            scheduleItems[0].style.display = 'block'; // Show Day 1
        } else if (selectedCategory === '2') {
            // Show items for option 2
            scheduleItems[0].style.display = 'block'; // Show Day 1
            scheduleItems[1].style.display = 'block'; // Show Day 2
            // You can add more conditions for other options as needed
        } else if (selectedCategory === '3') {
            // Show items for option 3
            scheduleItems[0].style.display = 'block'; // Show Day 1
            scheduleItems[1].style.display = 'block'; // Show Day 2
            scheduleItems[2].style.display = 'block'; // Show Day 2
            // You can add more conditions for other options as needed
        } else if (selectedCategory === '4') {
            // Show items for option 4
            scheduleItems[0].style.display = 'block'; // Show Day 1
            scheduleItems[1].style.display = 'block'; // Show Day 2
            scheduleItems[2].style.display = 'block'; // Show Day 2
            scheduleItems[3].style.display = 'block'; // Show Day 2
            // You can add more conditions for other options as needed
        } else if (selectedCategory === '5') {
            // Show items for option 5
            scheduleItems[0].style.display = 'block'; // Show Day 1
            scheduleItems[1].style.display = 'block'; // Show Day 2
            scheduleItems[2].style.display = 'block'; // Show Day 2
            scheduleItems[3].style.display = 'block'; // Show Day 2
            scheduleItems[4].style.display = 'block'; // Show Day 2
            // You can add more conditions for other options as needed
        } else if (selectedCategory === '6') {
            // Show items for option 6
            scheduleItems[0].style.display = 'block'; // Show Day 1
            scheduleItems[1].style.display = 'block'; // Show Day 2
            scheduleItems[2].style.display = 'block'; // Show Day 2
            scheduleItems[3].style.display = 'block'; // Show Day 2
            scheduleItems[5].style.display = 'block'; // Show Day 2
            scheduleItems[6].style.display = 'block'; // Show Day 2
        }
    });

    // Initialize an object to store the schedule data
const scheduleData = {
    day1: {},
    day2: {},
    day3: {},
    day4: {},
    day5: {},
    day6: {}
};

    // Add event listeners to date and time inputs for each day
    document.querySelectorAll('.hak-dlt-input').forEach((input, index) => {
        input.addEventListener('change', function(event) {
            // Get the day number from the input's parent li index
            const dayNumber = index + 1;
            
            // Get the type of input (date or time)
            const inputType = input.getAttribute('type');
            
            // Store the value in the scheduleData object
            scheduleData[`day${dayNumber}`][inputType] = event.target.value;
            
            console.log(scheduleData);
        });
    });

    }