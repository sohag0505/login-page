const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = this.username.value;
    const password = this.password.value;

    if (username === '2052CSE00838' && password === '123456') {
        // alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password.');
    }
});