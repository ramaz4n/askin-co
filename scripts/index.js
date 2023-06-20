
/////////////////////////// MOBILE MENU  /////////////////////////
// открытие и закрытие мобильного меню (бургер)

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



/////////////////////////// APP MODAL  /////////////////////////
//открытие модалки при клике на ОСТАВИТЬ ЗАЯВКУ

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
//открытие блока поиска при клике на инонку поиска в мобилке

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




/////////////////////////// PRODUCT BLOCK /////////////////////////
//табы по продукту

let productBtn1 = document.getElementById('productBtn1');
let productBtn2 = document.getElementById('productBtn2');
let productBtn3 = document.getElementById('productBtn3');
let productBtn4 = document.getElementById('productBtn4');

let productBlock1 = document.getElementById('productBlock1');
let productBlock2 = document.getElementById('productBlock2');
let productBlock3 = document.getElementById('productBlock3');
let productBlock4 = document.getElementById('productBlock4');



productBtn1.addEventListener('click', function(e){
	productBtn1.classList.add('product__btnBG');
	productBtn2.classList.remove('product__btnBG');
	productBtn3.classList.remove('product__btnBG');
	productBtn4.classList.remove('product__btnBG');
	productBlock2.classList.add('close');
	productBlock3.classList.add('close');
	productBlock4.classList.add('close');
	productBlock1.classList.remove('close');								
})
productBtn2.addEventListener('click', function(e){
	productBtn2.classList.add('product__btnBG');
	productBtn1.classList.remove('product__btnBG');
	productBtn3.classList.remove('product__btnBG');
	productBtn4.classList.remove('product__btnBG');
	productBlock1.classList.add('close');
	productBlock3.classList.add('close');
	productBlock4.classList.add('close');
	productBlock2.classList.remove('close');								
})
productBtn3.addEventListener('click', function(e){
	productBtn3.classList.add('product__btnBG');
	productBtn2.classList.remove('product__btnBG');
	productBtn1.classList.remove('product__btnBG');
	productBtn4.classList.remove('product__btnBG');
	productBlock1.classList.add('close');
	productBlock2.classList.add('close');
	productBlock4.classList.add('close');
	productBlock3.classList.remove('close');								
})
productBtn4.addEventListener('click', function(e){
	productBtn4.classList.add('product__btnBG');
	productBtn2.classList.remove('product__btnBG');
	productBtn3.classList.remove('product__btnBG');
	productBtn1.classList.remove('product__btnBG');
	productBlock1.classList.add('close');
	productBlock2.classList.add('close');
	productBlock3.classList.add('close');
	productBlock4.classList.remove('close');								
})