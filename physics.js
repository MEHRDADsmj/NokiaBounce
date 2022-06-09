var world;
var timeStep = 1/60;
var ballBody, speed;
var groundMat;
var ballOnGround;

var ballCollision;

function InitCannon()
{
    var ballGeometry = new THREE.CubeGeometry(50, 50, 50, 1, 1, 1);
    var ballMat = new THREE.MeshBasicMaterial( {color:0xff0000, side: THREE.DoubleSide} );
    ballCollision = new THREE.Mesh(ballGeometry, ballMat);
    //ball.position.set(250.0, -110.0, 50.0);
    ballCollision.visible = false;
    scene.add(ballCollision);

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

    ballCollision.position.copy(ballBody.position);
    ballCollision.quaternion.copy(ballBody.quaternion);

    if(ballBody.velocity.y < 1.0 && ballBody.velocity.y > 0.0)
    {
        ballOnGround = true;
    }
    else
    {
        ballOnGround = false;
    }

    // console.log(ballBody.velocity);
    CollisionDetection();
}

function Jump()
{
    if(ballOnGround)
    {
        var impulse = new CANNON.Vec3(0.0, 1000.0, 0.0);
        ballBody.applyImpulse(impulse, ballBody.position);
    }
}

function MapInit()
{
    var Body;
    // Floor
    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(5000.0, 125.0, 5.0)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(0.0, -250.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    // Ceiling
    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(5000.0, 125.0, 5.0)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(0.0, 500.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 200.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(300.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(375.0, 285.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(-450.0, 100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 285.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(850.0, -100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 200.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(1500.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 175.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(1900.0, -100.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 50.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(2100.0, 25.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(200.0, 25.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(2600.0, 50.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(125.0, 25.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(2600.0, 25.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 75.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(2600.0, 310.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(150.0, 25.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(3150.0, 50.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(200.0, 150.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(3350.0, -75.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 200.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(3850.0, 300.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);

    Body = new CANNON.Body({
        shape: new CANNON.Box(new CANNON.Vec3(100.0, 75.0, 0.5)),
        mass: 0,
        type: CANNON.STATIC,
        position: new CANNON.Vec3(3900.0, 310.0, 10.0),
        material: groundMat
    });
    world.addBody(Body);
}

function CollisionDetection()
{
    
    var originPoint = ballCollision.position.clone();

    for (var vertexIndex = 0; vertexIndex < ballCollision.geometry.vertices.length; vertexIndex++) {
        var localVertex = ballCollision.geometry.vertices[vertexIndex].clone();
        var globalVertex = localVertex.applyMatrix4(ballCollision.matrix);
        var directionVector = globalVertex.sub(ballCollision.position);

        var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
        var nailsCollisionResults = ray.intersectObjects(collidableMeshList);
        var coinsCollisionResults = ray.intersectObjects(coinMeshList);
        var finishLineResults = ray.intersectObjects(finishLineMesh);
        if (nailsCollisionResults.length > 0 && nailsCollisionResults[0].distance < directionVector.length())
        {
            HandleLose();
        }
        else if(coinsCollisionResults.length > 0 && coinsCollisionResults[0].distance < directionVector.length())
        {
            coinsCollisionResults[0].object.visible = false;
            HandleScore();
        }
        else if(finishLineResults.length > 0 && finishLineResults[0].distance < directionVector.length())
        {
            HandleWin();
            break;
        }
    }
}

function HandleLose()
{
    window.location.reload(true);
    alert("You lost!\nYou scored " + score);
}

function HandleScore()
{
    score += 2;
}

function HandleWin()
{
    score += 4;
    window.location.reload(true);
    alert("You won!\nYou scored " + score);
}