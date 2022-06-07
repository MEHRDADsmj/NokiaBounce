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
    else
    {
        None();
    }
}
function pressedUp(){
    Jump();
}
function pressedRight(){
    speed = 500.0;
}
function pressedLeft(){
    speed = -500.0;
}
function None()
{
    speed = 0.0;
}