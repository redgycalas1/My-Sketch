var yPos = 0;
var StageColor = "#CED62F";
var diam1 = 100

function setup() {
  // put setup code here
   createCanvas(600,600);
    
}

function draw() {
 // put drawing code here
    background(StageColor);
    fill("#FF0000");
    stroke("#0000FF");
    strokeWeight(10);
    line(0, yPos, 200, yPos);
    ellipse(300, yPos, diam1, diam1);
    // if circle goes to bottom of canvas set to 0
    if (yPos > 600){
        yPos = 0;
        diam1 = 100
    }
    yPos = yPos + 5;
    diam1= diam1 + 1
    //style our text
    noStroke();
    textSize(48);
    textAlign(CENTER);
    textFont("Georgia");
    text("Hello World", mouseX, mouseY);
    
}
function mousePressed(){
    if(StageColor= "#CED62F"){
    stageColor = "#b222f0";
    } else { 
    stageColor = "#CED62F";
    }
}