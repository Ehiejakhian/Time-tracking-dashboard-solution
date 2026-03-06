
let btns = document.querySelectorAll('.hero ul li button');
let elements = null;
setTimeout(() => {
  elements = document.querySelectorAll('[data-daily]')
},1000)

btns.forEach(btn => {
  btn.          addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active')
    if (elements) {
      elements.forEach(elem => elem.textContent = elem.getAttribute(`data-${btn.textContent.toLowerCase()}`));
    }
    
  })
})
