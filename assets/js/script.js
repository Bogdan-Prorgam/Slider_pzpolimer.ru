var swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + ' custom_bullet_des"><span class="number_text">0' + (index + 1) + '</span></span>';
		},
	},
});

if(window.innerWidth < 1000){
	document.querySelector("#slider_image_1").src="./assets/img/slider/slider_img_modile_1.png";
	document.querySelector("#slider_image_2").src="./assets/img/slider/slider_img_modile_2.png";
	document.querySelector("#slider_image_3").src="./assets/img/slider/slider_img_modile_3.png";
	document.querySelectorAll(".swiper-slide")[0].style.backgroundImage = "linear-gradient(rgba(1, 22, 59, 0.6), rgba(1, 22, 59, 0.6)), url('./assets/img/slider/img_bg_1.png')";
	document.querySelectorAll(".swiper-slide")[1].style.backgroundImage = "linear-gradient(rgba(7, 45, 90, 0.6), rgba(7, 45, 90, 0.6)), url('./assets/img/slider/img_bg_2.png')";
	document.querySelectorAll(".swiper-slide")[2].style.backgroundImage = "linear-gradient(rgba(196, 7, 7, 0.6), rgba(196, 7, 7, 0.6)), url('./assets/img/slider/img_bg_3.png')";

}