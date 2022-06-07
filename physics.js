var world;
var timeStep = 1/60;
var ballBody, speed;

function InitCannon()
{
    world = new CANNON.World();
    world.gravity.set(0.0, -9.81 * 50, 0.0);

    var groundMat = new CANNON.Material();

    groundBody = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(5000, 125, 5)),
        mass: 0,
        position: new CANNON.Vec3(0.0, -250.0, 10.0),
        material: groundMat
    });
    world.addBody(groundBody);

    var ballMat = new CANNON.Material();

    ballBody = new CANNON.Body({
        shape: new CANNON.Sphere(15),
        mass: 1,
        position: new CANNON.Vec3(0.0, 50.0, 10),
        material: ballMat
    });
    world.addBody(ballBody);
    ballBody.linearDamping = 0.75;

    var matContact = new CANNON.ContactMaterial(groundMat, ballMat, {friction: 0.0, restitution: 0.5});
    world.addContactMaterial(matContact);
}

function UpdatePhysics()
{
    world.step(timeStep);

    var force = new CANNON.Vec3(speed, 0.0, 0.0);
    ballBody.applyForce(force, ballBody.position);

    ball.position.copy(ballBody.position);
    ball.quaternion.copy(ballBody.quaternion);
}

function Jump()
{
    var impulse = new CANNON.Vec3(0.0, 50.0, 0.0);
    ballBody.applyImpulse(impulse, ballBody.position);
}