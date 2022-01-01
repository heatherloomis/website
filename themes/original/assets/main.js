// main.js
import { Collapse } from './themes/original/node_modules/bootstrap/js/dist/collapse.js'
//import { ScrollSpy } from 'bootstrap/js/dist/scrollspy.js';
/* {{ . }} */
window.addEventListener('load', function(e) {
	let navbar = document.querySelector('#page-nav');
	function calculateNavbarOpacity() {
		if (window.scrollY == 0) {
			navbar.style.setProperty('background-color', 'rgba(255, 255, 255, 0.0)');
		}
		else {
			navbar.style.setProperty('background-color', 'rgba(255, 255, 255, 1.0)');
		}
	}

	calculateNavbarOpacity();

	let carousel_element = document.getElementById('carousel');
	if (carousel_element) {
		let pageX, dragging = false;

		const masthead = document.getElementById('masthead');
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
		});
	}

	window.addEventListener('scroll', function(e) {
		calculateNavbarOpacity();
//		let alpha = 1.0;
//		if (window.scrollY < 100) {
//			alpha = window.scrollY * 0.01;
//		}
//		navbar.style.setProperty('background-color', 'rgba(255, 255, 255, '+alpha+')');
	});

});
