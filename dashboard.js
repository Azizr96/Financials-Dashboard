
const hamburger = document.querySelector('.hamburger');

const nav = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {

  nav.classList.toggle('open');

 if(nav.classList.contains('open')) {
    hamburger.innerHTML = '✕'  // nav just opened
    hamburger.setAttribute('aria-expanded', 'true')
} else {
    hamburger.innerHTML = '☰'  // nav just closed
    hamburger.setAttribute('aria-expanded', 'false')
}
  
})