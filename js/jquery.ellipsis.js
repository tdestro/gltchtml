(function($) {
	$.fn.ellipsis = function()
	{
		return this.each(function()
		{
			var el = $(this);
			var maxheight  = el.height();
			
			if(el.attr('data-lines')){
				var lineHeight = el.css('line-height');
				var numLines = Math.floor(parseInt(el.attr('data-lines')));
				lineHeight = parseFloat(lineHeight.replace('px',''));
				maxheight = numLines * lineHeight;
				console.log(maxheight); 
			}
			
			

			if(el.css("overflow") == "hidden")
			{
				var text = el.html();
				var multiline = el.hasClass('multiline');
				var t = $(this.cloneNode(true))
					.hide()
					.css('position', 'absolute')
					.css('overflow', 'visible')
					.width(multiline ? el.width() : 'auto')
					.height(multiline ? 'auto' : el.height())
					;

				el.after(t);

				function height() { return t.height() > maxheight; };
				function width() { return t.width() > maxheight; };

				var func = multiline ? height : width;

				while (text.length > 0 && (multiline ? height() : width()))
				{
					text = text.substr(0, text.length - 1);
					t.html(text + "...");
				}

				el.html(t.html());
				t.remove();
			}
		});
	};
})(jQuery);