window.onload= displayBox;
var arrGrid = [[],[],[],[],[],[],[],[],[]];
var x = "X";
var o = "O";
countx = 0;
counto = 0;
var firstPlayer = true;

function displayBox(gridboxes)
{   //Main variable initialisations.
    var grid = document.getElementById("board").childNodes;
    grid.forEach(element => { element.className = "square";});
    gridxo= grid.forEach(element => element.addEventListener("click", addXO));
    grid0= grid.forEach(element => element.addEventListener("mouseover", hoverFunction));
    grid0= grid.forEach(element => element.addEventListener("mouseout", outFunction));
    btn = document.querySelector('button');
    btn.classList.add("hover");
    var statusGet = document.getElementById("status");
    
    //hover function start
    function hoverFunction(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);
        if (event.target !== el) {
            event.target.classList.toggle("hover", true);
        } 
    }
    //hover function ends
    function outFunction(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);
        if (event.target !== el) {
            event.target.classList.toggle("hover");
        } 
    }

    //function to add "X"s and "O"s.
    function addXO(event){
        var el = document.getElementById('div');
        var test = event.target.parentElement ;
        var index = Array.prototype.indexOf.call(test.children, event.target);  
        //This function links the square to the initialized arrar (arrGrid) via indexes  
        if (event.target !== el) {
            if (firstPlayer){
                if (arrGrid[index] == ""){
                    event.target.innerHTML = x;
                    countx+=1
                    firstPlayer = false; // this is used to alternate between Player X and Player o.
                    arrGrid[index] = x; // this sets the index position in the array to that which was selected for the actionListener.
                    function changeColor(event) {
                        if (event.target.innerHTML == "X" && event.target.classList.contains("X")== false); { //prevents the color of the "X" from reverting back to default.
                            event.target.classList.add("X");
                        }                     
                    }
                    document.querySelector("div").onclick = changeColor; // calls the function to change the color of X.

                    //if-statements to validate winners.
                    if (arrGrid[0] == "X" && arrGrid[1] == "X" && arrGrid[2] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[0] == "X" && arrGrid[3] == "X" && arrGrid[6] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[3] == "X" && arrGrid[4] == "X" && arrGrid[5] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[6] == "X" && arrGrid[7] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[1] == "X" && arrGrid[4] == "X" && arrGrid[7] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[2] == "X" && arrGrid[5] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[0] == "X" && arrGrid[4] == "X" && arrGrid[8] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[6] == "X" && arrGrid[4] == "X" && arrGrid[2] == "X"){
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else{
                        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."; // returns tie if no winner.
                    }
                    btn.addEventListener("click", reset); // reset function for X aspect.
                        function reset(e){
                            arrGrid= [[],[],[],[],[],[],[],[],[]];
                            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
                            event.target.innerHTML="";
                            firstPlayer = true;
                            statusGet.classList.remove("you-won");
                            statusGet.classList.remove("before");
                            statusGet.classList.remove("after");
                        } 
                }
            }else{    
                //This function links the square to the initialized arrar (arrGrid) via indexes
                if (arrGrid[index]==""){
                    event.target.innerHTML = o;
                    counto += 1;
                    arrGrid[index] = o;
                    firstPlayer = true;
                    function changeColor(event) {
                        if (event.target.innerHTML == "O" && event.target.classList.contains("O")== false); { //prevents the color of the "O" from reverting back to default.
                            event.target.classList.add("O");
                        }
                        
                      }
                      document.querySelector("div").onclick = changeColor;
                      btn.addEventListener("click", reset);

                      function reset(e){ //resets the HTML code when clicked for New Game.
                          arrGrid= [[],[],[],[],[],[],[],[],[]];
                          document.getElementById("status").innerHTML = "Tie.";
                          event.target.innerHTML="";
                          firstPlayer = true;
                          statusGet.classList.remove("you-won");
                          statusGet.classList.remove("before");
                          statusGet.classList.add("after");  

                    //if statements to evaluate winners for the O's.
                    }if (arrGrid[0] == "O" && arrGrid[1] == "O" && arrGrid[2] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[0] == "O" && arrGrid[3] == "O" && arrGrid[6] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[3] == "O" && arrGrid[4] == "O" && arrGrid[5] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if(arrGrid[6] == "O" && arrGrid[7] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[1] == "O" && arrGrid[4] == "O" && arrGrid[7] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[2] == "O" && arrGrid[5] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[0] == "O" && arrGrid[4] == "O" && arrGrid[8] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");
                    }else if (arrGrid[6] == "O" && arrGrid[4] == "O" && arrGrid[2] == "O"){
                        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                        statusGet.classList.add("you-won");
                        statusGet.classList.add("before");
                        statusGet.classList.add("after");      
                    }else{
                        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."; // returns tie if no winner.
                    }
                }
            } 
        }
    }       
};
    

