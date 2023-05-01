(function ($) {
    Drupal.behaviors.learningwx = {
        attach: function (context, settings) {
            $('.token-embed').find('img').each(function(key, value) {
                // Get the url
                let linkUrl = ($(this).attr('src'));
                // Check to see if the url is relative
                if (linkUrl && linkUrl.startsWith('/')) {
                    let newUrl = 'https://www.e-education.psu.edu' + linkUrl;
                    $(this).attr('src', newUrl);
                }
            });


            $('.token-embed').find('a').each(function(key, value) {
                // Get the url
                let linkUrl = ($(this).attr('href'));
                // Check to see if the url is relative
                if (linkUrl && linkUrl.startsWith('/')) {
                    let newUrl = 'https://www.e-education.psu.edu' + linkUrl;
                    $(this).attr('href', newUrl);
                }
            });

            $('a.proprietary').contents().unwrap();
            $('img.proprietary').remove();
            $('p.proprietary').remove();
            $('span.proprietary').remove();
	    $('div.proprietary').remove();
        }
    }
})(jQuery);
