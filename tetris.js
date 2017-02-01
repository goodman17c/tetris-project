var display;

function init() {
    display = new Array(22);    //20 rows of playing area, top 2 rows are invisible. The rows are labeled from top to bottom
    for (var i = 0; i < 22; i++) {
        display[i] = "          ";    //10 spaces to create empty rows
    }
    newblock(Math.floor(Math.random()*7));
    writeScreen();
}

function newblock(type) {
    this.shape = new Array();
    if (type%7 == 0) {
        this.shape[0]="XXXX";
    } else if (type%7 == 1) {
        this.shape[1]="XXX";
        this.shape[0]="X  ";
    } else if (type%7 == 2) {
        this.shape[1] = "XXX";
        this.shape[0] = "  X";
    } else if (type%7 == 3) {
        this.shape[1] = "XX";
        this.shape[0] = "XX";
    } else if (type%7 == 4) {
        this.shape[1] = "XX ";
        this.shape[0] = " XX";
    } else if (type%7 == 5) {
        this.shape[1] = "XXX";
        this.shape[0] = " X ";
    } else if (type%7 == 6) {
        this.shape[1] = " XX";
        this.shape[0] = "XX ";
    } else {
        console.log("ERROR: invalid type for block creation");
    }

    for (i = 0; i < this.shape.length; i++) {
        display[i]="    " + this.shape[i] + " ".repeat(6-this.shape[i].length);
    }
}

function Update() {
    if (display[21].contains("X")) {
        freeze;
    }
    for (i = 0; i < display.length-1; i++) {
        for (j=0; j<10; j++) {
            if (display[i].charAt(j) == X && display[i+1].charAt(j) == D) {
                freeze();
            }
        }

    }
    
    
    
    if (display[1] != "          ") {
        gameOver();
    }
}

function freeze() {
    for (i =0; i< display.length; i++) {
        display[i].replace("X", "D");
    }
    newblock(Math.floor(Math.random()*7));
}

function writeScreen() {
    text = document.getElementById("game");
    text.innerHTML = "";
    for (i = 2; i < display.length; i++) {
        text.innerHTML += display[i] + "\n";
    }
}

function gameOver() {
    
    
}
