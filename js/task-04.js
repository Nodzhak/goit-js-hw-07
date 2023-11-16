document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = document.querySelector('.login-form [name="email"]').value.trim();
    const passwordValue = document.querySelector('.login-form [name="password"]').value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);

    document.querySelector('.login-form').reset();
});