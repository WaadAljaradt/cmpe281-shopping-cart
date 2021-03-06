
	
	
	(function ($) {

  $.fn.rating = function () {

    var element;

    // A private function to highlight a star corresponding to a given value
    function _paintValue(ratingInput, value) {
      var selectedStar = $(ratingInput).find('[data-value=' + value + ']');
      selectedStar.removeClass('glyphicon-star-empty').addClass('glyphicon-star');
      selectedStar.prevAll('[data-value]').removeClass('glyphicon-star-empty').addClass('glyphicon-star');
      selectedStar.nextAll('[data-value]').removeClass('glyphicon-star').addClass('glyphicon-star-empty');
    }

   

    // Iterate and transform all selected inputs
    for (element = this.length - 1; element >= 0; element--) {

      var el, i, ratingInputs,
        originalInput = $(this[element]),
        max = originalInput.data('max') || 5,
        min = originalInput.data('min') || 0,
        clearable = originalInput.data('clearable') || null,
        stars = '';

      // HTML element construction
      for (i = min; i <= max; i++) {
        // Create <max> empty stars
        stars += ['<span class="glyphicon glyphicon-star-empty" data-value="', i, '"></span>'].join('');
      }
      // Add a clear link if clearable option is set
      if (clearable) {
        stars += [
          ' <a class="rating-clear" style="display:none;" href="javascript:void">',
          '<span class="glyphicon glyphicon-remove"></span> ',
          clearable,
          '</a>'].join('');
      }

      el = [
        // Rating widget is wrapped inside a div
        '<div class="rating-input">',
        stars,
        // Value will be hold in a hidden input with same name and id than original input so the form will still work
        '<input type="hidden" name="',
        originalInput.attr('name'),
        '" value="',
        originalInput.val(),
        '" id="',
        originalInput.attr('id'),
        '" />',
        '</div>'].join('');

      // Replace original inputs HTML with the new one
      originalInput.replaceWith(el);

    }

    // Give live to the newly generated widgets
    $('.rating-input')

      
      // Initialize view with default value
      .each(function () {
        var val = $(this).find('input').val();
        if (val) {
          _paintValue(this, val);
          $(this).find('.rating-clear').show();
        }
      });

  };

  // Auto apply conversion of number fields with class 'rating' into rating-fields
  $(function () {
    if ($('input.rating[type=number]').length > 0) {
      $('input.rating[type=number]').rating();
    }
  });
  
  
  
  $(function() {
	    var action;
	    $(".number-spinner button").mousedown(function () {
	        btn = $(this);
	        input = btn.closest('.number-spinner').find('input');
	        btn.closest('.number-spinner').find('button').prop("disabled", false);

	    	if (btn.attr('data-dir') == 'up') {
	            action = setInterval(function(){
	                if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
	                    input.val(parseInt(input.val())+1);
	                }else{
	                    btn.prop("disabled", true);
	                    clearInterval(action);
	                }
	            }, 50);
	    	} else {
	            action = setInterval(function(){
	                if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
	                    input.val(parseInt(input.val())-1);
	                }else{
	                    btn.prop("disabled", true);
	                    clearInterval(action);
	                }
	            }, 50);
	    	}
	    }).mouseup(function(){
	        clearInterval(action);
	    });
	});
 
}
	
	(jQuery));
	
	
