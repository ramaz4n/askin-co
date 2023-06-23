const swiper = new Swiper('.swiper', {
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  type: 'fraction',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-nextBtn',
	  prevEl: '.swiper-prevBtn',
	},
	loop: true,
 
 });



const swiperNews = new Swiper('.news-swiper', {
	// If we need pagination
	pagination: {
	  el: '.news-pagination',
	  type: 'fraction',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.news-nextBtn',
	  prevEl: '.news-prevBtn',
	},
	
	loop: true,
	slidesPerView: "auto",
	slidesPerGroup: 1,

 });