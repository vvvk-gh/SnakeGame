//implementing Game Loop
//using 3 methods 
//init , draw , update :  init runs only once but draw and update has to run constantly

//init : intializes all the code 
function init(){
canvas = document.getElementById("myCanvas");
W = canvas.width = 700;
H = canvas.height = 300;
pen = canvas.getContext('2d');

rect = {
    x : 10,
    y : 10,
    w : 40,
    h : 40,
    speed : 10
}


}

//draw
function draw(){
    pen.clearRect(0,0, W, H)
    pen.fillStyle ="red"
    pen.fillRect(rect.x , rect.y ,rect.w , rect.h)
}

//update
function update(){
    
    if(rect.x > W-40 || rect.x < 0){
        console.log("reversed")
        rect.speed *= -1;
    }
    rect.x += rect.speed
}

//gameLoop
function gameLoop (){
    draw();
    update();
}

//calling init
init();
//Calling Game Loop
setInterval(gameLoop , 100)