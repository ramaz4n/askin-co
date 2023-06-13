
$(function(){
	$('.offer').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
})

//$(function(){
//	$('.news__list').slick({
//		infinite: true,
//		slidesToShow: 3,
//		slidesToScroll: 1,
//	 });
//})


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





