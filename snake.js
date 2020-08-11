//implementing Game Loop
function init(){
    var canvas = document.getElementById('myCanvas')
    W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d')
    cs = 50; //cell size
    
    //Creating snake object
    snake = {
        init_len :3,
        color:"green",
        cells :[],
        
        createSnake : function (){
            for(var i =this.init_len; i>0 ; i--){
                this.cells.push({x:i , y:0})
            }
        
        },

        drawSnake : function () {
                for (var i = 0; i < this.cells.length; i++) {
                    pen.fillStyle = this.color
                    pen.fillRect(this.cells[i].x *cs , this.cells[i].y *cs , cs-3 , cs-3);
                }
        }

    }
    //creating the snake in init()
    snake.createSnake();
}

function draw(){
   //drawing the snake on screen
    snake.drawSnake()
}

function update(){

}

function gameLoop() {
    draw();
    update();
}

init();

setInterval(gameLoop, 100)