$(".born-card").click(function(){
    $(this).addClass("active");
    $(".select-card_back").addClass("active");
    $(".born").hide();
    setTimeout(function () {
        $(".select-card_back,.born-card").hide();    
        $("#select_card_first").show();
    }, 3005);
});

$(".Roll_inheritance").click(function(){
    $("#oner_id").hide();
    $("#oner_inheritance").show();
    $(".dice_throw-img").delay(2000).fadeOut(400);
    $(".dice_throw-img-inner").delay(2500).fadeIn(400);
    $(".dice_throw-img-inner").delay(1000).fadeOut(400);
    $(".pass-number").delay(4500).fadeIn(400);
    setTimeout(function () {
        $(".dice_throw").addClass("active");
        $(".born").show()
        $(".born-card").show();
    }, 6000);  
});

$("#Inheritance-card").click(function(){
    $(this).addClass("active");
    $("#Inheritance-card_select").addClass("active").show();
    $(".born").hide();
    $('.select-card_back').show();
    setTimeout(function () {
        $(".select-card_back,.born-card").hide();    
        $("#first-card-inheritance").show();
    }, 3005);
});

$(".start_game_play").click(function(){
    $("#first-card-inheritance,#oner_inheritance").hide();
    $("#wiet_for_player").delay(1000).fadeIn(400);
    $("#wiet_for_player").delay(1500).fadeOut(400);
    $("#ready_to_play").delay(4000).fadeIn(400);
});

//set bones card in bottom
let born_card = document.querySelector('.born-card');
let width = born_card.offsetWidth;
let height = born_card.offsetHeight;