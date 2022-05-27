var world;
var timeStep = 1/60;

function InitCannon()
{
    world = new CANNON.World();
    world.gravity.set(0.0, -9.81 * 50, 0.0);
}

function UpdatePhysics()
{
    world.step(timeStep);
}