document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get form values
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agree = document.getElementById('agree').checked;

    // Basic validation
    let isValid = true;
    
    if (!fullName || !username || !email || !phone || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        isValid = false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        isValid = false;
    }

    if (!agree) {
        alert("You must agree to the terms.");
        isValid = false;
    }

    // If all validation checks pass
    if (isValid) {
        alert("Form submitted successfully!");
        // You can now submit the form or perform other actions
        // For example, you can use AJAX to send the form data to the server
        // document.getElementById('registrationForm').submit();
    }
});
