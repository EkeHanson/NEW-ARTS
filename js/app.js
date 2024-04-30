if (document.querySelector("#logInForm")){
    
    document.getElementById('signInBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
      
    // Get form data
    let formData = {
        password : document.getElementById("logPass").value,
        email : document.getElementById("logEmail").value
    };

    // Send POST request using fetch API
    fetch('http://127.0.0.1:9090/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            // window.location.href = coursesPage;
            alert("Login Successful")
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


// let coursesPage = "https://new-arts-website.vercel.app/course-list.html"


// document.getElementById('submitBtn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default form submission
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const email = urlParams.get('email');
    
//     // Get form data
//     let formData = {
//         first_name: document.getElementById('firstName').value,
//         last_name : document.getElementById("lastName").value,
//         password : document.getElementById("password").value,
//         email : email
//         // Add other form fields similarly
//     };

//     // Send POST request using fetch API
//     fetch('https://new-arts-api.onrender.com/user/create/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => {
//         if (response.ok) {
//             window.location.href = coursesPage;
//             return response.json();
            
//         }
//         throw new Error('Network response was not ok.');
//     })
//     .then(data => {
//         // Handle response data
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('There was a problem with the fetch operation:', error);
//     });
// });

