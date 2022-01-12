// main.js
import { Collapse } from 'bootstrap/js/dist/collapse.js'
//import { ScrollSpy } from 'bootstrap/js/dist/scrollspy.js';
/* {{ . }} */
window.addEventListener('load', function(e) {
	let navbar = document.querySelector('#page-nav');
	let carousel_element = document.getElementById('carousel');
	const masthead = document.getElementById('masthead');

	function calculateNavbarOpacity() {
		if (window.scrollY == 0 && carousel_element.scrollLeft == masthead.offsetLeft) {
			navbar.style.setProperty('background-color', 'rgba(255, 255, 255, 0.0)');
		}
		else {
			navbar.style.setProperty('background-color', 'rgba(255, 255, 255, 0.9)');
		}
	}

	calculateNavbarOpacity();
	if (carousel_element) {
		let pageX, dragging = false;

		carousel_element.scrollLeft = masthead.offsetLeft;

		carousel_element.addEventListener('mousedown', function(e) {
			dragging = true;
			pageX = e.pageX;
		});

		function dragstop(e) {
			dragging = false;
		}
		carousel_element.addEventListener('mouseup', dragstop);
		carousel_element.addEventListener('mouseleave', dragstop);

		carousel_element.addEventListener('mousemove', function(e) {
			if (dragging)
				this.scrollLeft += pageX - (pageX = e.pageX);
			
		});
		
		let run = true;
		carousel_element.addEventListener('scroll', function(e) {
			if (run && this.scrollLeft < (this.clientWidth * 1.10)) {
				this.prepend(this.lastElementChild);
				this.scrollLeft += this.firstElementChild.clientWidth;
			}
			else if (this.scrollLeft > (this.scrollWidth - this.clientWidth * 1.10)) {
				this.append(this.firstElementChild);
				this.scrollLeft -= this.lastElementChild.clientWidth;
			}
			calculateNavbarOpacity();
		});
	}

	window.addEventListener('scroll', function(e) {
		calculateNavbarOpacity();
	});

});
