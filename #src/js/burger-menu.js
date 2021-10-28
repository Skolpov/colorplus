// Бургер меню

const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const navIcon = document.querySelector('.menu-btn');
const closeBurgerMenu = document.querySelector('.close-burger');
const burgerNav = document.querySelector('.burger-menu__block');
const burgerItems = Array.prototype.slice.call(document.querySelectorAll('.burger-menu__items span'));

navIcon.addEventListener('click', function() {
	this.classList.add('open-burger');
	overlay.classList.add('show');
	burgerNav.classList.add('show');
	body.classList.add('overflow-hidden');
	paddingRight() // В файле popups.js
});

function closeNav() {
	navIcon.classList.remove('open-burger');
	overlay.classList.remove('show');
	burgerNav.classList.remove('show');
	body.classList.remove('overflow-hidden');
	removePaddingRight() //В файле popups.js
}

overlay.addEventListener('click', closeNav);

closeBurgerMenu.addEventListener('click',closeNav);

burgerItems.forEach(function(item) {
	item.addEventListener('click', closeNav)
});

//КНОПКА ЗАЯВКИ В БУРГЕР-МЕНЮ
const burgerCallBtn = document.querySelector('.burger__call-btn');

burgerCallBtn.addEventListener('click', function() {
	overlay.classList.remove('show');
	burgerNav.classList.remove('show');
	navIcon.classList.remove('open-burger');
	removePaddingRight()
});




// ==========