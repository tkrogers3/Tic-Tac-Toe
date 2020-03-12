 
/*Reset Button{

   What does it need to do?

it needs to call the resetGame function on click{



   reset.addEventListener("click", newGame);
}
   It needs to reset the initial variables {

var state = 0;
var turn = true;
var clicks = 0;
var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0];

 }

 It needs to build the UI 
 function init() {
    createTitle();
    createBoard();
    createStatusBar();
 }
}
*/
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 */ Steps to creating a good product


Initialization -
1. Set State . What is the default layout?

[
0.1- Title {
    Tic-Tac-Toe
}

0.2 Board { 9 tiles-  3 x 3.    3 Rows, 3 columns per row.

board - clear ;
}

0.3 UI Display 
[ [Start Button] [Game Status/ Hidden until state 1] [Player 1 = X Player 2 = O ]]


}
]



State 1 

1.1 { 
   Once Start button is clicked-

   Blank Board

   [ Start button becomes reset Button] [Player 1 Turn ] [Player 1 = X Player 2 = O ]]
  

Tile click should check to see if game is over- All
possible Winning/Tie outcomes.


   State 2
 Once player 1 clicks a tile 
all  should happen:
 
1.2  X goes in tile. tile is locked. 
 Tile click should check to see if game is over- All
 possible Winning/Tie outcomes, if game is over. If game not over, go
 to player 2 turn.

1.3 = Game Status Bar- 
 [[reset button] [Player 2 Turn] [player 1 = x player 2 = O]]


 Once player 2 clicks a tile 
all  should happen when tile is clicked:

O goes in tile. tile is locked.

Game Status Bar- 
 [[reset button]
[Player 2 Wins! /Tie/ Player 1 Turn]
 [player 1 = x player 2 = O]]

}



state 2{

Winner State- 

Winning 3 tiles in a row across/diagonal/vertical;
[0,1,2,3,4,5,6,7,8,9]
[0, 1, 2] [3,4,5] [6,7,8] [0,3,6][1,4,7][2,5,8][0,4,8][2,4,6]

Player Display-
[Player 1 :X
Player 2 : O
Player "winner" Wins!]

Button says "reset"
}

State 4 {
Tie

}





*/















/* create a title for the page.
Create an h1 element in JS.
document.

initialize board-  9 tiles.

3 rows/ 3 columns per row. 
*/



/* Set 2 player option. 
Player 1   & Player 2

assign player 1 the X character
assign Player 2 the O character

When Player 1 clicks tile, lock
that tile and change state to 
player 2 where Player 2
can only pick an open square
and can play the O character
in an open spot. 

If game is over from 3 matching 
symbols , game is over. 

9 Tiles in an array- INDEX 0-8.


