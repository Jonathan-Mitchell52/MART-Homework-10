
var x = 130;
var y = 160;
var a = 220;
var b = 270;
var diameter = 50;
var Fmov = -1;
var size = 20;
var z = 20;
var c = 50;
function setup() {
  	createCanvas(400,400);
	movement = Math.floor(Math.random() *10) + 1;
	movement2 = Math.floor(Math.random() *10) +1;
}


function draw() {
	strokeWeight(2);
   	background(220);
    	rect(30,60,300,300);
	ellipse(180,210,240,275);
 	circle(x,y,diameter);
	circle(a,y,diameter);

	circle(z,c, 40); 
	
	
	triangle(165, 245, 165, 230, 190, 245);
	arc(180,270,165,70,0,PI, CHORD);
	stroke(20);
	line(180,b,180,b + 35);
	stroke(20);
	line(160,b, 160, b + 34);
	stroke(20);
	line(200,b,200,b + 34);
	stroke(20);
	line(140,270, 140, 300);
	stroke(20);
	line(220,270,220,300);
	strokeWeight(5);
	point(130,170);
	point(220,170);
	strokeWeight(1);
	textSize(10);
	text('Jonathan Mitchell', 250, 350);
	textSize(size);
	size += Fmov;
	if(size>= 32)
	{
		Fmov *= -1;
	}
	if(size <=5) 
	{
		Fmov *=-1;
	}
	text('Creative Portrait!', 10, 30);
	if(x<150)
	{
		x= x + random(-2, 2);
	}else if (x = 150)
	{
		x =120;
	}
	if(a<250)
	{
		a = a + random (-2, 2);
	} else if (x = 250)

	{
		a=220;
	}
	if (b<290)
	{
		b++;
	}else if (b=290)
	{
		b=270;
	}
	if(z >= 400 || z <= 0)
	{
		movement *= -1;
	}
	
	if(c >= 400 || c <= 0)
	{
		movement2 *= -1;
	}
	c += movement2;
	z += movement;
}