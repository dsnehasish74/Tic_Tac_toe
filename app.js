var count=0;
$("#wrong-input").hide();
$("#winner-x").hide();
$("#winner-o").hide();
$("#draw").hide();
const game={
  value:"X",
  turn: "Player X turn",
  state: 0,
}
function valu_intialise(){
  if(game.value==="X")
      game.value="O";
  else
    game.value="X";

  if(game.value==="O")
  game.turn="Player O turn";
  else
  game.turn="Player X turn"

}
function check_winner_row(x, y){
      var i=0,count1=0;
      if(x==1)i=3;
      if (x==2)i=6;
      for(j=i;j<i+3;j++){
        if($( "td:eq("+j+")" ).text()===game.value)
        count1++;
      }
      if(count1===3){
        game.state=1;
        refresh();
        if(game.value==="X"){
          $("#welcome-text").hide("slow");
          $("#winner-x").show("slow");
        }
        else{
          $("#welcome-text").hide("slow");
          $("#winner-o").show("slow");
        }
      }
}
function check_winner_col(x, y){
      var i=0,count1=0;
      if(y==1)i=1;
      if (y==2)i=2;
      for(j=i;j<i+7;j=j+3){
        if($( "td:eq("+j+")" ).text()===game.value)
        count1++;
      }
      if(count1===3){
        game.state=1;
        refresh();
        if(game.value==="X"){
          $("#welcome-text").hide("slow");
          $("#winner-x").show("slow");
        }
        else{
          $("#welcome-text").hide("slow");
          $("#winner-o").show("slow");
        }
      }
}
function check_winner_diagonal(x, y){
      var j,i=0,count1=0,count2=0;
      for(j=i;j<9;j=j+4){
        if($( "td:eq("+j+")" ).text()===game.value)
        count1++;
      }
      var k;
      i=2;
      for(k=i;k<7;k=k+2){
        if($( "td:eq("+k+")" ).text()===game.value)
        count2++;
      }
      if(count1===3 || count2===3){
        game.state=1;
        refresh();
        if(game.value==="X"){
          $("#welcome-text").hide("slow");
          $("#winner-x").show("slow");
        }
        else{
          $("#welcome-text").hide("slow");
          $("#winner-o").show("slow");
        }
      }
}
//function to check wheather the game is end or not
function check(){
  count++;
  if(count==9 && game.state===0){
    refresh();
    $("#welcome-text").hide("slow");
    $("#draw").show("slow");
  }
}


// main play function of the game
function play(index,x,y){
  if(!$( "td:eq("+index+")" ).text()){
    $( "td:eq("+index+")" ).text(game.value);
    check_winner_row(x,y);
    check_winner_col(x,y);
    check_winner_diagonal(x,y)
    check();
    valu_intialise();
    console.log(game.turn);
    $("#turn_header").text(game.turn);
  }

}
function refresh(){
  for(j=0;j<9;j++){
    $( "td:eq("+j+")" ).text("");
  }
}

$("#start-button").click(()=>{
  $("#welcome-text").toggle();
  $("#wrong-input").hide();
  $("#winner-x").hide();
  $("#winner-o").hide();
  $("#draw").hide();
  refresh();
  count=0;
  game.value="X";
  game.turn="Player X turn";
  game.state=0;
});
