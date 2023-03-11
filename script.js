const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;

    if (username === 'username' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});