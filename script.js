let navlinks = document.querySelector('.navlinks');
document.querySelector('#menu-btn').onclick = () =>{
    navlinks.classList.toggle('active');
    search.classList.remove('active');
    cartitem.classList.remove('active');
}

let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    navlinks.classList.remove('active');
    cartitem.classList.remove('active');
}

let cartitem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    navlinks.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navlinks.classList.remove('active');
    search.classList.remove('active');
    cartitem.classList.remove('active');
}