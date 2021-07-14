// Tutiral stap show and animation 
    // windows with
    var sreen_width = parseFloat(window.innerWidth);
    var sreen_height = parseFloat( window.innerHeight);
    if (sreen_width > sreen_height) {
        // gameboard
        var gameboard_width  = sreen_width-240;
        var gameboards = document.getElementsByClassName("Gameboard-id-1")[0];
        gameboards.style.width = ""+gameboard_width+"px";
        gameboards.style.height = ""+gameboard_width+"px";
        // gameboard set top and left with animation

        // stap 1
        let tutorial_stap_1 = document.querySelector('.tutorial-stap-1');
        let width = Number(tutorial_stap_1.offsetWidth);
        let height = Number(tutorial_stap_1.offsetHeight);

        //set left side
        var gameboards_set_left = width-110;
        gameboards.style.left = ""-gameboards_set_left+"px";
    
        //set top side
        var gameboards_set_top = gameboard_width - sreen_height + height / 3;
        if (gameboards_set_top > 0) {
            gameboards.style.top = "-"+gameboards_set_top+"px";
        }else{
            gameboards.style.top = gameboards_set_top+"px";
        }
        
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
        insertStyleSheetRule("@keyframes color-me-in { 0% { transform: rotateZ(90deg); position: relative; left: -51%; top: -88%; } 50%{transform: rotateZ(0deg); left: 0%; top: 0%; width: "+sreen_height+"px; height: "+sreen_height+"px;} 75% { left: -"+gameboards_set_left+"px; top: -"+gameboards_set_top+"px;; width: "+gameboard_width+"px; height: "+gameboard_width+"px; } 100%{left: -"+gameboards_set_left+"px; top: -"+gameboards_set_top+"px; width: "+gameboard_width+"px; height: "+gameboard_width+"px } }");

        var Gameboardtop = gameboards_set_top;
        var Gameboardleft = gameboards_set_left;

        // //stap 2
        document.getElementsByClassName("play-btn stap-1")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-1");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-2");

            //display none stap 1 
            document.getElementsByClassName("tutorial-stap-1")[0].style.display = "none";
            //display show stap 2 
            document.getElementsByClassName("tutorial-stap-2")[0].style.display = "flex";
            
            //gameboard width
            let playboard_start = document.querySelector('.Gameboard-playboard-start');
            let playboard_start_width = Number(playboard_start.offsetWidth);

            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = Number(playboard_stap_1.offsetWidth); 
            let playboard_stap_1_center = playboard_stap_1_width/2;

            let  tutorial_stap_2 = document.querySelector('.tutorial-stap-2');
            let  tutorial_stap_2_width = tutorial_stap_2.offsetWidth; 
            let  tutorial_stap_2_height = Number(tutorial_stap_2.offsetHeight);

            var tutorial_stap_2_10 = 10*tutorial_stap_2_width/100;
            var tutorial_stap_2_8 = 8*tutorial_stap_2_width/100;
            var tutorial_stap_2_8_right = tutorial_stap_2_10+tutorial_stap_2_8;

            let tutorial_stap_2_right = playboard_stap_1_center+playboard_start_width+tutorial_stap_2_8_right ;

            document.getElementsByClassName("tutorial-stap-2")[0].style.right = tutorial_stap_2_right+"px";

            //game board chande 
            var gameboards_set_top_stap_2 = gameboard_width - sreen_height + tutorial_stap_2_height;
            gameboards.style.top = "-"+gameboards_set_top_stap_2+"px";
            Gameboardtop = gameboards_set_top_stap_2;

            insertStyleSheetRule("@keyframes Gameboard-id-2 { 0% {top: -"+gameboards_set_top+"px;}  100%{top: -"+gameboards_set_top_stap_2+"px;}");
            
        });

        //stap 3
        document.getElementsByClassName("play-btn stap-2")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-2");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-3");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-2")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-3")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = Number(playboard_stap_1.offsetWidth); 

            //game board chande 
            
            let stap_3 =  Gameboardleft-playboard_stap_1_width;
            document.getElementsByClassName("Gameboard-id-3")[0].style.left = "-"+stap_3+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-3 { 0% {left: -"+Gameboardleft+"px; top:-"+Gameboardtop+";}  100%{left: -"+stap_3+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_3;

        });
        
        //stap 4
        document.getElementsByClassName("play-btn stap-3")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-3");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-4");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-3")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-4")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = Number(playboard_stap_1.offsetWidth) * 3; 

            //game board chande 
            
            let stap_4 =  Gameboardleft-playboard_stap_1_width;
            document.getElementsByClassName("Gameboard-id-4")[0].style.left = "-"+stap_4+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-4 { 0% {left: -"+Gameboardleft+"px; top:-"+Gameboardtop+";}  100%{left: -"+stap_4+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_4;

        });

        //stap 5
        document.getElementsByClassName("play-btn stap-4")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-4");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-5");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-4")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-5")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = Number(playboard_stap_1.offsetWidth) * 3; 

            //game board chande
            let stap_5 = playboard_stap_1_width - Gameboardleft;
            
            document.getElementsByClassName("Gameboard-id-5")[0].style.left = stap_5+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-5 { 0% {left: -"+Gameboardleft+"px; top:"+Gameboardtop+";}  100%{left: "+stap_5+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_5;

            console.log(Gameboardleft);

        });

        //stap 6
        document.getElementsByClassName("play-btn stap-5")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-5");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-6");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-5")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-6")[0].style.display = "flex";

            //gameboard width
            let playboard_start = document.querySelector('.Gameboard-playboard-start');
            let playboard_start_width = Number(playboard_start.offsetWidth / 2 );
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = Number(playboard_stap_1.offsetWidth); 

            //game board chande
            let stap_6 = playboard_start_width + playboard_stap_1_width + Gameboardleft;
            
            document.getElementsByClassName("Gameboard-id-6")[0].style.left = stap_6+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-6 { 0% {left: "+Gameboardleft+"px; top:"+Gameboardtop+";}  100%{left: "+stap_6+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_6;

        });

        //stap 7
        document.getElementsByClassName("play-btn stap-6")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-6");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-7");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-6")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-7")[0].style.display = "flex";

            document.getElementsByClassName("Gameboard-id-7")[0].style.left = Gameboardleft+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-7 { from { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(0deg); }  to { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-90deg); }");

        });

        //stap 8
        document.getElementsByClassName("play-btn stap-7")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-7");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-8");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-7")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-8")[0].style.display = "flex";

            document.getElementsByClassName("Gameboard-id-8")[0].style.left = Gameboardleft+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-8 { from { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-90deg); }  to { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-180deg); }");

        });

        //stap 9
        document.getElementsByClassName("play-btn stap-8")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].style.display = "none";
            document.getElementsByClassName("Gameboard-id-9")[0].style.display = "flex";
            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-8")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-9")[0].style.display = "block";
        });

        //stap 10
        document.getElementsByClassName("play-btn stap-9")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("Gameboard-id-9")[0].style.display = "none";
            document.getElementsByClassName("Gameboard-id-10")[0].style.display = "flex";
            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-9")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-10")[0].style.display = "block";
        });

        //stap 11
        document.getElementsByClassName("play-btn stap-10")[0].addEventListener("click", function() {
            window.location = "file:///E:/Divyesh/Inequality-Opoly/Inequality-Opoly/joing-room.html";
        });
    }  
    
    if (sreen_width < sreen_height) {
        // gameboard
        var gameboard_width  = sreen_height-240;
        var gameboards = document.getElementsByClassName("Gameboard-id-1")[0];
        gameboards.style.width = ""+gameboard_width+"px";
        gameboards.style.height = ""+gameboard_width+"px";
        // gameboard set top and left with animation

        // stap 1
        let tutorial_stap_1 = document.querySelector('.tutorial-stap-1');
        let width = parseFloat(tutorial_stap_1.offsetWidth);
        let height = parseFloat(tutorial_stap_1.offsetHeight);
        //set left side
        var gameboards_set_left = gameboard_width - sreen_width;
        var left_stap_1 = gameboards_set_left + width;
        gameboards.style.left = ""-left_stap_1+"px";
    
        //set top side
        var gameboards_set_top = height / 3;;
        gameboards.style.top = "-"+gameboards_set_top+"px";
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
        insertStyleSheetRule("@keyframes color-me-in { 0% { transform: rotateZ(90deg); position: relative; left: -51%; top: -88%; } 50%{transform: rotateZ(0deg); left: 0%; top: 0%; width: "+sreen_height+"px; height: "+sreen_height+"px;} 75% { left: -"+left_stap_1+"px; top: -"+gameboards_set_top+"px;; width: "+gameboard_width+"px; height: "+gameboard_width+"px; } 100%{left: -"+left_stap_1+"px; top: -"+gameboards_set_top+"px; width: "+gameboard_width+"px; height: "+gameboard_width+"px } }");

        var Gameboardtop = gameboards_set_top;
        var Gameboardleft = left_stap_1;

        //stap 2
        document.getElementsByClassName("play-btn stap-1")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-1");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-2");

            //display none stap 1 
            document.getElementsByClassName("tutorial-stap-1")[0].style.display = "none";
            //display show stap 2 
            document.getElementsByClassName("tutorial-stap-2")[0].style.display = "flex";
            
            //gameboard width
            let playboard_start = document.querySelector('.Gameboard-playboard-start');
            let playboard_start_width = parseFloat(playboard_start.offsetWidth);
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = parseFloat(playboard_stap_1.offsetWidth); 
            let playboard_stap_1_center = playboard_stap_1_width/2;

            let  tutorial_stap_2 = document.querySelector('.tutorial-stap-2');
            let  tutorial_stap_2_width = tutorial_stap_2.offsetWidth; 
            let  tutorial_stap_2_height = parseFloat(tutorial_stap_2.offsetHeight);

            var tutorial_stap_2_10 = 10*tutorial_stap_2_width/100;
            var tutorial_stap_2_8 = 8*tutorial_stap_2_width/100;
            var tutorial_stap_2_8_right = tutorial_stap_2_10+tutorial_stap_2_8+120;

            let tutorial_stap_2_right = playboard_stap_1_center+playboard_start_width+tutorial_stap_2_8_right ;

            document.getElementsByClassName("tutorial-stap")[0].style.right = tutorial_stap_2_right+"px";

            //game board chande 
            var gameboards_set_top_stap_2 = gameboard_width - sreen_height + tutorial_stap_2_height;
            gameboards.style.top = "-"+gameboards_set_top_stap_2+"px";
            insertStyleSheetRule("@keyframes Gameboard-id-2 { 0% {top: -"+gameboards_set_top+"px;}  100%{top: -"+gameboards_set_top_stap_2+"px;}");
            Gameboardtop = gameboards_set_top_stap_2;
        });

        //stap 3
        document.getElementsByClassName("play-btn stap-2")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-2");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-3");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-2")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-3")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = parseFloat(playboard_stap_1.offsetWidth); 
            //game board chande 
            
            let stap_3 =  Gameboardleft-playboard_stap_1_width-120;
            document.getElementsByClassName("Gameboard-id-3")[0].style.left = "-"+stap_3+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-3 { 0% {left: -"+Gameboardleft+"px; top:-"+Gameboardtop+";}  100%{left: -"+stap_3+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_3;

        });
        
        //stap 4
        document.getElementsByClassName("play-btn stap-3")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-3");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-4");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-3")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-4")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = parseFloat(playboard_stap_1.offsetWidth) * 3; 

            //game board chande 
            
            let stap_4 =  Gameboardleft-playboard_stap_1_width;
            document.getElementsByClassName("Gameboard-id-4")[0].style.left = "-"+stap_4+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-4 { 0% {left: -"+Gameboardleft+"px; top:-"+Gameboardtop+";}  100%{left: -"+stap_4+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_4;

        });

        //stap 5
        document.getElementsByClassName("play-btn stap-4")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-4");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-5");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-4")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-5")[0].style.display = "flex";
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = parseFloat(playboard_stap_1.offsetWidth) * 3; 

            //game board chande
            let stap_5 = playboard_stap_1_width - Gameboardleft;
            
            document.getElementsByClassName("Gameboard-id-5")[0].style.left = stap_5+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-5 { 0% {left: -"+Gameboardleft+"px; top:"+Gameboardtop+";}  100%{left: "+stap_5+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_5;

            console.log(Gameboardleft);

        });

        //stap 6
        document.getElementsByClassName("play-btn stap-5")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-5");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-6");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-5")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-6")[0].style.display = "flex";

            //gameboard width
            let playboard_start = document.querySelector('.Gameboard-playboard-start');
            let playboard_start_width = parseFloat(playboard_start.offsetWidth / 2 );
            
            //gameboard width
            let playboard_stap_1 = document.querySelector('.Gameboard-playboard-1');
            let playboard_stap_1_width = parseFloat(playboard_stap_1.offsetWidth); 

            //game board chande
            let stap_6 = playboard_start_width + playboard_stap_1_width + Gameboardleft;
            
            document.getElementsByClassName("Gameboard-id-6")[0].style.left = stap_6+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-6 { 0% {left: "+Gameboardleft+"px; top:"+Gameboardtop+";}  100%{left: "+stap_6+"px; top:-"+Gameboardtop+";}");

            Gameboardleft = stap_6;

        });

        //stap 7
        document.getElementsByClassName("play-btn stap-6")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-6");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-7");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-6")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-7")[0].style.display = "flex";

            document.getElementsByClassName("Gameboard-id-7")[0].style.left = Gameboardleft+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-7 { from { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(0deg); }  to { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-90deg); }");

        });

        //stap 8
        document.getElementsByClassName("play-btn stap-7")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].classList.remove("Gameboard-id-7");
            document.getElementsByClassName("tutorial-playariya")[0].classList.add("Gameboard-id-8");

            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-7")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-8")[0].style.display = "flex";

            document.getElementsByClassName("Gameboard-id-8")[0].style.left = Gameboardleft+"px";
        
            insertStyleSheetRule("@keyframes Gameboard-id-8 { from { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-90deg); }  to { left: "+Gameboardleft+"px; top:"+Gameboardtop+"; transform: rotateZ(-180deg); }");

        });

        //stap 9
        document.getElementsByClassName("play-btn stap-8")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("tutorial-playariya")[0].style.display = "none";
            document.getElementsByClassName("Gameboard-id-9")[0].style.display = "flex";
            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-8")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-9")[0].style.display = "block";
        });

        //stap 10
        document.getElementsByClassName("play-btn stap-9")[0].addEventListener("click", function() {
            //add and remvoe class in gameboard
            document.getElementsByClassName("Gameboard-id-9")[0].style.display = "none";
            document.getElementsByClassName("Gameboard-id-10")[0].style.display = "flex";
            //display none stap 2 
            document.getElementsByClassName("tutorial-stap-9")[0].style.display = "none";
            //display show stap 3 
            document.getElementsByClassName("tutorial-stap-10")[0].style.display = "block";
        });

        //stap 11
        document.getElementsByClassName("play-btn stap-10")[0].addEventListener("click", function() {
            window.location = "file:///E:/Divyesh/Inequality-Opoly/Inequality-Opoly/joing-room.html";
        });
    }