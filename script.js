const hamburger = document.getElementById('hamburger-icon');
const navlinks = document.getElementById('nav-links');
const close = document.getElementById('close');
const overlay = document.getElementById('overlay');

function addClass(){
    navlinks.classList.add('showlinks');
    overlay.classList.add('overlay');

}

function removeClass(){
    navlinks.classList.remove('showlinks');
    overlay.classList.remove('overlay');
}

hamburger.addEventListener('click', addClass);
close.addEventListener('click', removeClass);
overlay.addEventListener('click', removeClass);