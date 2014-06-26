$(document).ready(function(){

	// function add_fields(link, association, content) {
	//   var new_id = new Date().getTime();
	//   var regexp = new RegExp("new_" + association, "g");
	//   $(link).up().insert({
	//         before: content.replace(regexp, new_id)
	//   });
	// }

	// function add_fields(link, association, content) {
	// 	var new_id = new Date().getTime();
	// 	var regexp = new RegExp("new_" + association, "g");
	// 	$(this).before(content.replace(regexp, new_id));
	// }


	editor = {

		init: function(){
			editor.editSlideShowTitle();
			editor.editSlide();
			// editor.addSlideFields();
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
		},

		addSlideFields: function(link, association, content) {
			var new_id = new Date().getTime();
			var regexp = new RegExp("new_" + association, "g");
			$(link).before(content.replace(regexp, new_id));
		}

	}

	editor.init();
	// add_fields();

});