var controlMenu = 0;
$(document).ready(function(){
    
    $("#toggler").click(function(){
        if (controlMenu == 0 ) {
            $("#menu, #menu div,#menuUl,#menuUl li").animate({
                width: "0px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    if(progress > 0.65){
                        $("#menuUl li").attr('style','display:none')
                    }
                }
            });
            $("#conteudo").animate({
                width: "100%"
            },500);
            controlMenu = 1;
        } else {
            
            $("#menu, #menu div,#menuUl,#menuUl li").animate({
                width: "300px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    if(progress > 0.65){
                        $("#menuUl li").attr('style','display:block')
                    }
                },
                start: function () {
                    $("#conteudo").attr('style','float:left;padding-top:76px;width:calc(100% - 300px);overflow-x: auto');
                }
            });
            controlMenu = 0;
        }
        
    })
})