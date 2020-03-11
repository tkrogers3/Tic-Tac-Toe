
/*function build(elements, class, id, htmlText){
    let element=document.getElement(elements);
     element.className= class;
     element.id= id;
     element.innerHTML=htmlText;
return element;
} */
var turn = true;
var clicks = 0;
var turns = ["X", "0"];
var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var gameWinners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
state = 0;

// init function creates title, board, and I want it to create my status bar.
function init() {
    createTitle();
    createBoard();
    createStatusBar();
}

function createTitle() {
    let title = document.createElement("h1");// create title
    title.innerHTML = "Tic-Tac-Toe"; // h1 title Tic-Tac-Toe
    title.className = " h1 text-center bg-primary"; //center HTML text
    title.id = "h1 "; //sets title id to h1
    let div1 = document.createElement("div");
    div1.appendChild(title); //append title to div1, that sets h1  "Tic-Tac-Toe"  to id div1
    document.body.appendChild(div1); // append child div1 to parent body

}


function createBoard() {
    let container = document.createElement("div");  //set variable container for new div created.
    container.id = "container"; //set id to container
    container.className = "container col-12 bg-secondary text-center font-weight-bold display-2"; // sets bootstrap class name to container

    /* pseudo code create rows and columns 
    1 row with 3 columns  */
    var k = 0;
    for (var i = 0; i < 3; i++) {          //for loop to create 3 rows
        let row = document.createElement("div");    //create a new row through each iteration 
        row.className = "row";    //set new rows class to "row"

        for (var j = 0; j < 3; j++) {            //for loop to create 3 columns
            let column = document.createElement("div"); //create a new column through each iteration
            column.className = "col-4 border"; //sets new column class name to "column"=
            column.id = k;
            column.addEventListener("click",clickSquare);  // assign the function to the click
            column.removeEventListener("click", clickSquare, true); 
            
            row.appendChild(column); //appends child column to parent row
            k++;
        

        }
        
        container.appendChild(row);    //appends child row to parent container.
    }
    document.body.appendChild(container);  //appends container to parent body.
}

function clickSquare(e) {
    // passes the event as e, automatically for any event 
    console.log(e.target.id);  //event target id is the id of the square
    /*when square click, If Player 1 clicks, print X | If Player 2 clicks, 
    print O to occupy square space and space becomes locked. */
    turn = !turn;
    console.log(turn);
    clicks++;  // adding the clicks
    e.target.innerHTML = turns[Number(turn)]; // updating the view
   // ???????????????? column.removeEventListener("click", clickSquare, true); ???????????//
TODO: //I need to make square unclickable after click. e.target false? 
     

    //how do I store each click in my state? store clicks into an array. 
    clickData[e.target.id] = Number(turn) + 1; // setting the state of the clickData
     if (clicks % 2 === 0){
       gameInfo.innerText="Player 1 turn!"
     }
     else gameInfo.innerText="Player 2 turn!"
    // determine if there is a winner
    checkForWinner();
}

function checkForWinner() {
    /* check through winning array possibilities.
    gameWinners 
    */
    // 0,1,2   1, 1, 1  or 2, 2, 2
    // check if index is zero
    // if not, we need to know if x or 0 won
    // if all of the values = 3, x wins
    // if all of the values total 6, 0 wins

    //if num of clicks == 8 and no winners, it is a draw
    var condition = null;
    for (var i = 0; i < gameWinners.length; i++) {

        var pos1 = gameWinners[i][0]; // 0
        var pos2 = gameWinners[i][1]; // 1
        var pos3 = gameWinners[i][2]; // 2
        var val1 = clickData[pos1];
        var val2 = clickData[pos2];
        var val3 = clickData[pos3];
        if (val1 == 0 || val2 == 0 || val3 == 0) {
            // nobody has won this condition
        } else {
            // we have a potential win
            var total = val1 + val2 + val3; // if total is 3, x wins
            if (total == 3) {
                gameInfo.innerText= "Player 1 wins!"
                condition = 1;  // x
            }

            if (total == 6) {
                gameInfo.innerText= "Player 2 wins!"
                condition = 2; // 0
            }

        }
    }

    if (condition == null && clicks == 9) {
        gameInfo.innerText= "Tie game!"  // we have a tie
    }
}



function createStatusBar() {
    let statusBar = document.createElement("div");  //set variable container for new div created.
    statusBar.id = "statusBar"; //set id to container
    statusBar.className = "container col-12 bg-primary mt-4 justify-content-center text-center";
    let statusRow = document.createElement("div");
    statusRow.className = "row ";
    let statusCol = document.createElement("div");
    var startBtn = document.createElement("button");
    startBtn.className = "btn btn-secondary btn-lg font-weight-bold m-5";
    startBtn.id = "startGame";
    startBtn.innerHTML = "Reset Game";
    statusCol.id = "startGame";
    statusCol.className = "col-4 border";
    let statusCol2 = document.createElement("div");
    statusCol2.className = "col-4 border";
    let infoBox= document.createElement("p");
    infoBox.innerHTML="Player 1 turn!"
    infoBox.id="gameInfo";
    let statusCol3 = document.createElement("div");
    statusCol3.className = "col-4 border font-weight-bold bg-secondary";
    statusCol3.innerHTML = "Player 1: X <br> Player 2:O";
    statusCol2.appendChild(infoBox);
    statusCol.appendChild(startBtn);
    statusRow.appendChild(statusCol);
    statusRow.appendChild(statusCol2);
    statusRow.appendChild(statusCol3);
    statusBar.appendChild(statusRow);
    document.body.appendChild(statusBar);
}
//startBtn.onClick= resetGame;
/*function resetGame () {
state=0;
    init() 
} */



/* let btn = document.createElement("button");  //set variable container for new div created.
btn.innerHTML="Start Game"; //
btn.className=" h1 text-center bg-primary"; //center HTML text */









/* Create startBtn
 set up startBtn id */


