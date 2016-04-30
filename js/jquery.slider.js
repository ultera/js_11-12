'use strict';
(function($) {

	$.fn.slider = function(options) {

	var defaults = {
		width: '225px'
	};

	var settings = $.extend(defaults, options);

  var $itemsList = $('.slider-list');
  var left = 0;
  var itemWidth = parseFloat(settings.width);
  var itemsCount = $itemsList.find('li').length/2;
  var visibleItems = ( $('.slider-hider').width()/itemWidth ).toFixed();

  var itemsBegin = itemsCount - visibleItems;
  var leftBegin = - itemWidth * itemsBegin;
  var leftReset = - itemWidth * (itemsCount + itemsBegin + 1);
  var rightBegin = - itemWidth * (itemsCount);


  $('.slider-arrow-left').on('click', goLeft);
  $('.slider-arrow-right').on('click', goRight);


  function goLeft(e) {
    left -= itemWidth;

		if(left == leftReset) {
      left = leftBegin;
      $itemsList.css({'left': left});
			left -= itemWidth;
    }
		$itemsList.animate({ left : left + "px"}, 500);

	};

		function goRight() {
			left += itemWidth;

			if(left == itemWidth) {
	      left = rightBegin;
	      $itemsList.css({'left': left});
				left += itemWidth;
	    }
			$itemsList.animate({ left : left + "px"}, 500);
		}

		return this;
	}

})(jQuery);
