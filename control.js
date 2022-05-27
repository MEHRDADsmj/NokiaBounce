function handleControl(){
    if (keyboard.pressed("up") || keyboard.pressed("w") || keyboard.pressed("space")) {
        pressedUp();
    }
    else if (keyboard.pressed("down") || keyboard.pressed("s")) {
        pressedDown();
    }
    if (keyboard.pressed("right") || keyboard.pressed("d")) {
        pressedRight();
    }
    else if (keyboard.pressed("left") || keyboard.pressed("a")) {
        pressedLeft();
    }
    if (keyboard.pressed("space")) {
        
    }
}function pressedUp(){
    ball.position.y +=1;
}
function pressedRight(){
    ball.position.x +=1;
}
function pressedLeft(){
    ball.position.x -=1;
}
