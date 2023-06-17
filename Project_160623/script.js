const text = document.querySelector('textarea');
const counter = document.querySelector('#counter');
text.addEventListener('input', function () {
    counter.textContent = text.value.length;
})