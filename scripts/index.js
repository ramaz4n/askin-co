
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



/////////////////////////// CATALOG MENU  /////////////////////////

let catalog = document.getElementById('catalog');
let menu__catalogBtn = document.querySelector('.menu__catalog-btn');
let menu__catalogCloseBtn = document.querySelector('.menu__catalog-closeBtn');

menu__catalogBtn.addEventListener('click', function(e){
	catalog.classList.toggle('close');		
	menu__catalogCloseBtn.classList.toggle('catalog__close-btn')					
	menu__catalogBtn.classList.toggle('close');		
})

menu__catalogCloseBtn.addEventListener('click', function(e){
	catalog.classList.toggle('close');		
	menu__catalogCloseBtn.classList.toggle('catalog__close-btn')					
	menu__catalogBtn.classList.toggle('close');		
})

//TAbs
let catalogItem1 = document.getElementById('catalogItem1');
let catalogItem2 = document.getElementById('catalogItem2');
let catalogItem3 = document.getElementById('catalogItem3');
let catalogItem4 = document.getElementById('catalogItem4');

let catalogBlock1 = document.getElementById('catalogBlock1');
let catalogBlock2 = document.getElementById('catalogBlock2');
let catalogBlock3 = document.getElementById('catalogBlock3');
let catalogBlock4 = document.getElementById('catalogBlock4');

let catalogArrow1 = document.getElementById('catalogArrow1');
let catalogArrow2 = document.getElementById('catalogArrow2');
let catalogArrow3 = document.getElementById('catalogArrow3');
let catalogArrow4 = document.getElementById('catalogArrow4');


//let catalogBLocks = document.querySelectorAll('.catalog__itemBlock');

//let catalogArrows = document.querySelectorAll('#catalog__ar');


catalogItem1.addEventListener('click', function(e){

	catalogBlock2.classList.add('close')
	catalogBlock3.classList.add('close')
	catalogBlock4.classList.add('close')

	catalogItem2.classList.remove('item-bgColor')
	catalogItem3.classList.remove('item-bgColor')
	catalogItem4.classList.remove('item-bgColor')

	catalogArrow2.classList.remove('ar__reverse')
	catalogArrow3.classList.remove('ar__reverse')
	catalogArrow4.classList.remove('ar__reverse')

	catalogBlock1.classList.toggle('close');								
	catalogItem1.classList.toggle('item-bgColor');								
	catalogArrow1.classList.toggle('ar__reverse');								
})

catalogItem2.addEventListener('click', function(e){

	catalogBlock1.classList.add('close')
	catalogBlock3.classList.add('close')
	catalogBlock4.classList.add('close')

	catalogItem1.classList.remove('item-bgColor')
	catalogItem3.classList.remove('item-bgColor')
	catalogItem4.classList.remove('item-bgColor')

	catalogArrow1.classList.remove('ar__reverse')
	catalogArrow3.classList.remove('ar__reverse')
	catalogArrow4.classList.remove('ar__reverse')

	catalogBlock2.classList.toggle('close');	
	catalogItem2.classList.toggle('item-bgColor');								
	catalogArrow2.classList.toggle('ar__reverse');								
})

catalogItem3.addEventListener('click', function(e){
	catalogBlock1.classList.add('close')
	catalogBlock2.classList.add('close')
	catalogBlock4.classList.add('close')

	catalogItem1.classList.remove('item-bgColor')
	catalogItem2.classList.remove('item-bgColor')
	catalogItem4.classList.remove('item-bgColor')

	catalogArrow2.classList.remove('ar__reverse')
	catalogArrow1.classList.remove('ar__reverse')
	catalogArrow4.classList.remove('ar__reverse')

	catalogBlock3.classList.toggle('close');	
	catalogItem3.classList.toggle('item-bgColor');								
	catalogArrow3.classList.toggle('ar__reverse');								

})

catalogItem4.addEventListener('click', function(e){
	catalogBlock1.classList.add('close')
	catalogBlock3.classList.add('close')
	catalogBlock2.classList.add('close')

	catalogItem1.classList.remove('item-bgColor')
	catalogItem2.classList.remove('item-bgColor')
	catalogItem3.classList.remove('item-bgColor')

	catalogArrow2.classList.remove('ar__reverse')
	catalogArrow3.classList.remove('ar__reverse')
	catalogArrow1.classList.remove('ar__reverse')

	catalogBlock4.classList.toggle('close');	
	catalogItem4.classList.toggle('item-bgColor');								
	catalogArrow4.classList.toggle('ar__reverse');								
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








///////////////////////////  PRODUCT GALLERY  /////////////////////////

//получаем сами кнопки
let galleryBtn1 = document.querySelector('#gallery-btn1');
let galleryBtn2 = document.querySelector('#gallery-btn2');
let galleryBtn3 = document.querySelector('#gallery-btn3');

//получаем картинки
let galleryImg1 = document.querySelector('#gallery-img1');
let galleryImg2 = document.querySelector('#gallery-img2');
let galleryImg3 = document.querySelector('#gallery-img3');

//обработка первой кнопки
galleryBtn1.addEventListener('click', function(e){
	galleryBtn1.classList.add("active__gallery-btn")								
	galleryBtn2.classList.remove("active__gallery-btn")								
	galleryBtn3.classList.remove("active__gallery-btn")	

	galleryImg1.classList.remove("close")								
	galleryImg2.classList.add("close")								
	galleryImg3.classList.add("close")								
})

//обработка второй кнопки
galleryBtn2.addEventListener('click', function(e){
	galleryBtn2.classList.add("active__gallery-btn")								
	galleryBtn1.classList.remove("active__gallery-btn")								
	galleryBtn3.classList.remove("active__gallery-btn")	

	galleryImg2.classList.remove("close")								
	galleryImg1.classList.add("close")								
	galleryImg3.classList.add("close")								
})

//обработка третьей кнопки
galleryBtn3.addEventListener('click', function(e){
	galleryBtn3.classList.add("active__gallery-btn")								
	galleryBtn2.classList.remove("active__gallery-btn")								
	galleryBtn1.classList.remove("active__gallery-btn")	

	galleryImg3.classList.remove("close")								
	galleryImg2.classList.add("close")								
	galleryImg1.classList.add("close")								
})