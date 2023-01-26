

export default function CoverEffect() {
    return (
        function sketch(p5) {
            p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
        
            p5.draw = () => {
                p5.background(250);
                p5.normalMaterial();
                p5.push();
                p5.rotateZ(p5.frameCount * 0.01);
                p5.rotateX(p5.frameCount * 0.01);
                p5.rotateY(p5.frameCount * 0.01);
                p5.plane(100);
                p5.pop();
            };
        }
    )
}