
$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
	var FirstItem = carouselList.find("li:first");
	var LastItem = carouselList.find("li:last");
	LastItem.after(FirstItem);
	carouselList.css({marginLeft:0});
	};
});







