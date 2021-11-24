<canvas id="rityta"></canvas>
var rityta = document.getElementById("rityta");
rityta.width = 500;
rityta.height = 300;
rityta.style.border = "solid 1px #000";

var ctx = rityta.getContext("2d");

var x = 12; 
var y = 150;
var speedX = 4;
var speedY = 2;
var radie = 10;
var yPos = 100; 
var points = 0; 

function animation() {
ctx.clearRect(0,0,rityta.width, rityta.height); 
var hinderLocationX = rityta.width - 40; 
var hinderWidth = 10 
ctx.fillRect(hinderLocationX,yPos,hinderWidth,100);


ctx.beginPath();
ctx.arc(x,y,radie,1,5*Math.PI,false); 
ctx.fill(); 

x += speedX;
y += speedY;


if (x >= rityta.width-radie || x <= radie) {
    if (x <= radie)
        points++;
        
    else {
         resetGame(points);
}
    

    speedX = -speedX;
}

if (y > rityta.height - radie || y < radie) {
    speedY = -speedY;
}


if ((x >= hinderLocationX-hinderWidth && x < hinderLocationX) && (y > yPos && y < (yPos+100))) {
        speedX = -speedX;
}


if ((x <= hinderLocationX+hinderWidth && x > hinderLocationX) && (y > yPos && y < (yPos+100))) {
        speedX = -speedX;
}
requestAnimationFrame(animation);
}

animation();

var arrow = window.addEventListener("keydown",function() {
var kc=event.keyCode; 
if (kc==38) goUp();
if (kc==40) goDown();
}, false);




function goUp() {
if (yPos > 0) yPos -= 4; 
}

function goDown() {
if (yPos < 200) yPos += 4; 
}

function resetGame(slutresultat) {
alert(`Game Over\nDitt resultat blev: ${slutresultat} :)\nTryck OK för att starta ett nytt spel`);
x = 12;
y = 150;
yPos = 100;
points = -1;
}