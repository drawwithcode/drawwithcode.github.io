var particles = [];

function setup() {
	// put setup code here
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('background');
	for(var i = 0; i<200; i++) {
		var np = new Particle();
		np.velocity = random(1,30);
		np.rotation = random(0,360);
		np.radius = random(10,50);
		np.color = color(random(0,15))
		var minSize = windowWidth > windowHeight ? windowWidth : windowHeight;
		np.orbitRadius = i * minSize/200;
		//np.orbitRadius = random(10,windowWidth > windowHeight ? windowWidth : windowHeight);
		particles.push(np);
	}
}

function draw() {
	// put drawing code here
	background(20)
	//
	particles.forEach(function(e) {
		e.draw()
	});
	// filter(BLUR, 2);
}

function Particle() {
	this.velocity = 1;
	this.orbitRadius = 50;
	this.radius = 5;
	this.color = color(200)
	this.rotation = 0; //in dregrees

	this.draw =function(){
		push();
		translate(windowWidth/2, windowHeight/2)
		noStroke();
		fill(this.color)
		angleMode(DEGREES);
		rotate(this.rotation);
		ellipse(this.orbitRadius, 0, this.radius*2, this.radius*2);
		pop();
		//increase rotation
		this.rotation += this.velocity / this.orbitRadius;
	}
}
