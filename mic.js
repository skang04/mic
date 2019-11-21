let mic;
let cnv;
var audiocontext;

function preload() {
    this.audiocontext = getAudioContext();
}

function setup() {
    cnv=createCanvas(600,600);
    centerCanvas();
    mic = new p5.AudioIn();
    mic.start();
}

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x,y)
}

function draw() {
    background(255);
    var vol = (mic.getLevel()*3000);
    noStroke();
    ellipse(width/2, height/2, 300,300);
    fill(255, 221-vol, 110)
    console.log(vol);
}