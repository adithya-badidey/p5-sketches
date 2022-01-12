function Star() {
    this.x = random(0,width)
    this.y = random(0,height)
    this.size = 0
    this.factor = random(8,10)
    this.dx = (this.x - width/2)*10/(this.factor)
    this.dy = (this.y - height/2)*10/(this.factor) 

    this.show = function() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        // stroke(255)
        // line(this.x-this.dx*speed, this.y-this.dy*speed, this.x, this.y);
    }

    this.update = function() {
        this.x += this.dx * speed
        this.y += this.dy * speed
        this.size+=speed/10

        if ((this.x < -this.size || this.x > width + this.size) || (this.y < -this.size || this.y > height + this.size)) {
            this.x = random(0,width)
            this.y = random(0,height)
            this.size = 1
            this.factor = random(4,10)
            this.dx = (this.x - width/2)/(this.factor)
            this.dy = (this.y - height/2)/(this.factor) 
        }

    }
}