cc.Class({
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
        difficulties: 1,
        clock: {
            default: null,
            type: cc.Sprite 
        }
        
    },

    // use this for initialization
    onLoad: function () {
        var difficulty = this.difficulties;
        this.clock.schedule(function(){
            difficulty = difficulty + 1;
            console.log(difficulty);
        }, 6*(difficulty/10)); 
    },


      
    // called every frame, uncomment this function to activate update callback

});
