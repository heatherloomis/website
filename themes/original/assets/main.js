// main.js
import { Collapse } from './themes/original/node_modules/bootstrap/js/dist/collapse.js'
//import { ScrollSpy } from 'bootstrap/js/dist/scrollspy.js';
/* {{ . }} */
window.addEventListener('load', function(e) {
	let carousel_element = document.getElementById('carousel');
	if (carousel_element) {
		let pageX, dragging = false;

		carousel_element.scrollLeft = carousel_element.scrollWidth / 2;
		//carousel_element.scrollLeft = 3000;
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

//	const parallaxes = document.querySelectorAll('.parallax');
//	for (let i=0;i<parallaxes.length;i++) {
//		let element = parallaxes[i];
//		const src = element.getAttribute('data-src');
//		element.style['background-image'] = 'url("'+src+'")';
//	}
	let navbar = document.querySelector('#page-nav');
	window.addEventListener('scroll', function(e) {
		if (window.scrollY > 100)
			return;

		const alpha = window.scrollY * 0.01;
		navbar.style.setProperty('background-color', 'rgba(255, 255, 255, '+alpha+')');
	});
//	window.addEventListener('scroll', function(e) {
//		const parallaxes = document.querySelectorAll('.parallax');
//		for (let i=0;i<parallaxes.length;i++) {
//			const css = '0px '+(0.25 * document.scrollTop)+'px';
//			parallaxes[i].style['background-position'] = css;
//			//console.log(this.scrollTop);
//		}
//	});
});
