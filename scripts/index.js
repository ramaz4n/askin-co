
let closeMenu = document.querySelector('.header__mobile-burger');
let mobileMenu = document.getElementById('mobile__menuWrap');

closeMenu.addEventListener('click', function(e){
	mobileMenu.classList.remove('close');
	mobileMenu.classList.add('mobile__menuWrap');
})