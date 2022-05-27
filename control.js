function handleControl(){
    if (keyboard.pressed("up") || keyboard.pressed("w") || keyboard.pressed("space")) {
        pressedUp();
    }
    if (keyboard.pressed("right") || keyboard.pressed("d")) {
        pressedRight();
    }
    else if (keyboard.pressed("left") || keyboard.pressed("a")) {
        pressedLeft();
    }
}
function pressedUp(){
    Jump();
}
function pressedRight(){
    speed = 200.0;
}
function pressedLeft(){
    speed = -200.0;
}
