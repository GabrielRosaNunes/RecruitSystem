var controlMenu = 0;
$(document).ready(function(){

    $("#toggler").click(function(){
        if (controlMenu == 0 ) {
            $("#menu, #menu div#menudiv,#menuUl,#menuUl li").animate({
                width: "0px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    largura = $("#menu").width();
                    $("#conteudo").attr("style","float:left;padding-top:76px;padding-left:"+largura+"px;width:100%;overflow-x: auto");
                    if(progress > 0.60){
                        $("#menuUl li").attr('style','display:none')
                    }
                }
            });
            controlMenu = 1;
        } else {

            $("#menu, #menu div#menudiv,#menuUl,#menuUl li").animate({
                width: "300px"
            },{
                duration: 500,
                progress: function(animation, progress, msRemaining) {
                    largura = $("#menu").width();
                    $("#conteudo").attr("style","float:left;padding-top:76px;padding-left:"+largura+"px;width:100%;overflow-x: auto");
                    if(progress > 0.60){
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