var world;
var timeStep = 1/60;
var ballBody;

function InitCannon()
{
    world = new CANNON.World();
    world.gravity.set(0.0, -9.81 * 50, 0.0);

    var ballMat = new CANNON.Material();

    ballBody = new CANNON.Body({
        shape: new CANNON.Sphere(15),
        mass: 1,
        position: new CANNON.Vec3(0.0, 50.0, 10),
        material: ballMat
    });
    world.addBody(ballBody);
    ballBody.linearDamping = 0.75;
}

function UpdatePhysics()
{
    world.step(timeStep);

    ball.position.copy(ballBody.position);
    ball.quaternion.copy(ballBody.quaternion);
}

function Jump()
{
    var impulse = new CANNON.Vec3(0.0, 50.0, 0.0);
    ballBody.applyImpulse(impulse, ballBody.position);
}