var swiper = new Swiper(".swiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' +
				className +
				' custom_bullet_des"><span class="number_text">0' +
				(index + 1) +
				"</span></span>"
			);
		},
	},
});

var info = document.querySelector("#icon_info");
var navigations = document.querySelector(".swiper-pagination");

if(window.innerWidth < 625){
	info.onmouseout = function() {
		navigations.style.display = "flex"
	}
	info.onmouseover = function() {
		navigations.style.display = "none"
	};
}

var request = document.querySelector(".button_request");
var navigations_arrow = document.querySelector(".navigation_block");

request.onmouseout = function() {
	navigations_arrow.style.display = "block"
}
request.onmouseover = function() {
	navigations_arrow.style.display = "none"
};

$(window).click(function(){ 
	$('#request_id').fadeOut(500);});
$('.button_request').click(function(event){ 
	event.stopPropagation();
	$('#request_id').fadeIn(500);});
$('.request').click(function(event){ 
	event.stopPropagation();});
$(".close").click(function(){
	$('#request_id').fadeOut(500);
});

if (window.innerWidth < 1000) {
	document.querySelectorAll(".swiper-slide")[0].style.backgroundImage =
		"linear-gradient(rgba(1, 22, 59, 0.6), rgba(1, 22, 59, 0.6)), url('./assets/img/slider/img_bg_1.png')";
	document.querySelectorAll(".swiper-slide")[1].style.backgroundImage =
		"linear-gradient(rgba(7, 45, 90, 0.6), rgba(7, 45, 90, 0.6)), url('./assets/img/slider/img_bg_2.png')";
	document.querySelectorAll(".swiper-slide")[2].style.backgroundImage =
		"linear-gradient(rgba(196, 7, 7, 0.6), rgba(196, 7, 7, 0.6)), url('./assets/img/slider/img_bg_3.png')";
}
