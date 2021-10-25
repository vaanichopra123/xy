class Matki {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        };
        this.w =w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x,pos.y, this.w, this.h);
        pop();
      }
}