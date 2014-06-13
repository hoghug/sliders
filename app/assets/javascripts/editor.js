$(document).ready(function(){

	$('.edit-title').on('click', function(){

		titleForm = $(this).prev().show();

		titleForm.find('input[type="text"]').focus();


	});

});