var Arrow = require("Controller");

cc.Class({
    extends: cc.Component,

    properties: {
        drop: {
            default:null,
            type:cc.Sprite     
        },
        arrow:{
            default: null,
            type: cc.Node
        }
    },
    
    // use this for initialization
    onLoad: function () {
        let node = this.drop;

    },
    

    
    
    'dropDropped': function(){
        if(this.arrow.getComponent(Arrow).node.getPositionY() >= -145 && this.arrow.getComponent(Arrow).node.getPositionY()<= -115){
            console.log('dropDropped');
            this.node.runAction(cc.moveTo(1,21,-134));
        }else{
            console.log('failed');
        }
    },
    

});
