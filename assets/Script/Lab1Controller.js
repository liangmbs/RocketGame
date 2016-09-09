
cc.Class({
    extends: cc.Component,

    properties: {
        drop: {
            default:null,
            type: cc.Node     
        },
        
        
        arrow:{
            default: null,
            type: cc.Node
        },
        speed : 1,
        fromX: 0,
        fromY: 0,
        toX: 0,
        toY: 0,
        detection: false
    },
    
    // use this for initialization
    onLoad: function () {
        var detection = this.detection;
        //Collision Manager
        var manager = cc.director.getCollisionManager();
        //Enable Collision
        manager.enabled = true;
        //Debug only
        manager.enabledDebugDraw = false;
        
        let nDrop = this.drop;
        let nArrow = this.arrow;
        var locationFrom = cc.p(this.fromX, this.fromY);
        var locationTo = cc.p(this.toX, this.toY);
        var action1 = cc.moveTo(this.speed ,locationFrom, locationTo);
        var action2 = cc.moveTo(this.speed, locationTo, locationFrom);
        var seq = cc.sequence(action1, action2);
        var rep = cc.repeat(seq, 5);
        this.node.runAction(rep);

    },
    
    onDisable: function (){
      cc.director.getCollisionManager().enabled = false;
      cc.directer.getCollisionManager().enabledDebugDraw = false;
     
    },
    
    //.getComponent(Arrow)
    
    onCollisionEnter: function (other, self) {
    

    
    var otherAabb = other.world.aabb;
    var selfAabb = self.world.aabb;
    
    if(cc.Intersection.rectRect(selfAabb, otherAabb)){
        this.detection = true;
    } 
    },
    onCollisionExit : function (other, self) {
        this.detection = false;
    },
    
    dropDropped: function(){
        var gravityDropAct =  cc.moveTo(1, cc.p(-56, -261));
        this.drop.node.runAction(gravityDropAct);
        if(gravityDropAct.isDone()){
            console.log('reset me');
        } else {
            console.log(
        gravityDropAct.getOriginalTarget().x);
            console.log('ISDONE: ' +
        gravityDropAct.isDone());
        }
        console.log(this.detection);
    },
    

});