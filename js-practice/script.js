let buttonElement = document.querySelector('button');
let users = [
    {
        username: 'nitin',
        password: '123'
    }
];
buttonElement.addEventListener('click', () => {
    checkCredentials();
});


function getUser(usernameInput) {
    let userFound = null;
    users.forEach((user) => {
        if (user.username == usernameInput) {
            userFound = user;
        }
    });
    return userFound;
}

function checkCredentials() {
    let usernameInputElement = document.querySelector('#username');
    let passwordInputElement = document.querySelector('#password');
    if (getUser(usernameInputElement.value)) {
        if (passwordInputElement.value == getUser(usernameInputElement.value).password) {
            alert('Welcome, password matched');
        } else {
            alert('Incorrect password');
        }
    } else {
        alert('User does not exist');
    }
}
