const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {

    let symbolsInput = event.currentTarget.value.length;
    let trueNumber = Number(inputEl.dataset.length);

    if (symbolsInput === trueNumber) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
});