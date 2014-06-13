$(document).ready(function(){

	editor = {

		init: function(){
			editor.editSlideShowTitle();
			editor.editSlide();
		},

		editSlideShowTitle: function(){
			$('.edit-slideshow-title').on('click', function(){
				$(this).hide().prev().prev().hide();
				titleForm = $(this).prev().show();
				titleForm.find('input[type="text"]').focus();
			});
		},

		editSlide: function(){
			$('.edit-slide').on('click', function(){
				$(this).parent().find('h4').hide();
				$(this).hide().parent().find('p').hide();

				titleForm = $(this).prev().show();
				titleForm.find('input[type="text"]').focus();
			});
		}

	}

	editor.init();
	

});