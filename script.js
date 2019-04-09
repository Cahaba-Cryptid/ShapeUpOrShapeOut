const maxVal = 600;
let canvas = document.getElementById('canvas');
let newRec = document.getElementById('newRec');
let newSq = document.getElementById('newSq');
let newCirc = document.getElementById('newCirc');
let newTri = document.getElementById('newTri');
let pName = document.getElementById('shape-name');
let pWidth = document.getElementById('shape-width');
let pHeight = document.getElementById('shape-height');
let pRadius = document.getElementById('shape-radius');
let pArea = document.getElementById('shape-area');
let pPeremiter = document.getElementById('shape-perimeter');
let infoBar = document.getElementById('info-sidebar');



const randomVal = (min, max) => Math.floor(Math.random() * (max - min));


class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add("shape");
        canvas.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.describe();
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            pName.innerText = '';
        pWidth.innerText = '';
        pHeight.innerText = '';
        pRadius.innerText = '';
        pArea.innerText = '';
        pPeremiter.innerText = '';

        })
    }
    position() {
        let x = randomVal(this.width, maxVal);
        let y = randomVal(this.height, maxVal);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }
    describe() {
        pName.append(this.name);
        pWidth.append(this.width || this.sideLength || '');
        pHeight.append(this.height || this.sideLength || '');
        pRadius.append(this.radius || '');
        pArea.append(this.area);
        pPeremiter.append(this.perimiter || '');

    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.name = 'rectangle';
        this.div.classList.add(this.name);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.area = this.width * this.height;
        this.perimiter = 2 * this.width + 2 * this.height;
        this.div.style.backgroundColor = 'green';
        this.position();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
        this.name = 'square';
        this.div.classList.add(this.name)
        this.div.style.height = `${this.sideLength}px`;
        this.div.style.width = `${this.sideLength}px`;
        this.area = this.width * this.height;
        this.perimiter = 2 * this.width + 2 * this.height;
        this.div.style.backgroundColor = 'red'
        this.sqPosition();
    }
    sqPosition() {
        let x = randomVal(this.sideLength, maxVal);
        let y = randomVal(this.sideLength, maxVal);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.name = 'circle';
        this.div.classList.add(this.name);
        this.div.style.height = `${this.radius}px`;
        this.div.style.width = `${this.radius}px`;
        this.area = Math.PI * this.radius * this.radius;
        this.perimiter = 2 * Math.PI * this.radius;
        this.div.style.backgroundColor = 'purple';
        this.cirPosition();

    }
    cirPosition() {
        let x = randomVal(this.radius, maxVal);
        let y = randomVal(this.radius, maxVal);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
    }
}

class Triangle extends Shape {
    constructor(triHeight) {
        super(triHeight, triHeight)
        this.name = 'triangle';
        this.div.classList.add(this.name);
        this.div.style.height = 0;
        this.div.style.width = 0;
        this.area = 0.5 * this.height * this.height;
        this.perimiter = 2 * this.height + Math.sqrt(2) * this.height;
        this.div.style.borderBottom = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.position();
    }
}

newRec.addEventListener('click', () => {
    let rHeight = document.getElementById('rec-height').value;
    let rWidth = document.getElementById('rec-width').value;
    new Rectangle(rHeight, rWidth);
});

newSq.addEventListener('click', () => {
    let sqSideLength = document.getElementById('sq-side-length').value;
    new Square(sqSideLength);
})

newCirc.addEventListener('click', () => {
    let circRadius = document.getElementById('circle-radius').value;
    new Circle(circRadius);
})

newTri.addEventListener('click', () => {
    let triHeight = document.getElementById('new-tri').value;
    new Triangle(triHeight);
})



