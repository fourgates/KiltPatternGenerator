var canvasWidth;
var canvasHeight;
var canvas;
var canvas2D;
var balls;
/*
 * vars added by brendan for new properties (HW1)
 */
var lineWidth = 5.0f;
var frameInterval = 33.0f;
var drawAsCircle;
var fillShape;
/*
 * end of brendan's vars
 */
function Ball(	initColor, initRadius, 
		initCenterX, initCenterY,
		initXinc, initYinc)
{
	this.color = initColor;
	this.radius = initRadius;
	this.centerX = initCenterX;
	this.centerY = initCenterY;
	this.xInc = initXinc;
	this.yInc = initYinc;
}

function init()
{
	balls = new Array();
	balls[0] = new Ball("#990099", 20,  30,  30,  10,  10);
	balls[1] = new Ball("#999900", 10, 530,  30, -10,  10);
	balls[2] = new Ball("#009999", 30, 120, 220, -10, -10);
	balls[3] = new Ball("#991122", 60, 530, 400,  10, -10);
	balls[4] = new Ball("#229911", 50, 330, 120, -10, -10);
	balls[5] = new Ball("#112299", 40, 700, 650,  10,  10);
	canvasWidth = 1280;
	canvasHeight = 720;
	canvas = document.getElementById("myCanvas");
	canvas2D = canvas.getContext("2d");
	//setInterval(step, 33);
	setInterval(step, frameInterval);
}

function update()
{
	for (var i = 0; i < balls.length; i++)
	{
		var ball = balls[i];
		ball.centerX += ball.xInc;
		ball.centerY += ball.yInc;
		if ((ball.centerX - ball.radius) <= 0) ball.xInc *= -1;
		if ((ball.centerX + ball.radius) >= canvasWidth) ball.xInc *= -1;
		if ((ball.centerY - ball.radius) <= 0) ball.yInc *= -1;
		if ((ball.centerY + ball.radius) >= canvasHeight) ball.yInc *= -1;
	}
}

function render()
{
	for (var i = 0; i < balls.length; i++)
	{
		var ball = balls[i];
		canvas2D.strokeStyle = ball.color;
		canvas2D.beginPath();  
		canvas2D.arc(ball.centerX,ball.centerY,ball.radius,0,2*Math.PI);
		canvas2D.stroke();
	}
}

/*
 * Function to increase the speed of the rendering -Brendan
 */
function increaseSpeed()
{
	if(frameInterval<0) frameInterval= 0;
	else frameInterval -= .5f;
}
/*
 * Function to decrease the speed of the rendering -Brendan
 */
function decreaseSpeed()
{
	if(frameInterval>100.0f) frameInterval = 100.0f;
	else frameInterval += .5f;
}
function step()
{
	update();
	render();
}