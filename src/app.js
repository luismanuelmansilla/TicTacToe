var endGame = false;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    turn:'X',
    first: 'X',
    contTurn:0,
    imgLine1:[3],
    imgLine2:[3],
    imgLine3:[3],
    playA:['','',''],
    playB:['','',''],
    playC:['','',''],
    win: '',
    playerX: 0,
    playerO: 0,
    ties: 0,
    puntajePlayerX: 0,
    puntajePlayer0: 0,
    puntajeTies: 0,
    LabelPlayerX:0,
    LabelPlayer0:0,
    LabelTies:0,
    
    jugar: function(location, event){
		var juego = event.getCurrentTarget();
		var ubicacion = location.getLocation();
        var ifPlay = false;
        
        if(!juego.endGame){
        
            if(juego.turn == 'X'){
                executePlay();
                if(ifPlay){
                    juego.turn = '0';
                }
            } else{
                executePlay();
                if(ifPlay){
                    juego.turn = 'X';
                }
            }
        
        function executePlay(){
            //alert("X: " + ubicacion.x + " Y: " + ubicacion.y);
            if(ubicacion.x < 393 && ubicacion.y >405 && juego.playA[0]==''){
                //Esquina superior izquierda
                if(juego.turn == 'X'){
                    juego.imgLine1[0] = new cc.Sprite(res.X_png);
                    juego.imgLine1[0].setPosition(300,500);
                    juego.addChild(juego.imgLine1[0], 1);
                    juego.playA[0] = 'X';
                }
                else{
                    juego.imgLine1[0] = new cc.Sprite(res.O_png);
                    juego.imgLine1[0].setPosition(300,500);
                    juego.addChild(juego.imgLine1[0], 1);
                    juego.playA[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            }else if(ubicacion.x >393 && ubicacion.x <568 && ubicacion.y >405 && juego.playA[1]==''){
                //Superior
                if(juego.turn == 'X'){
                    juego.imgLine1[1] = new cc.Sprite(res.X_png);
                    juego.imgLine1[1].setPosition(480, 500);
                    juego.addChild(juego.imgLine1[1], 1);
                    juego.playA[1] = 'X';
                }
                else{
                    juego.imgLine1[1] = new cc.Sprite(res.O_png);
                    juego.imgLine1[1].setPosition(480, 500);
                    juego.addChild(juego.imgLine1[1], 1);
                    juego.playA[1] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y >405 && juego.playA[2]==''){
                //Esquina superior derecha
                if(juego.turn == 'X'){
                    juego.imgLine1[2] = new cc.Sprite(res.X_png);
                    juego.imgLine1[2].setPosition(660, 500);
                    juego.addChild(juego.imgLine1[2], 1);
                    juego.playA[2] = 'X';
                }
                else{
                    juego.imgLine1[2] = new cc.Sprite(res.O_png);
                    juego.imgLine1[2].setPosition(660, 500);
                    juego.addChild(juego.imgLine1[2], 1);
                    juego.playA[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x < 394 && ubicacion.y <405 && ubicacion.y >230 && juego.playB[0]==''){
                //Izquierda
                if(juego.turn == 'X'){
                    juego.imgLine2[0] = new cc.Sprite(res.X_png);
                    juego.imgLine2[0].setPosition(300,318);
                    juego.addChild(juego.imgLine2[0], 1);
                    juego.playB[0] = 'X';
                }
                else{
                    juego.imgLine2[0] = new cc.Sprite(res.O_png);
                    juego.imgLine2[0].setPosition(300,318);
                    juego.addChild(juego.imgLine2[0], 1);
                    juego.playB[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y <405 && ubicacion.y >230 && juego.playB[2]==''){
                //Derecha
                if(juego.turn == 'X'){
                    juego.imgLine2[2] = new cc.Sprite(res.X_png);
                    juego.imgLine2[2].setPosition(660, 318);
                    juego.addChild(juego.imgLine2[2], 1);
                    juego.playB[2] = 'X';
                }
                else{
                    juego.imgLine2[2] = new cc.Sprite(res.O_png);
                    juego.imgLine2[2].setPosition(660, 318);
                    juego.addChild(juego.imgLine2[2], 1);
                    juego.playB[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x <392 && ubicacion.y <227 && juego.playC[0]==''){
            //    alert("Esquina inferior izquierda");
                if(juego.turn == 'X'){
                    juego.imgLine3[0] = new cc.Sprite(res.X_png);
                    juego.imgLine3[0].setPosition(300,136);
                    juego.addChild(juego.imgLine3[0], 1);
                    juego.playC[0] = 'X';
                }
                else{
                    juego.imgLine3[0] = new cc.Sprite(res.O_png);
                    juego.imgLine3[0].setPosition(300,136);
                    juego.addChild(juego.imgLine3[0], 1);
                    juego.playC[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >394 && ubicacion.x<567 && ubicacion.y <227 && juego.playC[1]==''){
            //    alert("Inferior");
                if(juego.turn == 'X'){
                    juego.imgLine3[1] = new cc.Sprite(res.X_png);
                    juego.imgLine3[1].setPosition(480,136);
                    juego.addChild(juego.imgLine3[1], 1);
                    juego.playC[1] = 'X';
                }
                else{
                    juego.imgLine3[1] = new cc.Sprite(res.O_png);
                    juego.imgLine3[1].setPosition(480,136);
                    juego.addChild(juego.imgLine3[1], 1);
                    juego.playC[1] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y <227 && juego.playC[2]==''){
            //    alert("Esquina inferior derecha");
                if(juego.turn == 'X'){
                    juego.imgLine3[2] = new cc.Sprite(res.X_png);
                    juego.imgLine3[2].setPosition(660,136);
                    juego.addChild(juego.imgLine3[2], 1);
                    juego.playC[2] = 'X';
                }
                else{
                    juego.imgLine3[2] = new cc.Sprite(res.O_png);
                    juego.imgLine3[2].setPosition(660,136);
                    juego.addChild(juego.imgLine3[2], 1);
                    juego.playC[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x > 394 && ubicacion.x < 570 && ubicacion.y < 405 && ubicacion.y > 230 && juego.playB[1]==''){
                //Centro
                if(juego.turn == 'X'){
                    juego.imgLine2[1] = new cc.Sprite(res.X_png);
                    juego.imgLine2[1].setPosition(480, 318);
                    juego.addChild(juego.imgLine2[1], 1);
                    juego.playB[1] = 'X';
                }
                else{
                    juego.imgLine2[1] = new cc.Sprite(res.O_png);
                    juego.imgLine2[1].setPosition(480, 318);
                    juego.addChild(juego.imgLine2[1], 1);
                    juego.playB[1] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            }
        }

            if(ifPlay){
                updateScore();
            //Chequeo Horizontal
                if(juego.playA[0] == 'X' && juego.playA[1] == 'X' && juego.playA[2] == 'X'){ 
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if (juego.playA[0] == '0' && juego.playA[1] == '0' && juego.playA[2] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }
                
                if(juego.playB[0] == 'X' && juego.playB[1] == 'X' && juego.playB[2] == 'X'){ 
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playB[0] == '0' && juego.playB[1] == '0' && juego.playB[2] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }
                
                if(juego.playC[0] == 'X' && juego.playC[1] == 'X' && juego.playC[2] == 'X'){ 
                    juego.playerX++;
                    juego.win = 'X';
                    juego.endGame = true;
                    return true;
                }else if(juego.playC[0] == '0' && juego.playC[1] == '0' && juego.playC[2] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }

                //Chequeo Vertical
                if(juego.playA[0] == 'X' && juego.playB[0] == 'X' && juego.playC[0] == 'X'){
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playA[0] == '0' && juego.playB[0] == '0' && juego.playC[0] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }

                if(juego.playA[1] == 'X' && juego.playB[1] == 'X' && juego.playC[1] == 'X'){
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playA[1] == '0' && juego.playB[1] == '0' && juego.playC[1] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }   

                if(juego.playA[2] == 'X' && juego.playB[2] == 'X' && juego.playC[2] == 'X'){
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playA[2] == '0' && juego.playB[2] == '0' && juego.playC[2] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }

                //Chequeo Diagonal
                if(juego.playA[0] == 'X' && juego.playB[1] == 'X' && juego.playC[2] == 'X'){
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playA[0] == '0' && juego.playB[1] == '0' && juego.playC[2] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }

                if(juego.playA[2] == 'X' && juego.playB[1] == 'X' && juego.playC[0] == 'X'){
                    juego.playerX++;
                    juego.endGame = true;
                    juego.win = 'X';
                    return true;
                }else if(juego.playA[2] == '0' && juego.playB[1] == '0' && juego.playC[0] == '0'){
                    juego.playerO++;
                    juego.endGame = true;
                    juego.win = '0';
                    return true;
                }
            }
            if(juego.contTurn == 9){
                juego.win = "TIES";
                juego.ties++;
                juego.endGame = true;
            }
        }
        else{
            if(juego.first == 'X'){
                juego.first = '0';
            }else{
                juego.first = 'X';
            }
            alert("Player(" + juego.win + ") WON!");
            resetBoard();
            updateScore();
        }
        
        function resetBoard(){
            juego.sprite = null;
            juego.turn = juego.first;
            juego.contTurn = 0;
            juego.playA = ['','',''];
            juego.playB = ['','',''];
            juego.playC = ['','',''];
            juego.endGame = false;
            juego.ifPlay = false;
            juego.win = '';
            
            juego.removeChild(juego.imgLine1[0],1);
            juego.removeChild(juego.imgLine1[1],1);
            juego.removeChild(juego.imgLine1[2],1);
            juego.removeChild(juego.imgLine2[0],1);
            juego.removeChild(juego.imgLine2[1],1);
            juego.removeChild(juego.imgLine2[2],1);
            juego.removeChild(juego.imgLine3[0],1);
            juego.removeChild(juego.imgLine3[1],1);
            juego.removeChild(juego.imgLine3[2],1);     
        }
        
        function updateScore(){
            juego.removeChild(juego.LabelPlayerX,1);
            juego.removeChild(juego.LabelPlayer0,1);
            juego.removeChild(juego.LabelTies,1);
            juego.removeChild(juego.puntajePlayerX,1);
            juego.removeChild(juego.puntajePlayer0,1);
            juego.removeChild(juego.puntajeTies,1);
            
                if(juego.turn == 'X'){
                    //Labels
                    juego.LabelPlayerX = new cc.LabelTTF("Player 1 (X):", "Arial", 16);
                    juego.LabelPlayerX.x = 290;
                    juego.LabelPlayerX.y = 45;
                    juego.addChild(juego.LabelPlayerX, 1);
                    juego.LabelPlayer0 = new cc.LabelTTF("Player 2 (0):", "Arial", 16);
                    juego.LabelPlayer0.x = 460;
                    juego.LabelPlayer0.y = 45;
                    juego.LabelPlayer0.setColor(cc.color(84,84,84));
                    juego.addChild(juego.LabelPlayer0, 1);
                    juego.LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
                    juego.LabelTies.x = 610;
                    juego.LabelTies.y = 45;
                    juego.LabelTies.setColor(cc.color(84,84,84));
                    juego.addChild(juego.LabelTies, 1);
                    //Puntajes
                    juego.puntajePlayerX = new cc.LabelTTF(juego.playerX, "Arial", 16);
                    juego.puntajePlayerX.x = 345;
                    juego.puntajePlayerX.y = 45;
                    juego.addChild(juego.puntajePlayerX, 1);
                    juego.puntajePlayer0 = new cc.LabelTTF(juego.playerO, "Arial", 16);
                    juego.puntajePlayer0.x = 515;
                    juego.puntajePlayer0.y = 45;
                    juego.puntajePlayer0.setColor(cc.color(84,84,84));
                    juego.addChild(juego.puntajePlayer0, 1);
                    juego.puntajeTies = new cc.LabelTTF(juego.ties, "Arial", 16);
                    juego.puntajeTies.x = 645;
                    juego.puntajeTies.y = 45;
                    juego.puntajeTies.setColor(cc.color(84,84,84));
                    juego.addChild(juego.puntajeTies, 1);  
                }else if(juego.turn == '0'){
                    //Labels
                    juego.LabelPlayer0 = new cc.LabelTTF("Player 2 (0):", "Arial", 16);
                    juego.LabelPlayer0.x = 460;
                    juego.LabelPlayer0.y = 45;
                    juego.addChild(juego.LabelPlayer0, 1); 
                    juego.LabelPlayerX = new cc.LabelTTF("Player 1 (X):", "Arial", 16);
                    juego.LabelPlayerX.x = 290;
                    juego.LabelPlayerX.y = 45;
                    juego.LabelPlayerX.setColor(cc.color(84,84,84));
                    juego.addChild(juego.LabelPlayerX, 1);
                    juego.LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
                    juego.LabelTies.x = 610;
                    juego.LabelTies.y = 45;
                    juego.LabelTies.setColor(cc.color(84,84,84));
                    juego.addChild(juego.LabelTies, 1);
                    //Puntajes
                    juego.puntajePlayer0 = new cc.LabelTTF(juego.playerO, "Arial", 16);
                    juego.puntajePlayer0.x = 515;
                    juego.puntajePlayer0.y = 45;
                    juego.addChild(juego.puntajePlayer0, 1);
                    juego.puntajePlayerX = new cc.LabelTTF(juego.playerX, "Arial", 16);
                    juego.puntajePlayerX.x = 345;
                    juego.puntajePlayerX.y = 45;
                    juego.puntajePlayerX.setColor(cc.color(84,84,84));
                    juego.addChild(juego.puntajePlayerX, 1);
                    juego.puntajeTies = new cc.LabelTTF(juego.ties, "Arial", 16);
                    juego.puntajeTies.x = 645;
                    juego.puntajeTies.y = 45;
                    juego.puntajeTies.setColor(cc.color(84,84,84));
                    juego.addChild(juego.puntajeTies, 1); 
                }
        }
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
        
        
        this.LabelPlayerX = new cc.LabelTTF("Player 1 (X):", "Arial", 16);
        this.LabelPlayerX.x = 290;
        this.LabelPlayerX.y = 45;
        this.addChild(this.LabelPlayerX, 1);
        this.LabelPlayer0 = new cc.LabelTTF("Player 2 (0):", "Arial", 16);
        this.LabelPlayer0.x = 460;
        this.LabelPlayer0.y = 45;
        this.LabelPlayer0.setColor(cc.color(84,84,84));
        this.addChild(this.LabelPlayer0, 1);
        this.LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
        this.LabelTies.x = 610;
        this.LabelTies.y = 45;
        this.LabelTies.setColor(cc.color(84,84,84));
        this.addChild(this.LabelTies, 1); 
        
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.jugar
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
