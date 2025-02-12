(function($) {

	// Initialize the responsive framework
	skel.init({
		reset: 'full', // Reset behavior

		// Define breakpoints for responsive design
		breakpoints: {
			global: {
				href: 'css/style.css', // Global stylesheet
				containers: 1400, // Max container width
				grid: { gutters: ['2em', 0] } // Grid gutter spacing
			},
			xlarge: {
				media: '(max-width: 1680px)', // Media query for xlarge screens
				href: 'css/style-xlarge.css', // xlarge screen stylesheet
				containers: 1200 // Container width for xlarge screens
			},
			large: {
				media: '(max-width: 1280px)', // Media query for large screens
				href: 'css/style-large.css', // large screen stylesheet
				containers: 960, // Container width for large screens
				grid: { gutters: ['1.5em', 0] }, // Grid gutter spacing for large screens
				viewport: { scalable: false } // Prevent zoom on large screens
			},
			medium: {
				media: '(max-width: 980px)', // Media query for medium screens
				href: 'css/style-medium.css', // medium screen stylesheet
				containers: '90%!' // Flexible container width for medium screens
			},
			small: {
				media: '(max-width: 736px)', // Media query for small screens
				href: 'css/style-small.css', // small screen stylesheet
				containers: '90%!', // Flexible container width for small screens
				grid: { gutters: ['1.25em', 0] } // Grid gutter spacing for small screens
			},
			xsmall: {
				media: '(max-width: 480px)', // Media query for extra small screens
				href: 'css/style-xsmall.css' // xsmall screen stylesheet
			}
		},

		// Plugins for additional functionality
		plugins: {
			layers: {
				// Navigation panel layer (mobile menu)
				navPanel: {
					animation: 'pushX', // Animation effect for opening
					breakpoints: 'medium', // Activate at medium screen size
					clickToHide: true, // Click to close the panel
					height: '100%', // Full height
					hidden: true, // Initially hidden
					html: '<div data-action="moveElement" data-args="nav"></div>', // Move nav content into panel
					orientation: 'vertical', // Vertical orientation
					position: 'top-left', // Position on the top-left
					side: 'left', // Slide from the left
					width: 250 // Panel width
				},
				// Navigation button layer (to open nav panel)
				navButton: {
					breakpoints: 'medium', // Activate at medium screen size
					height: '4em', // Button height
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>', // Button content
					position: 'top-left', // Button position
					side: 'top', // Align at the top
					width: '6em' // Button width
				}
			}
		}
	});

	// On DOM ready
	$(function() {
		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has fully loaded
		$body.addClass('is-loading');
		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

		// Enable touch mode styling for mobile devices
		if (skel.vars.isMobile)
			$body.addClass('is-touch');
	});

})(jQuery);
