var TimeManager = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        difficulties: 0,
        stageTime: 6,
        timer: {
            default: null,
            type: cc.Node
        }
        
    },

    // use this for initialization
    onLoad: function () {
    },
    
    addDifficulty: function(){
        this.difficulties++;
    },
    
    setTime: function(){
        this.stageTime = this.stageTime * (1 - (this.difficulties / 10));
    },
    
    //TODO : WindowWidth??
    moveTo: function() {
    
        this.timer.runAction(cc.moveBy(this.stageTime, cc.p(
            //X
            800, 
            //Y
            0
            )));
    
    }

});
