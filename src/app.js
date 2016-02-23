var endGame = false;
var playerX = 0;
var playerO = 0;
var ties = 0;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    turn:'x',
    contTurn:0,
    imgLine1:[3],
    imgLine2:[3],
    imgLine3:[3],
    playA:['','',''],
    playB:['','',''],
    playC:['','',''],
    win: '',
    
    jugar: function(location, event){
		var juego = event.getCurrentTarget();
		var ubicacion = location.getLocation();
        var ifPlay = false;
        
        if(!juego.endGame){
        
            if(juego.turn == 'x'){
                executePlay();
                juego.turn = '0';

            } else{
                executePlay();
                juego.turn = 'x';
            }
        
        function executePlay(){
            //alert("X: " + ubicacion.x + " Y: " + ubicacion.y);
            if(ubicacion.x < 393 && ubicacion.y >405){
                //Esquina superior izquierda
                if(juego.turn == 'x'){
                    juego.imgLine1[0] = new cc.Sprite(res.X_png);
                    juego.imgLine1[0].setPosition(300,500);
                    juego.addChild(juego.imgLine1[0], 1);
                    juego.playA[0] = 'x';
                }
                else{
                    juego.imgLine1[0] = new cc.Sprite(res.O_png);
                    juego.imgLine1[0].setPosition(300,500);
                    juego.addChild(juego.imgLine1[0], 1);
                    juego.playA[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            }else if(ubicacion.x >393 && ubicacion.x <568 && ubicacion.y >405){
                //Superior
                if(juego.turn == 'x'){
                    juego.imgLine1[1] = new cc.Sprite(res.X_png);
                    juego.imgLine1[1].setPosition(480, 500);
                    juego.addChild(juego.imgLine1[1], 1);
                    juego.playA[1] = 'x';
                }
                else{
                    juego.imgLine1[1] = new cc.Sprite(res.O_png);
                    juego.imgLine1[1].setPosition(480, 500);
                    juego.addChild(juego.imgLine1[1], 1);
                    juego.playA[1] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y >405){
                //Esquina superior derecha
                if(juego.turn == 'x'){
                    juego.imgLine1[2] = new cc.Sprite(res.X_png);
                    juego.imgLine1[2].setPosition(660, 500);
                    juego.addChild(juego.imgLine1[2], 1);
                    juego.playA[2] = 'x';
                }
                else{
                    juego.imgLine1[2] = new cc.Sprite(res.O_png);
                    juego.imgLine1[2].setPosition(660, 500);
                    juego.addChild(juego.imgLine1[2], 1);
                    juego.playA[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x < 394 && ubicacion.y <405 && ubicacion.y >230){
                //Izquierda
                if(juego.turn == 'x'){
                    juego.imgLine2[0] = new cc.Sprite(res.X_png);
                    juego.imgLine2[0].setPosition(300,318);
                    juego.addChild(juego.imgLine2[0], 1);
                    juego.playB[0] = 'x';
                }
                else{
                    juego.imgLine2[0] = new cc.Sprite(res.O_png);
                    juego.imgLine2[0].setPosition(300,318);
                    juego.addChild(juego.imgLine2[0], 1);
                    juego.playB[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y <405 && ubicacion.y >230){
                //Derecha
                if(juego.turn == 'x'){
                    juego.imgLine2[2] = new cc.Sprite(res.X_png);
                    juego.imgLine2[2].setPosition(660, 318);
                    juego.addChild(juego.imgLine2[2], 1);
                    juego.playB[2] = 'x';
                }
                else{
                    juego.imgLine2[2] = new cc.Sprite(res.O_png);
                    juego.imgLine2[2].setPosition(660, 318);
                    juego.addChild(juego.imgLine2[2], 1);
                    juego.playB[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x <392 && ubicacion.y <227){
            //    alert("Esquina inferior izquierda");
                if(juego.turn == 'x'){
                    juego.imgLine3[0] = new cc.Sprite(res.X_png);
                    juego.imgLine3[0].setPosition(300,136);
                    juego.addChild(juego.imgLine3[0], 1);
                    juego.playC[0] = 'x';
                }
                else{
                    juego.imgLine3[0] = new cc.Sprite(res.O_png);
                    juego.imgLine3[0].setPosition(300,136);
                    juego.addChild(juego.imgLine3[0], 1);
                    juego.playC[0] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >394 && ubicacion.x<567 && ubicacion.y <227){
            //    alert("Inferior");
                if(juego.turn == 'x'){
                    juego.imgLine3[1] = new cc.Sprite(res.X_png);
                    juego.imgLine3[1].setPosition(480,136);
                    juego.addChild(juego.imgLine3[1], 1);
                    juego.playC[1] = 'x';
                }
                else{
                    juego.imgLine3[1] = new cc.Sprite(res.O_png);
                    juego.imgLine3[1].setPosition(480,136);
                    juego.addChild(juego.imgLine3[1], 1);
                    juego.playC[1] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else if(ubicacion.x >570 && ubicacion.y <227){
            //    alert("Esquina inferior derecha");
                if(juego.turn == 'x'){
                    juego.imgLine3[2] = new cc.Sprite(res.X_png);
                    juego.imgLine3[2].setPosition(660,136);
                    juego.addChild(juego.imgLine3[2], 1);
                    juego.playC[2] = 'x';
                }
                else{
                    juego.imgLine3[2] = new cc.Sprite(res.O_png);
                    juego.imgLine3[2].setPosition(660,136);
                    juego.addChild(juego.imgLine3[2], 1);
                    juego.playC[2] = '0';
                }
                juego.contTurn++;
                ifPlay = true;
            } else{
                //Centro
                if(juego.turn == 'x'){
                    juego.imgLine2[1] = new cc.Sprite(res.X_png);
                    juego.imgLine2[1].setPosition(480, 318);
                    juego.addChild(juego.imgLine2[1], 1);
                    juego.playB[1] = 'x';
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
            //Chequeo Horizontal
                if(juego.playA[0] == 'x' && juego.playA[1] == 'x' && juego.playA[2] == 'x'){ 
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
                
                if(juego.playB[0] == 'x' && juego.playB[1] == 'x' && juego.playB[2] == 'x'){ 
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
                
                if(juego.playC[0] == 'x' && juego.playC[1] == 'x' && juego.playC[2] == 'x'){ 
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
                if(juego.playA[0] == 'x' && juego.playB[0] == 'x' && juego.playC[0] == 'x'){
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

                if(juego.playA[1] == 'x' && juego.playB[1] == 'x' && juego.playC[1] == 'x'){
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

                if(juego.playA[2] == 'x' && juego.playB[2] == 'x' && juego.playC[2] == 'x'){
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
                if(juego.playA[0] == 'x' && juego.playB[1] == 'x' && juego.playC[2] == 'x'){
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

                if(juego.playA[2] == 'x' && juego.playB[1] == 'x' && juego.playC[0] == 'x'){
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
            alert("Player(" + juego.win + ") WON!")
            resetBoard();
            updateScore();
        }
        
        
        function resetBoard(){
            juego.sprite = null;
            juego.turn = 'x';
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
            var puntajePlayerX = new cc.LabelTTF(juego.playerX, "Arial", 16);
            puntajePlayerX.setPosition(345,45);
            juego.addChild(juego.puntajePlayer0, 1);
            var puntajePlayer0 = new cc.LabelTTF(juego.playerO, "Arial", 16);
            puntajePlayer0.setPosition(515,45);
            juego.addChild(juego.puntajeTies, 1);
            var puntajeTies = new cc.LabelTTF(juego.ties, "Arial", 16);
            puntajeTies.setPosition(645,45);
            juego.addChild(juego.puntajeTies, 1);
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
        
        var LabelPlayerX = new cc.LabelTTF("Player (X):", "Arial", 16);
        LabelPlayerX.x = 290;
        LabelPlayerX.y = 45;
        this.addChild(LabelPlayerX, 1);
        var LabelPlayer0 = new cc.LabelTTF("Player (0):", "Arial", 16);
        LabelPlayer0.x = 460;
        LabelPlayer0.y = 45;
        this.addChild(LabelPlayer0, 1);
        var LabelTies = new cc.LabelTTF("Ties:", "Arial", 16);
        LabelTies.x = 610;
        LabelTies.y = 45;
        this.addChild(LabelTies, 1);
        
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
