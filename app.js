const game={
  value:"X",
  turn: "Player X turn",
  game_state : play
}
function valu_intialise(){
  if(game.value==="X")
      game.value="O";
  else
    game.value="X";

  if(game.turn==="Player X turn")
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
      if(count1===3)console.log("Game winner "+game.turn);
}
function check_winner_col(x, y){
      var i=0,count1=0;
      if(y==1)i=1;
      if (y==2)i=2;
      for(j=i;j<i+7;j=j+3){
        if($( "td:eq("+j+")" ).text()===game.value)
        count1++;
      }
      if(count1===3)console.log("Game winner "+game.turn);
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
        console.log(k);
        if($( "td:eq("+k+")" ).text()===game.value)
        count2++;
      }
      if(count1===3 || count2===3)console.log("Game winner "+game.turn);
}
//function to check wheather the game is end or not
function check(){
  var count=0;
  count++;
  if(count==9)console.log("Game Over");
}


// main play function of the game
function play(index,x,y){
  if(!$( "td:eq("+index+")" ).text()){
    $( "td:eq("+index+")" ).text(game.value);
    $("#turn_header").text(game.turn);
    check_winner_row(x,y);
    check_winner_col(x,y);
    check_winner_diagonal(x,y)
    check();
    valu_intialise();
  }
  else console.log("Wrong input");
}
