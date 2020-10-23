class slingshot
{
    constructor(bodyA,pointB)
    {
       var op=
       {
        bodyA:bodyA,
        pointB:pointB,
        stiffness: 0.04,
        length:10
       }
       this.pointB=pointB;
       this.chain=Constraint.create(op);
       World.add(world,this.chain);
    }
    fly()
    {
        this.chain.bodyA=null;
    }
    display()
    {
        if(this.chain.bodyA!=null)
        {
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
    }}
}