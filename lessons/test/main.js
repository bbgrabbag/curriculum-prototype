const btn = document.querySelector('button');
let counter = 0;
const p = document.querySelector('p');
p.innerText = counter;
btn.addEventListener('click', () => {
    counter++
    p.innerText = counter;
})