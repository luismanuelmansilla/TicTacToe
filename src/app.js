
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    playerX:null,
    playerO:null,
    ties:null,
    turno:null,
    
    jugar: function(location, event){
		var  juego = event.getCurrentTarget();
		var ubicacion = location.getLocation();
        
        if(this.turno == 'x'){
            juego.playerX.setPosition(ubicacion.x,ubicacion.y);
        }else{
            juego.playerO.setPosition(ubicacion.x,ubicacion.y);
        }	
    },
    
    
    
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.playerX = new cc.Sprite(res.X_png);
        this.playerO = new cc.Sprite(res.O_png);
        this.turno = 'x';
        this.addChild(this.playerX);
        this.addChild(this.playerO);
        
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 300;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.board_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        
        var LabelPlayerX = new cc.LabelTTF("Player (X):", "Arial", 16);
        LabelPlayerX.x = 290;
        LabelPlayerX.y = 45;
        this.addChild(LabelPlayerX, 5);
        
        var LabelPlayer0 = new cc.LabelTTF("Player (0):", "Arial", 16);
        LabelPlayer0.x = 460;
        LabelPlayer0.y = 45;
        this.addChild(LabelPlayer0, 5);
        
        var LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
        LabelTies.x = 610;
        LabelTies.y = 45;
        this.addChild(LabelTies, 5);
                             
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.jugar,
			onTouchMoved: this.jugar
		}, this);
        

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

