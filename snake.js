//implementing Game Loop
function init(){
    var canvas = document.getElementById('myCanvas')
    W = H = canvas.width = canvas.height = 700;
    pen = canvas.getContext('2d')
    cs = 40; //cell size
    food = getRandomFood()
    self_touch = false;
    game_over = false;
    score = 3    
    //creating an img object
    food_img = new Image();
    food_img.src = "assets/apple.png"

    //creating an trophy
     trophy = new Image()
     trophy.src = "assets/trophy.png"

    //Creating refernce for audio
    eat = document.getElementById("eatMp3")
    hit = document.getElementById("hitMp3")
   
    //Creating snake object
    snake = {
        init_len :3,
        color:"white",
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
            
            var headX = this.cells[0].x; // gets current head cell x -axis
            var headY = this.cells[0].y; // gets current head cell y -axis


            //check if the snake has eaten , increase the length of the snake and 
            //generate food
            if(headX == food.x && headY == food.y){
                eat.play();
                food = getRandomFood()
                score++;

            }
             else{
                this.cells.pop() //removing last cell
            }
        
            var nextX  
            var nextY
            //for movement according to direction
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
        
            //if snake reaches boundaries alert and stop interval
            last_x = Math.round(W/cs); // (total width / cell size) = gives the number of rows which will also be a last row
            last_y = Math.round(H/cs) 
            if(this.cells[0].x < 0  || this.cells[0].y < 0 || this.cells[0].x > last_x || this.cells[0].y > last_y){
                hit.play();    
                game_over = true;
            }
        
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
    //adding an eventlistener  to direction of the snake
    document.addEventListener('keydown' ,keyPressed)
    //creating the snake
    snake.createSnake();
    
}

// generating food randomly on screen
function getRandomFood() {
    var foodX = Math.round(Math.random()*(W-cs)/cs) 
    var foodY = Math.round(Math.random()*(H-cs)/cs)

   var food = {
        x : foodX,
        y : foodY,
        color:"green"
    }

    return food
}

function checkTouched(){
        self_touch = true;
    }


function draw(){
   // clear the previous whole window frame and draw the snake on screen
   pen.clearRect(0,0,W,H) 
   snake.drawSnake()
    //drawing the food 
    pen.fillStyle = food.color;
    //pen.fillRect(food.x*cs , food.y*cs ,cs ,cs)
    //for image
    pen.drawImage(food_img, food.x*cs, food.y*cs,cs,cs);
    
    pen.drawImage(trophy ,35,30 ,cs,cs)

    pen.fillStyle = "black"
    pen.font = "15px Roboto";
    pen.fillText(score, 50 ,50)
 
   
}

function update(){
    snake.updateSnake()
}

function gameLoop() {
    if(game_over == true || self_touch == true){
        clearInterval(f);
        alert("Game Over")
        return;
    }
    draw();
    update();
}

init();

f = setInterval(gameLoop, 100)