var bgColor = 255;


function setup() {
  
  
  createCanvas(600,500)
 /* r = random(256);
  g = random(256);
  b = random(256);
  */
}


 //wheels
function draw() {
  background(255);
  hill(-100, 600,400,500);
  hill(100,600, 700, 600);
  hill(0, 600, 600, 400);
  
  function hill(x,y,w,h) {
    fill(color(0, 255, 0));
    arc(x+(w/2),y,w,h, PI, 0 ,PIE);
 }

  translate(mouseX - 250 , mouseY - 300);
  
  background(bgColor);
  
  a = color(100, 100, 100, 255); // grey
  g = color(110, 110, 110,255); // light grey
  var circleX = 240;
  var circleDX = 1;
  
  fill(a);
  ellipse(190, 370, 60, 60);
  ellipse(290, 370, 60, 60);
  
  //body
  fill(g);
  ellipse(240, 289, 100, 150);
  
  //head 
  fill(0,0,0);
  ellipse(240, 180, 60, 80);
  
  //around eye
  fill(255,80, 80);
  ellipse(240, 180, 30, 40);
  
  //eye
  fill(random(255),random(255),random(255));
  ellipse(240, 185, 20, 20);
  
  // right arm
  fill(a);
  noStroke(280,250,45,10);
  rect(280, 250, 45 , 10);
  rect(320, 215, 10, 45);
  
  // left arm
  fill(a, 255);
  rect(150, 250, 45, 10)
  
  //muscle
  fill(a);
  ellipse(300, 250 , 25 ,17);
  noStroke();
  //triangle
  fill(120,120,120,255);
  triangle(250,300,250, 250 ,230,300);
  //little mouse ball
  fill(110,110,110,255);
  ellipse(mouseX, mouseY, 10,10);
/* //moving ball
 ellipse(circleX, 120, 10,10);
 circleX = circleX + circleDX ;
 if (circleX >= 500) { circleDX = -circleDX;
}
*/
if (keyIsDown(RETURN)){
   bgColor = color(random(256), random(256), random(256));
 }
}

  




 // bgColor = color(random(256), random(256), random(256));
//}