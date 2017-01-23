var display = new Array(22);    //20 rows of playing area, top 2 rows are invisible. The rows are labeled from top to bottom
for (var i = 0; i < 10; i++) {
    display[i] = "          ";    //10 spaces to create empty rows
}

function Update() {
    
    
    
    
    if (display[1] != "          ") {
        gameOver();
    }
}

function newObject() {
    
    
}

function gameOver() {
    
    
}
