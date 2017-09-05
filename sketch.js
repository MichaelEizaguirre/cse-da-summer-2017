var circleX = 240;
var circleDX = 1;
var bgColor = 255;
var eye = (255,255,255);
var asleep = (0,0,0);
var alive = (255, 255,255);
function setup() {
  createCanvas(600,500)
  a = color(100, 100, 100, 255); // grey
  g = color(110, 110, 110,255); // light grey

  
}
 //wheels
function draw() {
  
 backgrounds();
 clouds();
  wheels();
  body();
  head();
  aroundeye();
  eyes();
  rightarm();
  leftarm();
  muscle();
  trangle();
  mouseball();
  ey();
  
 //moving ball
 /*ellipse(circleX, 120, 10,10);
 circleX = circleX + circleDX ;
 */
/* if (circleX >= 500) { circleDX = -circleDX;
*/
 
  hill(-100, 600, 400, 500);
  hill(100, 600, 700, 600);
  hill(0, 600, 600, 400);
}
 function clouds() {
  fill(255,255,255);
  ellipse(30,30,50,15);
  ellipse(50, 40,50, 15)
  ellipse(60, 45, 50, 15);
  ellipse(200, 60, 60, 20);
  ellipse(220, 60, 80, 30);
  ellipse(500, 90, 100,50);
 }
  function hill(x,y,w,h){
  fill(color(0,255,0));
  arc(x+(w/2),y,w,h,PI,0,PIE)
}
 function body() {  
  fill(bgColor);
  ellipse(240, 289, 100, 150);
 }
 function head() {
  fill(bgColor);
  ellipse(240, 180, 60, 80);
 }
 function aroundeye() {
  fill(255,80, 80);
  ellipse(240, 180, 30, 40);
 }
 function eyes() {
  fill(eye);
  ellipse(240, 185, 20, 20);
 }
 function rightarm() {
  fill(bgColor);
  noStroke(280,250,45,10);
  rect(280, 250, 45 , 10);
  rect(320, 215, 10, 45);
 }
 function leftarm(){
  fill(bgColor);
  rect(150, 250, 45, 10)
 }
 function muscle(){
  fill(bgColor);
  ellipse(300, 250 , 25 ,17);
  noStroke();
 }
 function trangle(){
  fill(bgColor);
  triangle(250,300,250, 250 ,230,300);
 }
 function mouseball(){
  fill(110,110,110,255);
  ellipse(mouseX, mouseY, 10,10);
 }
 function wheels(){
  fill(bgColor);
  ellipse(190, 370, 60, 60);
  ellipse(290, 370, 60, 60);
 }
 function backgrounds(){
  background(0,255,255);
 }
 function keyPressed() {
  bgColor = color(random(256), random(256), random(256));
 }
 function ey() {
   if (mouseIsPressed){
      alive = asleep;}
     
   else {
      eye = alive;
   print(mouseIsPressed);
 }

 }
  /*function draw(){
    if (keyIsPressed)
     eye = (0,0,0);
} */