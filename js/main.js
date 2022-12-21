let canvas = document.createElement('canvas');
canvas.setAttribute("id", "bg");
//canvas.setAttribute = "id:"
//let canvas = document.getElementById('bg');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const SNOW_COLOR = "rgba(235,235,235,0.8)";
const BACKGROUND_COLOR = "#1c0030";

let ctx = canvas.getContext('2d');

let start = null;

let particles = [];
const PI_2 = 2 * Math.PI;

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;
}

let body = document.getElementsByTagName('body')[0];

body.appendChild(canvas);

window.onresize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight; 
}
window.onscroll = () => {
    canvas.setAttribute("style", "top: " + window.pageYOffset + "px");
}


function step(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!start) start = timestamp;
    let progress = timestamp - start;

    particles.forEach(element => {
        element.draw();
    });

    spawnParticles(4);

    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

const Particle = function(x, y, color)
{
    let particle = {};
    particle.x = x;
    particle.y = y;
    Intl  = 2 + (Math.random()*200);
    Int2  = 2 + (Math.random()*5);
    Int3 = 2 + (Math.random()*5);
    particle.dy = 2 + (Math.random()*5);
    particle.dx = -2 + (Math.random()*5);
    particle.color = "rgba(247, 186, 238,0.8)";
    particle.size = 1 + Math.floor(Math.random()*32);
    particle.draw = function()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, PI_2, false);

        ctx.fillStyle = this.color;
        
        ctx.fill();
        particle.update();
    }
    particle.update = function()
    {
      this.y += this.dy;
      this.x += this.dx;
    }

    return particle;
}

function spawnParticles(amount) {
    for(let i = 0; i < amount; i++) {
        particles.push(Particle(randomInt(0, canvas.width), 0, 'rgba(247, 186, 238, 0.8)'));
    }
}