// menyiapkan canvas
const mycanvas = document.getElementById('mycanvas');

//atur ukuran canvasnya
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

//tentukan context 
const c = mycanvas.getContext('2d');

// manipulasi canvas

//membuat rectangle
c.fillStyle = 'red';
c.strokeStyle = 'black';
c.lineWidth = '5';

c.rect(50, 50, 300,300);
c.fill();
c.stroke();

// membuat lingkaran 