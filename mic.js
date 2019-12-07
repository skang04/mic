let mic;
let cnv;
let mountain;
let sensitive = 7;
var touchStarted;


function setup() {
    cnv = createCanvas(1, 1);
   cnv.position(100,1);
    mic = new p5.AudioIn();
    mic.start();
    mountain = select('.mountain');

}

function draw() {
    background('#053030');
    let vol = (mic.getLevel() * 3000);

    if (vol > 100) {
        sensitive= sensitive +2;
    } else {
        sensitive= sensitive - 2;
    } 

    if (sensitive < 7) {
        sensitive = 7;
    }


    mountain.style('fill', 'rgb(' + sensitive + ', 71, 53');
    console.log(sensitive);
}

function touchStarted() {
    getAudioContext().resume();
}