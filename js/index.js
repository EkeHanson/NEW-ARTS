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
