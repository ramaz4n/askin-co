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
	slidesPerView: 3.5,
	slidesPerGroup: 1,

	breakpoints: {
		320:{
			slidesPerView: 1,
		},
		490:{
			slidesPerView: 2,
		},
		600:{
			slidePerView: 2.5,
		},
		800:{
			slidesPerView: 3,
		},
		900:{
			slidesPerView: 3.5,
		}
	}
 });



 const swiperPartners = new Swiper('.partners-swiper', {
	// If we need pagination
	pagination: {
	  el: '.part-pagination',
	  type: 'fraction',
	},
 
	// Navigation arrows
	navigation: {
		nextEl: '.part-next',
		prevEl: '.part-prev',
	},
	
	loop: true,
	slidesPerView: 4,
	slidesPerGroup: 1,
	breakpoints: {
		320:{
			slidesPerView: 1,
		},
		480:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 4,
		},
	}
 });



 