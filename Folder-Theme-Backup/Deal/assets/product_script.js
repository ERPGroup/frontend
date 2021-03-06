$(document).ready(function() {
$('.bxslider').bxSlider({
	pagerCustom: '#bx-pager',
	infiniteLoop: false,
	touchEnabled: true,
	nextText: '<i class="icon-right-open-mini" aria-hidden="true"></i>',
	prevText: '<i class="icon-left-open-mini" aria-hidden="true"></i>',
	onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		$('.active-slide').removeClass('active-slide');
		$('.bxslider>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
		$('#bx-pager .owl-stage').trigger('to.owl.carousel', currentSlideHtmlObject);
	},
	onSliderLoad: function () {
		$('.bxslider > li').eq(1).addClass('active-slide')
	},
});
jQuery("#bx-pager").owlCarousel({
	items : 4,
	itemsDesktop : [1024,4],
	itemsDesktopSmall : [900,4],
	itemsTablet: [600,4],
	itemsMobile : [320,4],nav : true,navText: ['', ''],slideSpeed : 500,pagination : false
});
CloudZoom.quickStart();
$.extend($.fn.CloudZoom.defaults, {
	zoomPosition: 'inside',
	autoInside: true,
	disableOnScreenWidth: 991
});
})