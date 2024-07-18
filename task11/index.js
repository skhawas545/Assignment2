document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name === '') {
        isValid = false;
        nameError.textContent = 'Name is required.';
    } else if (name.length < 3) {
        isValid = false;
        nameError.textContent = 'Name must be at least 3 characters long.';
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        isValid = false;
        emailError.textContent = 'Email is required.';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        emailError.textContent = 'Enter a valid email address.';
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password === '') {
        isValid = false;
        passwordError.textContent = 'Password is required.';
    } else if (password.length < 6) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 6 characters long.';
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
});
