//Game Functionalities 
// Scrambler 
var zero = 0, one = 0, two = 0, three = 0;
function shuffleScrambler(){

    var tileColors = ["red","green","blue","yellow"]
    
    for(var index = 0; index < 3; index++){
        SCtiles[index].shapeColor = tileColors
    }
}

function colorIndex(){
    var randomIndex = Math.round(random(0,3))

    switch(randomIndex){
        case 0: zero ++; 
                break;
        case 1: one ++; 
                break;
        case 2: two ++; 
                break;
        case 3: three ++; 
                break;
    }

    if(zero == 3){
        randomIndex = Math.round(random(1,3))
    }

    if(one == 3){
        randomIndex = Math.round(random(2,3))
    }
    
    if(two == 3){
        randomIndex = Math.round(random(0,1))
    }

    if(three == 3){
        randomIndex = Math.round(random(0,2))
    }

    return randomIndex
}