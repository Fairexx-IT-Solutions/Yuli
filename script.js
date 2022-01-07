AOS.init();


const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', ()=> container.classList.add('shownav'));

close.addEventListener('click', ()=> container.classList.remove
('shownav'));

const labels = document.querySelectorAll('.form label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx *50}ms"> ${letter}</span>`)
    .join('')
})