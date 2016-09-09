var Arrow = cc.Class({
    extends: cc.Component,

    properties: {
        arrow: {
            default: null,
            type: cc.Node,
        },
        speed : 1,
        fromX: 0,
        fromY: 0,
        toX: 0,
        toY: 0
    },
    

    // use this for initialization
    onLoad: function(){
        let node = this.arrow;
        var locationFrom = cc.p(this.fromX, this.fromY);
        var locationTo = cc.p(this.toX, this.toY);
        var action1 = cc.moveTo(1,locationFrom, locationTo);
        var action2 = cc.moveTo(1, locationTo, locationFrom);
        var seq = cc.sequence(action1, action2);
        var rep = cc.repeat(seq, 5);
        this.node.runAction(rep);
    },
                     
     
    
});


