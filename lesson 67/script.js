class Rectangle {
	constructor(width, height) {
		this.elem = document.createElement('div');

		this.elem.style.width = width + 'px';
		this.elem.style.height = height + 'px';
		this.elem.style.border = '1px solid red';
	
		document.body.appendChild(this.elem);
	}

	setWidth(width) {
		this.elem.style.width = width + 'px';
	}

	setHeight(height) {
		this.elem.style.height = height + 'px';
	}

	getWidth() {
		return this.elem.style.width;
	}

	getHeight() {
		//console.log(height);
		return this.elem.style.height;
	}

}

var elem1 = new Rectangle(100, 150);
elem1.setWidth(300);
elem1.setHeight(300);

console.log(elem1.getWidth());
console.log(elem1.getHeight());

var elem2 = new Rectangle(150, 100);