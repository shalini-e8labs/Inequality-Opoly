var windows_height = $(window).height(); 
var windows_width = $(window).width(); 
// dextop
// width: 3840px
if(windows_height == 2160){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_2160");
}
// width: 3000px
if(windows_height == 2000){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_2000");
}

// width: px tablet
if(windows_height == 1824){
    $(".wapper").addClass("tb_response");
    $(".wapper").addClass("tb_1824");
}

// width: 1920px
if(windows_height == 1200){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_1200");
}
// width: 1920px
if(windows_height == 1080){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_1080");
}
// width: 16802px
if(windows_height == 1050){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_1050");
}
// width: 1600px and 1400px
if(windows_height == 900){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_900");
}
// width: 1366px
if(windows_height == 768){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_768");
    
}
// width: 1280px
if(windows_height == 800){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_800");
}
// width: px
if(windows_height == 767 ||  windows_width == 1024 ){
    $(".wapper").addClass("desk_response");
    $(".wapper").addClass("wh_768");
    $(".wapper").addClass("width_1024");
}
// width: px
//tablet
if(windows_height == 2048){
    $(".wapper").addClass("tb_response");
    $(".wapper").addClass("tb_2048");
    
}
// width: px
if(windows_height == 1824){
    $(".wapper").addClass("tb_response");
    $(".wapper").addClass("tb_1824");
}
// width: 2560px
if(windows_height == 1600){
    $(".wapper").addClass("tb_response");
    $(".wapper").addClass("tb_1600");
}

var sreen_width = parseFloat(window.innerWidth);
        var sreen_height = parseFloat( window.innerHeight);

        function insertStyleSheetRule(ruleText){
            let sheets = document.styleSheets;
            if(sheets.length == 0){
                let style = document.createElement('style');
                style.appendChild(document.getElementsByClassName("Gameboard-playboard-main"));
                document.head.appendChild(style);
            }
            let sheet = sheets[sheets.length - 1];
            sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length);
        }

        //Set Gameboard width and height
        var gameboard_width  = sreen_width-240;
        var gameboards = document.getElementsByClassName("gameplay_game")[0];
        gameboards.style.width = ""+gameboard_width+"px";
        gameboards.style.height = ""+gameboard_width+"px";

        // payboard_user
        let payboard_user = document.querySelector('.payboard_user');
        let width = Number(payboard_user.offsetWidth);
        let height = Number(payboard_user.offsetHeight);
        var payboard_user_width = document.getElementsByClassName("payboard_user")[0];
        payboard_user_width_dae = width + 140;
        payboard_user_width.style.width = ""+payboard_user_width_dae+"px";


        //set top of Gameboard
        var gameboards_set_top = gameboard_width - sreen_height + height;
        if (gameboards_set_top > 0) {
            gameboards.style.top = "-"+gameboards_set_top+"px";
        }else{
            gameboards.style.top = gameboards_set_top+"px";
        }

        if(sreen_width < sreen_height){
            document.getElementById('Game-tab_top').className += ' Tab_top_view'   
            //gameplay_gameboard_wapper 
            let gameplay_gameboard_wapper = document.querySelector('.gameplay_gameboard_wapper');
            let gameplay_gameboard_wapper_width = Number(gameplay_gameboard_wapper.offsetWidth);
            let gameplay_gameboard_wapper_height = Number(gameplay_gameboard_wapper.offsetHeight);

             //set top of Gameboard
            var gameboards_set_top = gameplay_gameboard_wapper_height - gameboard_width;
            gameboards.style.top = +gameboards_set_top+"px";
        }

        //game start box
        var player =  $(".Gameboard-playboard-start").width();
        var divaid = player/2;
        $(".player_dise").css({"right":divaid });
        //game box 1
        var game_box =  $(".Gameboard-playboard-1").width();
        var game_box_divaids = game_box*5;
        var game_box_divaid = game_box/2;
        var go_plyer =  player + game_box_divaids + game_box_divaid;
       
        //
        document.addEventListener("DOMContentLoaded", event =>{
            insertStyleSheetRule("@keyframes player_id_1 { 0% {right: "+0+"px;}  100%{right: "+go_plyer+"px;}");
        });
       /* $("#rolling_dise").click(function(){
            $(".landed_no_pick").show();
        });*/
        $("#rolling_dise").click(function(){
            $("#player_id_1").show();
        });
        