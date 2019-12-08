let mic;
let cnv;
let mountain;
let sun;
let ground;
let sensitive = 7;
let illustration;
let fire;
let backgrounds;


function setup() {
    cnv = createCanvas(1, 1);
   cnv.position(100,1);
    mic = new p5.AudioIn();
    mic.start();

    mountain = select('.mountain');
    sun = select('.sun');
    ground = select('.ground');
    illustration = select('.illustration');
    fire = select('.fire-illustration');
    backgrounds = select('body');
}

function draw() {
    getAudioContext().resume();
    background('#053030');
    let vol = (mic.getLevel() * 3000);

    if (vol > 20) {
        sensitive= sensitive +2;
    } 
    else {
        sensitive= sensitive - 2;
    } 

    if (sensitive < 10) {
        sensitive = 10;
    } else if (sensitive > 350) {
        sensitive = 350;
    } 


    mountain.style('fill', 'rgb(' + sensitive + ', 71, 53');
    ground.style('fill', 'rgb(' + sensitive + ', 127,86');
    sun.style('fill', 'rgb(255,198,' + sensitive);

    if (sensitive > 230) {
        illustration.style('display', 'none');
        fire.style('display', 'block');
        backgrounds.style('background-color','#232323')

    } else {
        illustration.style('display', 'block');
        fire.style('display', 'none')
        backgrounds.style('background-color', '#053030')
    }

    console.log(sensitive);
}
