var canvas = document.getElementById("myCanvas");
canvas.width = 700;
canvas.height = 700;

var pen = canvas.getContext('2d');

//creating a rect object
rect = {
    x:200,
    y:200,
    h:200,
    w:200
}

//circle in stroke style
//left man eye

pen.strokeStyle = "black"
pen.arc(270 ,140 , 7 ,0 , 2*Math.PI)
//pen.stroke()

//circle in fill mode
pen.fillStyle = "black";
pen.arc(315 ,140 , 7 ,0 , 2*Math.PI)
pen.fill()

//rectangle in stroke style
//man head
pen.strokeStyle = "black";
pen.strokeRect(rect.x , rect.y , rect.w , rect.h);

//man stomatch
pen.strokeStyle = "black"
pen.strokeRect(250 , 100 , 100 , 100)

//rectangle in fill mode
//left leg 
pen.fillStyle = "black"
pen.fillRect(260 , 400 , 10 , 100)

//right leg 
pen.fillStyle = "black"
pen.fillRect(340 , 400 , 10 , 100)

