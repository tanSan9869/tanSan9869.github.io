burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navlist =document.querySelector('.navlist')
rightNav =document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-nav');
    rightNav.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
})