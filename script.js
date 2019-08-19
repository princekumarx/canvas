 let canvas = document.querySelector('canvas');

 canvas.width = window.innerWidth;
 canvas.height =  window.innerHeight;

 var c = canvas.getContext('2d');

 //rectangle
// c.fillStyle='rgba(255,0,0,0.3)';
//  c.fillRect(100,10,100,100);
//  c.fillStyle = 'rgba(0,0,255,0.3)';
//  c.fillRect(200,50,100,100);
//  c.fillStyle = 'rgba(0,255,0,0.4)';
//  c.fillRect(300,100,100,100);
 

 console.log(canvas);


 //line 
// c.beginPath();
//  c.moveTo(10,400);
//  c.lineTo(600,200);
//  c.lineTo(600,400);
//  c.lineTo(10,400);
// c.strokeStyle="rgb(255,150,150)";

//  c.stroke();

//arc .circle
// c.beginPath();
// c.arc(350,350,30,0,7);
// c.strokeStyle = 'blue';
//  c.stroke();

// for(let i = 0; i< 100; i++){
//     let x = Math.random() * window.innerWidth ;
//     let y = Math.random() * window.innerHeight   ;

// // c.beginPath();
// //  c.moveTo(400,500);
// //  c.lineTo(x,y);
// // c.stroke();

// // c.beginPath();
// // c.arc(x ,y ,30,0,7,false);
// // c.strokeStyle = 'rgb('+ Math.random() * x +','  + Math.random() * y + ',' + Math.random() * y+ ')';
// // c.stroke();

 
    
// // }
//  c.beginPath();
// c.shadowColor = "black";
// c.shadowBlur = 20;
// c.fillStyle = "red";
// c.shadowOffsetX = 20;
// c.lineWidth = 5;
// c.strokeStyle = 'blue';
//  c.fillRect(30,40,200,200);
//   c.clearRect(50,60,50,50)
 
// c.beginPath();
//  var grd = c.createLinearGradient(0,0,100,0);
//     grd.addColorStop(0,'black');
//     grd.addColorStop(0.5,'white');
    

//     c.fillStyle = grd;

//     c.fillRect(200,200,100,100);

//     c.beginPath();
//     c.shadowColor = "red";
// c.shadowBlur = 20;
//     c.lineCap = "round";
//     c.lineJoin = "bevel";
//     c.miterLimit = 5;
//     c.lineWidth= 10;
//     c.moveTo(20,20);
//     c.lineTo(200,50);
//     c.lineTo(20,100);
//     c.stroke();


//     c.beginPath();
//     c.font ="30px  Comic Sans MS black";
//     c.fillStyle = "blue";
//     c.textAlign = "center";
//     c.fillText('hellow world',canvas.width / 2,200);

// c.beginPath();
// c.font = "10px "
// c.strokeStyle ='black';
// c.textAlign = "center";
// c.lineWidth = "2"
//     c.strokeText('prince',canvas.width / 2, canvas.width / 2);
var mouse ={
  x:undefined,
  y:undefined
}

var maxRadius = 40;
 
let colorArray = [
  '#ffaa33',
  '#99ffaa',
  '#00ff00',
  '#4411aa',
  '#ff1100'

];

window.addEventListener('mousemove',function(e){
  mouse.x = e.x;
  mouse.y = e.y;
 })

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
 canvas.height =  window.innerHeight;
 init();
})
 
function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
   this.color =  colorArray[Math.floor(Math.random() * colorArray.length)];
   this.color2  =  'rgb('+ Math.random() * 255 +','+Math.random() * 255+','+ Math.random() * 255 +')';

  this.draw = function(){
    c.beginPath();
    c.strokeStyle = "blue";

    c.arc(this.x,this.y,this.radius,0,Math.PI * 2);
    c.fillStyle = this.color2;
    c.fill();                  
  }

  this.update = function(){
    if( this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
      
    console.log('dfjf')
    }
    
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    
    //interactivity

if(mouse.x - this.x < 50  && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
  if(this.radius < maxRadius){
    this.radius += 2;

  }
}
else if(this.radius > this.minRadius){
  this.radius -= 1;
}

      this.x += this.dx;
      this.y += this.dy;
    
    this.draw();
  }

}




let newArray = [];
const init = ()=>

{
  newArray= [];
  for(var i = 0; i<800; i++){
  let radius = Math.random() * 3 + 1;
  let x = Math.random() * (innerWidth - radius * 3) + radius;
let y =Math.random() * (innerHeight - radius * 3) + radius;
 let dx = (Math.random() - 0.5); 
 let dy = (Math.random() - 0.5);
  newArray.push(new Circle(x,y,dx,dy,radius));

 
}
}
init();
 



const animate = () => {
requestAnimationFrame(animate);



c.clearRect(0,0,innerWidth,innerHeight);

 for(var i =0; i < newArray.length;i++){

  newArray[i].update();


 }
 




 }

animate();

