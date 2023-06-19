
/////////////////////////// MOBILE MENU  /////////////////////////
let openMenu = document.querySelector('.header__mobile-burger');
let closeMenu = document.querySelector('.mobile__menu-close');
let mobileMenuWrap = document.getElementById('mobile__menuWrap');
let mobMenu = document.querySelector('.mobile__menu');


openMenu.addEventListener('click', function(e){
	mobileMenuWrap.classList.remove('close');								
	mobileMenuWrap.classList.add('mobile__menuWrap');
})

closeMenu.addEventListener('click', function(e){
	mobileMenuWrap.classList.remove('mobile__menuWrap');
	mobileMenuWrap.classList.add('close');
})

mobileMenuWrap.addEventListener('click', function(e){
	mobileMenuWrap.classList.remove('mobile__menuWrap');
	mobileMenuWrap.classList.add('close');
})

mobMenu.addEventListener('click', function(e){
   e.stopPropagation()		
})



/////////////////////////// APP MENU  /////////////////////////
let appFormWrap = document.getElementById('appFormWrap');
let menu__btn = document.querySelector('.menu__btn');
let appForm = document.querySelector('.appForm');


menu__btn.addEventListener('click', function(e){
	appFormWrap.classList.remove('close');								
	appFormWrap.classList.add('appFormWrap');
})

appFormWrap.addEventListener('click', function(e){
	appFormWrap.classList.remove('appFormWrap');
	appFormWrap.classList.add('close');
})

appForm.addEventListener('click', function(e){
   e.stopPropagation()		
})




/////////////////////////// SEARCH MOBILE /////////////////////////

let mobileSearch = document.getElementById('mobileSearch');
let mobile__searchWrap = document.getElementById('mobileSearchWrap');
let header__mobileSearch = document.querySelector('.header__mobile-search');


mobile__searchWrap.addEventListener('click', function(e){
	mobileSearch.classList.remove('mobile__search-on');								
	mobileSearch.classList.add('mobile__search-off');
	mobile__searchWrap.classList.remove('mobile__searchWrap');
	mobile__searchWrap.classList.add('close');
})

header__mobileSearch.addEventListener('click', function(e){
	mobile__searchWrap.classList.remove('close');
	mobile__searchWrap.classList.add('mobile__searchWrap');
	mobileSearch.classList.remove('mobile__search-off');
	mobileSearch.classList.add('mobile__search-on');
})


mobileSearch.addEventListener('click', function(e){
   e.stopPropagation()		
})