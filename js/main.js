// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuLogo = document.querySelector('.menu-logo');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('Show');
		menuNav.classList.add('Show');
		menuLogo.classList.add('Show');
		navItems.forEach(item => item.classList.add ('Show'));

		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('Show');
		menuNav.classList.remove('Show');
		menuLogo.classList.remove('Show');
		navItems.forEach(item => item.classList.remove ('Show'));

		showMenu = false;
	}
}