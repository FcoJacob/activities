document.getElementById('score').innerHTML = "<h4 style='color: white;'>Score: "+0+"</h4>";
document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons'>favorite</i><i class='material-icons'>favorite</i><i class='material-icons'>favorite</i></h4>";
printStage();

function printStage(){    
    
    var contenedor = document.getElementById('drawerBricks');
    var result = "<div>";
    var level = [
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}],
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}],
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}], //this line with life: 0 means empty space
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0}],
    ];
    
    for (f = 0; f < level.length; f++) {
        result += "<div class='row'>";
        for (c = 0; c < level[f].length; c++) {
            console.log(level[f][c].life);
            if(level[f][c].life == "0"){
                result += "<div id='brick' class='brick brickDestroy'></div>"; 
            }else if(level[f][c].life == "1"){
                result += "<div id='brick' class='brick levelBrickOne'></div>"; 
            }else if(level[f][c].life == "2"){
                result += "<div id='brick' class='brick levelBrickTwo'></div>"; 
            }else if(level[f][c].life == "3"){
                result += "<div id='brick' class='brick levelBrickThree'></div>"; 
            }                       
        } 
        result += "</div>";       
    }
    result += "</div>"; 

    contenedor.innerHTML = result;  
    
    // movimientos

    window.onmousemove = handleMouseMove;     
    
    function handleMouseMove(event) {
        var x = event.clientX;
        var y = event.clientY;        
        var ventana_ancho = $(window).width();
        var ventana_alto = $(window).height();

        $(document).ready(function(){
            //moviendo al jugador
            $(window).mousemove(function(event){                
                if(event.clientX >= ventana_ancho-100){
                    $(".player").css("left", ventana_ancho - 200);
                }else if(event.clientX <= 100){
                    $(".player").css("left", 0);
                }else{
                    $(".player").css("left", event.clientX - 100);  
                }                
            });            
        });      
    }

    //Definimos las variables:
    var y=0;           
    var x=0;
    var controlY=1;  
    var controlX=1;  
    var velocidad=3;    

    setInterval(function mover(){
        var ventana_ancho = $(window).width();
        var ventana_alto = $(window).height();
        //Eje Y
        if(controlY==1){ 
            y+=velocidad;
        }else{         
            y-=velocidad;
        }
        if(y<=0){
            controlY=1;
            y=0;
        }else if(y >= ventana_alto-30){ 
        // Esto significa si y es mayor o igual a la altura que tiene el lienzo menos el tamaño de la imagen

            controlY = 0;
            y = ventana_alto-30;
        }

        //Eje X
        if(controlX==1){ 
            x+=velocidad;
        }else{         
            x-=velocidad;
        }
        if(x<=0){
            controlX=1;
            x=0;
        }else if(x >= ventana_ancho-30){
            controlX=0;
            x = ventana_ancho-30;
        }
        /*
        var ball = document.getElementById("ball").getBoundingClientRect();
        var drawerBricks = document.getElementById("drawerBricks").getBoundingClientRect();
        var player = document.getElementById("player").getBoundingClientRect();

        if(ball.bottom == player.top || ball.left == player.right || ball.right == player.left){
            if(ball.bottom == player.top){
                controlY = 0;            
                controlX=0;
                y = ventana_alto-30;
                x = ventana_ancho-30;                 
            }
            if(ball.left == player.right){
                console.log('choco derecha');
                controlY = 0;            
                controlX=0;
                y = ventana_alto-30;
                x = ventana_ancho-30;                
            }
            if(ball.right == player.left){
                controlY = 0;            
                controlX=0;
                y = ventana_alto-30;
                x = ventana_ancho-30;                 
            }           
        }
        */
        document.getElementById("ball").style.left=String(x)+"px";
        document.getElementById("ball").style.top=String(y)+"px";
         
        
    },6);    


      
}