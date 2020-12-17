const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


// by default, no input is filled, so isValid is false
let isValid = false;
// set another global variable for password1and2
let passwordsMatch = false;


function validateForm() {
    // using contraint API(checkValidity is the API, it will return true or false after submiting the form)
    isValid = form.checkValidity();
    // style the message part, with the 'return' at bottom, it will stop at the return if isValid is false, it won't keep going to the next code
    if (!isValid) {
        message.textContent = 'Please fill out all the fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // check if 2 passwords are match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = 'Make sure password match.';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // if all the information is correct
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
};


function storeFromData() {
    const user = {
        name: form.name.value,
        telephone: form.telephone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // do something with these data, here we just console.log
    console.log(user);
}


function processFormData(e) {
    e.preventDefault();
    validateForm();
    //store the form data if valid
    if (isValid && passwordsMatch) {
        storeFromData();
    }
}


// event listener
form.addEventListener('submit', processFormData);