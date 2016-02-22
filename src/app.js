var endGame = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    playerX:0,
    playerO:0,
    ties:0,
    turn:'x',
    contTurn:0,
    imgLine1:[3],
    imgLine2:[3],
    imgLine3:[3],
    playA:['','',''],
    playB:['','',''],
    playC:['','',''],
    
    jugar: function(location, event){
		var juego = event.getCurrentTarget();
		var ubicacion = location.getLocation();
        var ifPlay = false;
        
        
        if(!juego.endGame){
            for(var i = 0; i < 3; i++){
                var cuadro = juego.imgLine1[i].getBoundingBox();
                if(cc.rectContainsPoint(cuadro, ubicacion) && juego.playA[i]==''){
                    if(juego.turn == 'x'){
                        var sprite = juego.imgLine1[i];
                        juego.removeChild(juego.imgLine1[i],1);
                        juego.imgLine1[i] = new cc.Sprite(res.X_png);
                        if(i === 0){
                            juego.imgLine1[i].setPosition(300, 500);
                        }else if (i === 1){
                            juego.imgLine1[i].setPosition(480, 500);
                        }else{
                            juego.imgLine1[i].setPosition(660, 500);
                        }
                        juego.playA[i] = 'x';
                        juego.turn = '0';
                        juego.contTurn++;
                        juego.imgLine1[i].setVisible(false);
                        juego.addChild(juego.imgLine1[i],1);
                    }else{
                        juego.playA[i] = '0';
                        juego.turn = 'x';
                    }
                    juego.imgLine1[i].setVisible(true);
                    ifPlay = true;
                }
            }
            for(var i = 0; i < 3; i++){
                var cuadro = juego.imgLine2[i].getBoundingBox();
                if(cc.rectContainsPoint(cuadro, ubicacion) && juego.playB[i]==''){
                    if(juego.turn == 'x'){
                        var sprite = juego.imgLine2[i];
                        juego.removeChild(juego.imgLine2[i],1);
                        juego.imgLine2[i] = new cc.Sprite(res.X_png);
                        if(i === 0){
                            juego.imgLine2[i].setPosition(300, 318);
                        }else if (i === 1){
                            juego.imgLine2[i].setPosition(480, 318);
                        }else{
                            juego.imgLine2[i].setPosition(660, 318);
                        }
                        juego.playB[i] = 'x';
                        juego.turn = '0';
                        juego.contTurn++;
                        juego.imgLine2[i].setVisible(false);
                        juego.addChild(juego.imgLine2[i],1);
                    }else{
                        juego.playB[i] = '0';
                        juego.turn = 'x';
                    }
                    juego.imgLine2[i].setVisible(true);
                    ifPlay = true;
                }
            } 
            for(var i = 0; i < 3; i++){
                var cuadro = juego.imgLine3[i].getBoundingBox();
                if(cc.rectContainsPoint(cuadro, ubicacion) && juego.playC[i]==''){
                    if(juego.turn == 'x'){
                        var sprite = juego.imgLine3[i];
                        juego.removeChild(juego.imgLine3[i],1);
                        juego.imgLine3[i] = new cc.Sprite(res.X_png);
                        if(i === 0){
                            juego.imgLine3[i].setPosition(300, 136);
                        }else if (i === 1){
                            juego.imgLine3[i].setPosition(480, 136);
                        }else{
                            juego.imgLine3[i].setPosition(660, 136);
                        }
                        juego.playC[i] = 'x';
                        juego.turn = '0';
                        juego.contTurn++;
                        juego.imgLine3[i].setVisible(false);
                        juego.addChild(juego.imgLine3[i],1);
                    }else{
                        juego.playC[i] = '0';
                        juego.turn = 'x';
                    }
                    juego.imgLine3[i].setVisible(true);
                    ifPlay = true;
                }
            }
            
            if(ifPlay){
            //Chequeo Horizontal
                if(juego.playA[0] == 'x' && juego.playA[1] == 'x' && juego.playA[2] == 'x'){ 
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if (juego.playA[0] == '0' && juego.playA[1] == '0' && juego.playA[2] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }
                
                if(juego.playB[0] == 'x' && juego.playB[1] == 'x' && juego.playB[2] == 'x'){ 
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playB[0] == '0' && juego.playB[1] == '0' && juego.playB[2] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }
                
                if(juego.playC[0] == 'x' && juego.playC[1] == 'x' && juego.playC[2] == 'x'){ 
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playC[0] == '0' && juego.playC[1] == '0' && juego.playC[2] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }

                //Chequeo Vertical
                if(juego.playA[0] == 'x' && juego.playB[0] == 'x' && juego.playC[0] == 'x'){
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playA[0] == '0' && juego.playB[0] == '0' && juego.playC[0] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }

                if(juego.playA[1] == 'x' && juego.playB[1] == 'x' && juego.playC[1] == 'x'){
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playA[1] == '0' && juego.playB[1] == '0' && juego.playC[1] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }   

                if(juego.playA[2] == 'x' && juego.playB[2] == 'x' && juego.playC[2] == 'x'){
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playA[2] == '0' && juego.playB[2] == '0' && juego.playC[2] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }

                //Chequeo Diagonal
                if(juego.playA[0] == 'x' && juego.playB[1] == 'x' && juego.playC[2] == 'x'){
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playA[0] == '0' && juego.playB[1] == '0' && juego.playC[2] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }

                if(juego.playA[2] == 'x' && juego.playB[1] == 'x' && juego.playC[0] == 'x'){
                    this.playerX++;
                    juego.endGame = true;
                    return true;
                }else if(juego.playA[2] == '0' && juego.playB[1] == '0' && juego.playC[0] == '0'){
                    this.playerO++;
                    juego.endGame = true;
                    return true;
                }     
            }
            if(juego.contTurn == 9){
                this.ties++;
                juego.endGame = true;
            }
        }
},
        resetBoard: function(){
       
        this.turn = 'x';
        this.contTurn = 0;
        this.imgLine1 = [3];
        this.imgLine2 = [3];
        this.imgLine3 = [3];
        this.playA = ['','',''];
        this.playB = ['','',''];
        this.playC = ['','',''];
        this.endGame = false;
        
    //Invisible img to locate the click
        this.imgLine1[0] = new cc.Sprite(res.O_png);
        this.imgLine1[0].setPosition(300,500);
		this.addChild(this.imgLine1[0], 1);
        this.imgLine1[0].setVisible(false);
        
        this.imgLine1[1] = new cc.Sprite(res.O_png);
        this.imgLine1[1].setPosition(480, 500);
		this.addChild(this.imgLine1[1], 1);
        this.imgLine1[1].setVisible(false);
        
        this.imgLine1[2] = new cc.Sprite(res.O_png);
        this.imgLine1[2].setPosition(660, 500);
		this.addChild(this.imgLine1[2], 1);
        this.imgLine1[2].setVisible(false);
        //line2
        this.imgLine2[0] = new cc.Sprite(res.O_png);
        this.imgLine2[0].setPosition(300,318);
		this.addChild(this.imgLine2[0], 1);
        this.imgLine2[0].setVisible(false);
        
        this.imgLine2[1] = new cc.Sprite(res.O_png);
        this.imgLine2[1].setPosition(480, 318);
		this.addChild(this.imgLine2[1], 1);
        this.imgLine2[1].setVisible(false);
        
        this.imgLine2[2] = new cc.Sprite(res.O_png);
        this.imgLine2[2].setPosition(660, 318);
		this.addChild(this.imgLine2[2], 1);
        this.imgLine2[2].setVisible(false);
        //line3
        this.imgLine3[0] = new cc.Sprite(res.O_png);
        this.imgLine3[0].setPosition(300,136);
		this.addChild(this.imgLine3[0], 1);
        this.imgLine3[0].setVisible(false);
        
        this.imgLine3[1] = new cc.Sprite(res.O_png);
        this.imgLine3[1].setPosition(480, 136);
		this.addChild(this.imgLine3[1], 1);
        this.imgLine3[1].setVisible(false);
        
        this.imgLine3[2] = new cc.Sprite(res.O_png);
        this.imgLine3[2].setPosition(660, 136);
		this.addChild(this.imgLine3[2], 1);
        this.imgLine3[2].setVisible(false);
        
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.jugar
		}, this);
    },
    
    
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
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
        var puntajePlayerX = new cc.LabelTTF(this.playerX, "Arial", 16);
        puntajePlayerX.x = 345;
        puntajePlayerX.y = 45;
        this.addChild(puntajePlayerX, 5);
        
        var LabelPlayer0 = new cc.LabelTTF("Player (0):", "Arial", 16);
        LabelPlayer0.x = 460;
        LabelPlayer0.y = 45;
        this.addChild(LabelPlayer0, 5);
        var puntajePlayer0 = new cc.LabelTTF(this.playerO, "Arial", 16);
        puntajePlayer0.x = 515;
        puntajePlayer0.y = 45;
        this.addChild(puntajePlayer0, 5);
        
        var LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
        LabelTies.x = 610;
        LabelTies.y = 45;
        this.addChild(LabelTies, 5);
        var puntajeTies = new cc.LabelTTF(this.ties, "Arial", 16);
        puntajeTies.x = 645;
        puntajeTies.y = 45;
        this.addChild(puntajeTies, 5);
        
        this.resetBoard();
        
        
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

if(this.endGame){
            this.resetBoard();
}
        
