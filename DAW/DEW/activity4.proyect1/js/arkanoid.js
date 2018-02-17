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
    
    window.onmousemove = handleMouseMove;
    //var intro;

    function handleMouseMove(event) {
        var x = event.clientX;
        var y = event.clientY;
        var ventana_ancho = $(window).width();
        var ventana_alto = $(window).height();
        
        $(document).ready(function(){
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

        //console.log(x+", "+y)
        $('#brick').removeClass('hightlight');
        $('.row').each(function () {

            var bounds = this.getBoundingClientRect();

            if (bounds.bottom >= y && bounds.top <= y) {

                $(this).children('.brick').each(function () {

                    var bounds = this.getBoundingClientRect();
                    if (bounds.left <= x && bounds.right >= x) {                        
                        $(this).addClass('hightlight');
                    }

                });
            
            }

        });
    }
}