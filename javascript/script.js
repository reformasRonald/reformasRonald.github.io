
const $nav = document.querySelector('.nav');
const $hamburger = document.querySelector('.hamburger');

$hamburger.addEventListener('click', ()=>{
    $nav.classList.toggle("nav--open");
    $hamburger.classList.toggle("hamburger--open");
});
