//implementing Game Loop
function init(){
    var canvas = document.getElementById('myCanvas')
    W = H = canvas.width = canvas.height = 700;
    pen = canvas.getContext('2d')
    cs = 40; //cell size
    
    //Creating snake object
    snake = {
        init_len :3,
        color:"orange",
        cells :[],
        direction : "right",

        createSnake : function (){
            for(var i =this.init_len; i>0 ; i--){
                this.cells.push({x:i , y:0})
            }
        
        },

        drawSnake : function () {
                for (var i = 0; i < this.cells.length; i++) {
                    pen.fillStyle = snake.color
                    pen.fillRect(this.cells[i].x*cs , this.cells[i].y*cs , cs-3 , cs-3);
                }
        },
        
        updateSnake : function (){
            //for movement accordind to direction
            this.cells.pop() //removing last cell
            
            var headX = this.cells[0].x; // gets current head cell x -axis
            var headY = this.cells[0].y; // gets current head cell y -axis
            var nextX  
            var nextY
            
            if(this.direction == "right"){
                nextX = headX +1; 
                nextY = headY;
                       
            } 
            else if(this.direction == "left"){
                nextX = headX -1;
                nextY = headY;

            } 
            else if(this.direction == "down"){
                nextX = headX;
                nextY = headY +1;
            }
            else{
                    nextX = headX;
                    nextY = headY -1;
            }

            this.cells.unshift({x:nextX , y :nextY}) // adds a new head : adding an cell based on snake direction
        }

    }

    function keyPressed(e) {
        if(e.key  == "ArrowDown"){
            snake.direction = "down"
        }
        else if(e.key == "ArrowUp"){
            snake.direction = "up"
        }
        else if(e.key == "ArrowLeft"){
            snake.direction = "left"
        }
        else{
            snake.direction = "right"
        }
        console.log(snake.direction)
    }
    //adding an eventlistener
    document.addEventListener('keydown' ,keyPressed)
    //creating the snake
    snake.createSnake();
    
}

function draw(){
   //if snake reaches boundaries alert and stop interval
   if(snake.cells[0].x * cs>= W || snake.cells[0].y*cs >= H || snake.cells[0].x*cs == 0 || snake.cells[0].y*cs < 0){
       alert("Game Over")
       clearInterval(f);
   }
   // else clear the previous whole window frame and draw the snake on screen
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