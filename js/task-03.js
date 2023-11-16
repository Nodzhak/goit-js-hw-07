document
.querySelector('#name-input')
.addEventListener('input', function () {
    const inputValue = this.value.trim();
    const outputEl = document.querySelector('#name-output');

    if (inputValue === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = inputValue;
    }
});