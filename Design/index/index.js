var controlMenu = 0;
$(document).ready(function(){
    
    $("#toggler").click(function(){
        if (controlMenu == 0 ) {
            $("#menu, #menu div,#menuUl,#menuUl li").animate({
                width: "0px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    tamanho = $("#menu").width();
                    console.log(tamanho);
                    $("#conteudo").attr('style','float:left;padding-top:76px;overflow-x: auto;width:calc(100% - '+tamanho+'px);');
                    if(progress > 0.65){
                        $("#menuUl li").attr('style','display:none')
                    }
                }
            });
            controlMenu = 1;
        } else {
            
            $("#menu, #menu div,#menuUl,#menuUl li").animate({
                width: "300px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    tamanho = $("#menu").width();
                    console.log(tamanho);
                    $("#conteudo").attr('style','float:left;padding-top:76px;overflow-x: auto;width:calc(100% - '+tamanho+'px);');
                    if(progress > 0.65){
                        $("#menuUl li").attr('style','display:block')
                    }
                },
                start: function () {
                    
                }
            });
            controlMenu = 0;
        }
        
    })
})