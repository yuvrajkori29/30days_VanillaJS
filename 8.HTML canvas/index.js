const canvas = document.querySelector('#draw');

 const ctx = canvas.getContext('2d');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 ctx.strokeStyle = '#BADASS'; 
 ctx.lineJoin = 'round';
 ctx.lineCap = 'round';
 ctx.lineWidth =10; 

 let isDrawing = false;
let hue =0;
 let lastX =0;
 let lastY = 0;

 function draw(e){
    if(!isDrawing)
      return;
 console.log(e);

 ctx.beginPath();
 ctx.strokeStyle = `hsl(${hue},100%,50%)`;
 ctx.moveTo(lastX,lastY);
 ctx.lineTo(e.offsetX,e.offsetY);
 ctx.stroke();
 hue++;

 lastX  = e.offsetX;
 lastY = e.offsetY;
 }

 canvas.addEventListener('mousedown',(e,)=>{
  
    isDrawing = true;
    lastX  = e.offsetX;
    lastY = e.offsetY;
    hue=0;
    
 });


 canvas.addEventListener('mousemove',draw);

 canvas.addEventListener('mouseup',()=>isDrawing = false);
 canvas.addEventListener('mouseout',()=>isDrawing = false);
