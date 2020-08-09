var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext('2d');

//sets  the bg-color of the drawings
pen.fillStyle = "#000fea";

//places the rectangle in (x-axis , y-axis ,width , height)
pen.fillRect(20,20,200, 200)

//places the circle positioned at (x-axis , y-axis ,radius, startAngle , endAngle)
pen.arc(600,300,50,0,2*Math.PI);

//sets the border color
pen.strokeStyle = "red";

//displays the circle
pen.stroke();

//fills all the objects with the color it is set in fillStyle
pen.fill();