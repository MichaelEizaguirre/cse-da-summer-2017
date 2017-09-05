var leftpaddle;
var leftpaddle_x, leftpaddle_y;
var rightpaddle;
var rightpaddle_x, rightpaddle_y;
var ball;
var ball_x, ball_y;
var score;
var direction_x, direction_y;

function setup(){
  createCanvas(800, 400);
  ball_x = 725;
  ball_y = random(400);
  leftpaddle_x = 10;
  leftpaddle_y = height-120;
  rightpaddle_x = 780;
  rightpaddle_y = height-120;
  score = 0;
  direction_x = -3
  direction_y = -3
}

function draw(){
  
  background(0,0,0);
  dots();
  paddles();
  ball();
  moveLeftpaddle();
  moveRightpaddle();
  moveBall();
  touch();
  Rtouch();
  scores();
  
}

function paddles() {
  
  fill(255, 255, 255);
  rect(leftpaddle_x, leftpaddle_y, 10, 50)
  rect(rightpaddle_x,rightpaddle_y, 10, 50)
}

function moveLeftpaddle() {
  
 if(keyIsDown(UP_ARROW) && leftpaddle_y > 0)
    leftpaddle_y -= 3;
  if(keyIsDown(DOWN_ARROW) && leftpaddle_y < height-55)
    leftpaddle_y += 3;
}

function moveRightpaddle() {
  
 if(keyIsDown(UP_ARROW) && rightpaddle_y > 0)
    rightpaddle_y -= 3;
  if(keyIsDown(DOWN_ARROW) && rightpaddle_y < height-55)
    rightpaddle_y += 3;
}

function ball() {
  fill(255,255,255);
  ellipse(ball_x, ball_y , 10 , 10 )
}

function ballposition() { //
  {
    direction_x = direction_x * -1;

  }
      
}
function ballpositionY() {
  direction_y = direction_y * -1;
  
}


function moveBall() {
  if(ball_x <= 0 ) {
    print('works');
    ball_y = (200);
    ball_x = (400);
    score = 0;
  }
    else if(ball_x >=  800 ) {
    print('works');
     ball_x = (400);
     ball_y = (200);
     score = 0;
  }  
  if(ball_y <= 0 ) {
    print('works');
    ball_x += 2;
    ball_y += 2;
    ballpositionY();
  }
    else if(ball_y >=  400 ) {
    print('works');
    ball_x += -2;
    ball_y += -2;
    ballpositionY();
}
  else {
    ball_x += direction_x;
    ball_y += direction_y;
  }
  

}

function touch() {
 /* print("ball " + ball_x + " " + ball_y);
  print("paddle " + leftpaddle_x + " " + leftpaddle_y);
  */
  if (ball_x <= leftpaddle_x + 10 &&
      ball_y >= leftpaddle_y &&
      ball_y <= leftpaddle_y + 50) {
    score += 1;
    print('good');
    ballposition();

}
}
function Rtouch(){
 if (ball_x >= rightpaddle_x &&
     ball_y >= rightpaddle_y &&
     ball_y <= rightpaddle_y + 50){
  score += 1;
  print('good');
  ballposition();
}
}
function scores() {
  fill(255,255,255);
  textSize(50);
  text(score,30,60);
  print(score);
  
}
function dots() {
  fill(255,255,255);
  rect(400,10,10,30);
  fill(255,255,255);
  rect(400,50,10,30);
  fill(255,255,255);
  rect(400,90,10,30);
  fill(255,255,255);
  rect(400,130,10,30);
  fill(255,255,255);
  rect(400,170,10,30);
  fill(255,255,255);
  rect(400,210,10,30);
  fill(255,255,255);
  rect(400,250,10,30);
  fill(255,255,255);
  rect(400,290,10,30);
  fill(255,255,255);
  rect(400,330,10,30);
  fill(255,255,255);
  rect(400,370,10,30);
}