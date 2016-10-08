//External Depedency
var TimeManager = require("TimeManager");


var solutionActionTracker = 0;
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
        timer:{
            default:null,
            type: cc.Node
        },
        speed : 1,
        fromX: 0,
        fromY: 0,
        toX: 0,
        toY: 0,
        //Placeholder for drop action
        dropAction:{
            default: null,
            type: cc.Action
        },
        solution4:{
            default:null,
            type: cc.Node
        },
        solution3:{
            default:null,
            type: cc.Node
        },
        solution2:{
            default:null,
            type: cc.Node
        },
        solution1:{
            default:null,
            type: cc.Node
        },
        arrowDetection: false,
        dropIsDropping: false
        
    },
    
    // use this for initialization
    onLoad: function () {
        //Loading External Depedency
        var timerComponent = this.timer.getComponent("TimeManager");
        
        
        //Setting var
        //solutionActionTracker = 0;
        
        var arrowDetection = this.arrowDetection;
        var gravityDropAct =  cc.moveTo(1, cc.p(-56, -261));
        //Collision Manager
        var manager = cc.director.getCollisionManager();
        //Enable Collision
        manager.enabled = true;
        //Debug only
        manager.enabledDebugDraw = false;
        
        let nDrop = this.drop;
        let nArrow = this.arrow;
        
        //Loads All Moving Parts Below--------------------
        
        //Action for arrow moving up and down
        var locationFrom = cc.p(this.fromX, this.fromY);
        var locationTo = cc.p(this.toX, this.toY);
        var action1 = cc.moveTo(this.speed ,locationFrom, locationTo);
        var action2 = cc.moveTo(this.speed, locationTo, locationFrom);
        var seq = cc.sequence(action1, action2);
        var rep = cc.repeat(seq, 5);
        //Moving arrow with action
        this.node.runAction(rep);

        //Action for moving drop up and down
        var dropDropping = cc.moveTo(1, cc.p(-56, -261));
        var dropResetting = cc.moveTo(.01, cc.p(-56, 34));
        var dropSeq = cc.sequence(dropDropping, dropResetting);
        var dropRep = cc.repeat(dropSeq, 1);
        
        //Setting the action rep to global variable
        this.dropAction = dropRep;
        
        //Start timer
        this.timer.getComponent("TimeManager").moveTo();
    },
    
    onDisable: function (){
      cc.director.getCollisionManager().enabled = false;
      cc.directer.getCollisionManager().enabledDebugDraw = false;
     
    },
    
    //.getComponent(Arrow)
    
    onCollisionEnter: function (other, self) {
    //the corner point of red box and arrow detection box 
    var otherAabb = other.world.aabb;
    var selfAabb = self.world.aabb;
    
    //Detect if arrow within the red box
    if(cc.Intersection.rectRect(selfAabb, otherAabb)){
        this.arrowDetection = true;
    } 
    },
    onCollisionExit : function (other, self) {
        //Reset boolean on exit
        this.arrowDetection = false;
    },
    //I/O 
    dropDropped: function(){
            if(solutionActionTracker === 0){
                this.solution4.runAction(cc.fadeIn(0.5));
                this.solution3.runAction(cc.fadeIn(0.5));
                solutionActionTracker++;
            }else if(solutionActionTracker === 1){
                this.solution2.runAction(cc.scaleTo(1, 1, 2.6));
                solutionActionTracker++;
            }else if(solutionActionTracker === 2){
                this.solution1.runAction(cc.scaleTo(1, 1, 2.1));
                solutionActionTracker++;
            }
        try{
        if(this.arrowDetection && !this.dropIsDropping){
            this.dropIsDropping = true;
            this.drop.node.runAction(this.dropAction);
        }
        } catch (ex){
            console.log('error catach during dropping drop with user input' +  ex.message);
            throw(ex);
        }
    },
    
    update: function() {
        if(this.dropAction.isDone()){
            this.dropIsDropping = false;
        }
    }
    

});