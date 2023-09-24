//navscroll/.......
let nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll', window.acrollY > 0);
});
// active toggle......
let AllNaviLinkA = document.querySelector('nav-links li a');
 
// active add......

AllNaviLinkA.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive()
        item.classList.add('active');
    })
});

// active remove......
const removeActive =()=> AllNaviLinkA.forEach(item=>{
    item.classList.remove('active')
})

// nav links toggler..........
let menubars = document.querySelector('nav button')
let navlinks = document.querySelector('.nav-links')
menubars.addEventListener('clicks',()=>{
    navlinks.classList.toggle('nav-links-block')
})