// alert("Jquery is enabled!!!");
var userSelection = "";
var choices_sel = ["rock","paper","scissors","spock","lizard"];
var choices_sel_ply = ["rock","paper","scissors","spock","lizard"];
var result = [" ties ", " beats ", " loses to "]
var player_val = "";
var comp_val = "";
var started = false;

// 2. Let player click and choose and option from rock, Scissors, Spock, Lizard, Paper
$("#rock").click(function(){
    // alert("Rock");
    player_val = "rock";
    $(".img1").attr("src", "./images/rock.png");
    compSelection();
    hideImages(userSelection);
    compare(player_val, comp_val);
    started = true;
})

$("#scissors").click(function(){
    // alert("Scissors");
    player_val = "scissors";
    $(".img1").attr("src", "./images/scissors.png");
    compSelection();
    hideImages(userSelection);
    compare(player_val, comp_val);
    started = true;
})

$("#paper").click(function(){
    // alert("Paper");
    player_val = "paper";
    $(".img1").attr("src", "./images/paper.png");
    hideImages(userSelection);
    compSelection();
    compare(player_val, comp_val);
    started = true;
})

$("#lizard").click(function(){
    // alert("Lizard");
    player_val = "lizard";
    $(".img1").attr("src", "./images/lizard.png");
    hideImages(userSelection);
    compSelection();
    compare(player_val, comp_val);
    started = true;
})

$("#spock").click(function(){
    // alert("Spock");
    player_val = "spock";
    $(".img1").attr("src", "./images/spock.png");
    hideImages(userSelection);
    compSelection();
    compare(player_val, comp_val);
    started = true;
})


function hideImages(imageSelected){
    for(i=0; i < choices_sel.length; i++){
        $("#"+choices_sel[i]).css("display","none");
        $(".options").css("display","grid");
        $(".options").css("margin-left","1px");
        $(".options").css("grid-template-columns","1px");
        $(".options").css("gap","1px");
        }
    $(".head1").css("display","block");
    $(".head1").text("Player has chosen "+ player_val);
}



// 3. Randomly pick a choice for the computer create a function for this and return the choice.
function compSelection(){
    var randomNumber = Math.floor(Math.random() * 5);
    var compSel = choices_sel[randomNumber];
    let index = choices_sel.indexOf(choices_sel[randomNumber]);
    comp_val = index;
    var imagePath = "./images/"+compSel+".png";
    $(".head2").css("display","block");
    $(".head2").text("Computer has chosen "+ compSel);
    $(".img2").attr("src", imagePath);    
    // console.log("compval is "+ comp_val);
    // console.log("player val is "+ player);
    
    // alert(comp_val);
}

// 4. compare the values using the logic and give the result.
function compare(player_value, comp) 
{
    let player = choices_sel_ply.indexOf(player_value);
    //console.log("PLayer picked "+ player_value);
    //console.log("PLayer picked "+ player_value);
    //comp = choices_sel.indexOf(choices_sel[randomNumber]);
    dif = player - comp;
    if (dif <0){
        dif += choices_sel.length;
    }
    while(dif > 2) {
        dif -= 2; // 3 - 2 => 1
      }
      
    if (result[dif] === " ties " ){
        $(".head3").text("Tied");
        $("h1").text("Press any key to continue...");
    }
    else if (result[dif] === " beats "){
        $(".head3").text("Player Wins");
        $("h1").text("Press any key to continue...");
    }
    else if (result[dif] === " loses to "){
        $(".head3").text("Computer Wins");
        $("h1").text("Press any key to continue...");
    }
    //alert(player + result[dif] + comp);

}


// 5. reset the game for round 2. 
$(document).keypress(function(){
    if(started === true){
        $("h1").text("Rock Paper Sissors Lizard Spock");
        location.reload();
    }
})
