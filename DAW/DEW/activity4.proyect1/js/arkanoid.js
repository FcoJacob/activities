var score = 0;
document.getElementById('score').innerHTML = "<h4 style='color: white;'>Score: "+score+"</h4>";
document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i></h4>";

printStage();
var dato;
function borrar(dato){
    console.log(dato);
    dato = dato;
}

function printStage(){    
    
    var contenedor = document.getElementById('drawerBricks');
    var result = "<div>";
    var level = [
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}],
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}],
        [{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3},{life: 3}], //this line with life: 0 means empty space
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2},{life: 2}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1},{life: 1}],
        [{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0},{life: 0}],
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
    var velocidad=1;    
    var lifes = 3;        
    var movimiento = setInterval(function mover(){        
            var ventana_ancho = $(window).width();
            var ventana_alto = $(window).height();
            var paddle = document.getElementById('player').getBoundingClientRect();
            
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

            //Eje Y
            if(controlY==1){ 
                y+=velocidad;
            }else{         
                y-=velocidad;
            }
            if(y<=0){
                controlY=1;
                y=0;
            }else if(y >= ventana_alto-paddle.height-60){                 
            // Esto significa si y es mayor o igual a la altura que tiene el lienzo menos el tamaño de la imagen                  
                if(x > paddle.x && x < paddle.x + paddle.width) {
                    console.log(paddle.x+paddle.width+", = "+x); 
                    score += 100;
                    document.getElementById('score').innerHTML = "<h4 style='color: white;'>Score: "+score+"</h4>";
                    y = y-60; 
                    controlY = 0;     
                }else if(y >= ventana_alto-30){   
                            
                    lifes--;                    
                    if(lifes >= 3){
                        document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i></h4>";
                    }else if(lifes == 2){
                        document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i><i class='material-icons'>favorite_border</i></h4>";
                    }else if(lifes == 1){
                        document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons' style='color: red;'>favorite</i><i class='material-icons'>favorite_border</i><i class='material-icons'>favorite_border</i></h4>";
                    }else if(lifes == 0){                
                        document.getElementById('life').innerHTML = "<h4 style='color: red;'>Life: <i class='material-icons'>favorite_border</i><i class='material-icons'>favorite_border</i><i class='material-icons'>favorite_border</i></h4>";
                    }else{  
                        var restarLife = confirm('GAME OVER!!! \n ¿Deseas volver a jugar?'); 
                        if(restarLife){
                            lifes = 3;
                            document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i><i class='material-icons' style='color: red;'>favorite</i></h4>";
                            velocidad = 1;
                        }else if(!restarLife){                                      
                            lifes = 0;
                            velocidad = 0;
                            document.getElementById('life').innerHTML = "<h4 style='color: white;'>Life: <i class='material-icons'>favorite_border</i><i class='material-icons'>favorite_border</i><i class='material-icons'>favorite_border</i></h4>";
                            location.href = "./";  
                            alert('Hasta Pronto!!');
                            clearInterval(movimiento);                                                                        
                        }                    
                    } 
                    y = ventana_alto-30;   
                    controlY = 0;    
                }                
            }             
                       

            //$('.brick').removeClass('hightlight');
            /*$('.row').each(function () {
                var bounds = this.getBoundingClientRect();
                if (bounds.top <= y && bounds.bottom >= y) {
                $(this).children('.brick').each(function () {
                    var bounds = this.getBoundingClientRect();
                    if (bounds.left <= x && bounds.right >= x) {
                    $(this).addClass('brickDestroy');                        
                        controlY = 0;
                        y = y-30;
                    }
                });
                }
            }); */
            
            $('.row').each(function () {                                                                //por filas en la tabla
                var bounds = this.getBoundingClientRect();                                              //bordes y dimensiones de la fila
                if (y <= bounds.top && y >= bounds.bottom) {                                            //si esta dentró de la fila
                    $(this).children('.brick').each(function () {                                       //miramos por cada bloque hijo de esa fila
                        var bounds = this.getBoundingClientRect();                                      //bordes y dimensiones del bloque
                        var ball = document.getElementById('ball').getBoundingClientRect();             //bordes y dimensiones de la bola
                        if (bounds.left <= ball.left && bounds.right >= ball.right ) {                  //esta dentro de su espacio (width)
                                            
                            if(bounds.top <= ball.bottom){                                              //choco la bola por encima
                                console.log('choco arriba');
                                $(this).addClass('brickDestroy');                        
                                controlY = 0;
                                y = y-15; 
                            }else if(bounds.bottom <= ball.top){                                        //choco la bola por abajo
                                console.log('choco abajo');
                                $(this).addClass('brickDestroy');                        
                                controlY = 0;
                                y = y-15;
                            }
                            
                        }else if(bounds.top <= ball.top && bounds.bottom >= ball.bottom){               //esta dentro de su espacio (height)
                            
                            if(bounds.right <= ball.left){                                              //choco la bola por la derecha
                                console.log('choco derecha');
                                $(this).addClass('brickDestroy');                        
                                controlY = 0;
                                y = y-15; 
                            }else if(bounds.left <= ball.right){                                        //choco la bola por la izquierda
                                console.log('choco izquierda');
                                $(this).addClass('brickDestroy');                        
                                controlY = 0;
                                y = y-15;
                            }

                        }
                    });
                }
            }); 
            document.getElementById("ball").style.left=String(x)+"px";
            document.getElementById("ball").style.top=String(y)+"px";
        },1);   
}