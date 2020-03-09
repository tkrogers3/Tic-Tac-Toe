
let title = document.createElement("h1");  // variable title- create H1 element 
title.innerHTML="Tic-Tac-Toe"; // h1 title Tic-Tac-Toe
title.className=" h1 text-center"; //center HTML text
title.id= "h1 "; //sets title id to h1
let div1=document.createElement("div");
div1.appendChild(title); //append title to div1, that sets h1  "Tic-Tac-Toe"  to id div1
document.body.appendChild(div1); // append child div1 to parent body

function createGame() {
    let container = document.createElement("div");  //set variable container for new div created.
    container.id="container"; //set id to container
    container.className= "container col-12"; // sets bootstrap class name to container
    
    
    for (let i =0; i< 3; i++) {          //for loop to create 3 rows
        let row = document.createElement("div");    //create a new row through each iteration 
        row.className= "row";    //set new rows class to "row"
        
        for(let j =0; j< 3; j++) {            //for loop to create 3 columns
            let column = document.createElement("div"); //create a new column through each iteration
            column.className="col-4 border"; //sets new column class name to "column"
            row.appendChild(column); //appends child column to parent row
            
        }
        container.appendChild(row);    //appends child row to parent container.
    }
    document.body.appendChild(container);  //appends container to parent body.
    
}


createGame();

/* pseudo code create rows and columns 
1 row with 3 columns  */



//document.body.appendChild