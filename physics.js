var world;
var timeStep = 1/60;
var ballBody, speed;
var groundMat;

function InitCannon()
{
    world = new CANNON.World();
    world.gravity.set(0.0, -9.81 * 50, 0.0);

    groundMat = new CANNON.Material();

    MapInit();

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

    console.log(ball.position);
}

function Jump()
{
    var impulse = new CANNON.Vec3(0.0, 50.0, 0.0);
    ballBody.applyImpulse(impulse, ballBody.position);
}

function MapInit()
{
    var Body;
    // Floor
    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(5000.0, 125.0, 5.0)),
        mass: 0,
        position: new CANNON.Vec3(0.0, -250.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    // Ceiling
    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(5000.0, 125.0, 5.0)),
        mass: 0,
        position: new CANNON.Vec3(0.0, 500.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 200.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(300.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(375.0, 285.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(-450.0, 100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 285.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(850.0, -100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 200.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(1500.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 175.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(1900.0, -100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 50.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(2100.0, 25.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(200.0, 25.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(2600.0, 50.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(125.0, 25.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(2600.0, 25.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 75.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(2600.0, 310.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 25.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(3150.0, 50.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(200.0, 150.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(3350.0, -75.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 200.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(3850.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 75.0, 0.5)),
        mass: 0,
        position: new CANNON.Vec3(3900.0, 310.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);
}