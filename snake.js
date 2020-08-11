//implementing Game Loop
function init(){
    var canvas = document.getElementById('myCanvas')
    W = H = canvas.width = canvas.height = 700;
    pen = canvas.getContext('2d')
    cs = 40; //cell size
    
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
        },
        updateSnake : function (){
            //for movement
            this.cells.pop() //removing last cell
            var headX = this.cells[0].x; // getting head cell x -axis
            var headY = this.cells[0].y; // getting head cell y -axis
            this.cells.unshift({x:headX+1 , y :headY}) // adding an cell with postined at x+1 before head 
        }

    }
    //creating the snake in init()
    snake.createSnake();
}

function draw(){
   //if snake reaches boundaries alert and stop interval
   if(snake.cells[0].x * cs>= W || snake.cells[0].y >= H || snake.cells[0].x == 0 ){
       alert("Game Over")
       clearInterval(f);
   }
   //else do the below
   //drawing the snake on screen
   //clear the previous window
   pen.clearRect(0,0,W,H) 
   snake.drawSnake()

}

function update(){
        snake.updateSnake()
}

function gameLoop() {
    draw();
    update();
}

init();

f = setInterval(gameLoop, 100)