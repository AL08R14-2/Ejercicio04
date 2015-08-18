// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btn-sonido').click(function(){
if ($('#btn-sonido').hasClass('ui-icon-audio'))

{
	//Apagar audio
	$('#btn-sonido').removeClass('ui-icon-audio');
	$('#btn-sonido').addClass ('ui-icon-bars');
	alert('Se apago el sonido');
}
else if ($('#btn-sonido').hasClass('ui-icon-bars'))

{

	$('#btn-sonido').removeClass('ui-icon-bars');
	$('#btn-sonido').addClass ('ui-icon-audio');
	alert('Se prendio el sonido');
	navigator.cotification.beep(1);
}
});
}); //click a btn_sonido
