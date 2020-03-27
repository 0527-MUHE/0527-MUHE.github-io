// 导航栏点击时出现小白条jq
$(function(){
	$('.nav_ul li').click(function(){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
	})
//顶部侧栏菜单出现与隐藏
$('.slider_btn').click(function(){
	showSlider();
})
function showSlider(){
	$('mask').fadeIn()
	$('slider').css('right',0)
}
function hideSlider(){
	$('mask').fadeOut()
	$('slider').css('right',-300)
}
})