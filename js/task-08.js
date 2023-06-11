const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();

    const { elements: {email, password}} = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("All fields must be filled.");
    } else {
        const profile = {
            email: email.value,
            password: password.value,
        };
    }
    event.currentTarget.reset();
};
