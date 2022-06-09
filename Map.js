var ball;
var box;
var ground;
var barrier;
var cone;
var circle, circle2, circle3;

var collidableMeshList = [];
var coinMeshList = [];
var finishLineMesh = [];

function CreateMap()
{
    var loader = new THREE.TextureLoader();
    var woodTexture = loader.load("Shot 0033.png");
    var groundMat = new THREE.MeshBasicMaterial( {map: woodTexture} );

    var finishTexture = loader.load("finish line.png");
    var finishMat = new THREE.MeshBasicMaterial( {map: finishTexture} );
    var finishLineGeometry = new THREE.BoxGeometry(1080, 100, 100);
    var finishLine = new THREE.Mesh(finishLineGeometry, finishMat);
    finishLine.position.set(4200.0, 0.0, 10.0);
    finishLine.rotateZ(1.57);
    scene.add(finishLine);

    finishLineMesh.push(finishLine);

    var ballGeometry = new THREE.SphereGeometry(15, 64, 64);
    var ballMat = new THREE.MeshBasicMaterial( {color:0xff0000, side: THREE.DoubleSide} );
    ball = new THREE.Mesh(ballGeometry, ballMat);
    //ball.position.set(250.0, -110.0, 50.0);
    scene.add(ball);

    var boxGeometry = new THREE.BoxGeometry( 300, 400, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier = new THREE.Mesh(boxGeometry, groundMat);
    barrier.position.set(300.0, 300, 50)
    scene.add(barrier);

    var boxGeometry = new THREE.BoxGeometry( 750, 570, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier1 = new THREE.Mesh(boxGeometry, groundMat);
    barrier1.position.set(-450.0, 100.0, 50)
    scene.add(barrier1);

    var boxGeometry = new THREE.BoxGeometry( 300, 570, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier2 = new THREE.Mesh(boxGeometry, groundMat);
    barrier2.position.set(850.0, -100.0, 50)
    scene.add(barrier2);

    var boxGeometry = new THREE.BoxGeometry( 200, 400, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier3 = new THREE.Mesh(boxGeometry, groundMat);
    barrier3.position.set(1500, 300.0, 50)
    scene.add(barrier3);

    var boxGeometry = new THREE.BoxGeometry( 200, 350, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier4 = new THREE.Mesh(boxGeometry, groundMat);
    barrier4.position.set(1900, -100.0, 50)
    scene.add(barrier4);

    var boxGeometry = new THREE.BoxGeometry( 200, 100, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier5 = new THREE.Mesh(boxGeometry, groundMat);
    barrier5.position.set(2100, 25.0, 50)
    scene.add(barrier5);

    var boxGeometry = new THREE.BoxGeometry( 400, 50, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier6 = new THREE.Mesh(boxGeometry, groundMat);
    barrier6.position.set(2600, 50.0, 50)
    scene.add(barrier6);

    var boxGeometry = new THREE.BoxGeometry( 250, 50, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier7 = new THREE.Mesh(boxGeometry, groundMat);
    barrier7.position.set(2600, 25.0, 50)
    scene.add(barrier7);

    var boxGeometry = new THREE.BoxGeometry( 200, 150, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier8 = new THREE.Mesh(boxGeometry, groundMat);
    barrier8.position.set(2600, 310.0, 50)
    scene.add(barrier8);

    var boxGeometry = new THREE.BoxGeometry( 300, 50, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier9 = new THREE.Mesh(boxGeometry, groundMat);
    barrier9.position.set(3150, 50.0, 50)
    scene.add(barrier9);

    var boxGeometry = new THREE.BoxGeometry( 400, 300, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier10 = new THREE.Mesh(boxGeometry, groundMat);
    barrier10.position.set(3350, -75.0, 50)
    scene.add(barrier10);

    var boxGeometry = new THREE.BoxGeometry( 200, 400, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier11 = new THREE.Mesh(boxGeometry, groundMat);
    barrier11.position.set(3850, 300.0, 50)
    scene.add(barrier11);

    var boxGeometry = new THREE.BoxGeometry( 200, 150, 1 );
    var boxMat = new THREE.MeshBasicMaterial( {color: 0xa88013},);
    barrier12 = new THREE.Mesh(boxGeometry, groundMat);
    barrier12.position.set(3900, 310.0, 50)
    scene.add(barrier12);

    var coneGeometry = new THREE.ConeGeometry( 30, 40, 32 );
    var coneMat = new THREE.MeshBasicMaterial( {color: 0x505050} );
    cone = new THREE.Mesh( coneGeometry, coneMat );
    cone.position.set(1200, -110.0, 50.0);
    scene.add(cone);

    var coneGeometry = new THREE.ConeGeometry( 30, 40, 32 );
    // var coneMat = new THREE.MeshBasicMaterial( {color: 0xb024bd} );
    cone1 = new THREE.Mesh( coneGeometry, coneMat );
    cone1.position.set(2300, -110.0, 50.0);
    scene.add(cone1);

    var coneGeometry = new THREE.ConeGeometry( 30, 40, 32 );
    // var coneMat = new THREE.MeshBasicMaterial( {color: 0xb024bd} );
    cone2 = new THREE.Mesh( coneGeometry, coneMat );
    cone2.position.set(2900, -110.0, 50.0);
    scene.add(cone2);

    var coneGeometry = new THREE.ConeGeometry( 30, 40, 32 );
    // var coneMat = new THREE.MeshBasicMaterial( {color: 0x505050} );
    cone3 = new THREE.Mesh( coneGeometry, coneMat );
    cone3.position.set(3800, -110.0, 50.0);
    scene.add(cone3);

    collidableMeshList.push(cone, cone1, cone2, cone3);

    var circleGeometry = new THREE.CircleGeometry( 20 , 30 );
    var circleMat = new THREE.MeshBasicMaterial( { color: 0xf5d907,side: THREE.DoubleSide } );
    circle = new THREE.Mesh(circleGeometry, circleMat );
    circle.position.set(300.0,-100.0, 10);
    circle2 = circle.clone();
    circle3 = circle.clone();
    circle2.position.set(2600, 100.0, 10);
    circle3.position.set(3650.0, -100.0, 10);
    scene.add(circle);
    scene.add(circle2);
    scene.add(circle3);

    coinMeshList.push(circle, circle2, circle3);

    var groundGeometry = new THREE.BoxGeometry(10000, 250, 10);
    
    ground = new THREE.Mesh(groundGeometry, groundMat);
    ground.position.set(0.0, -250.0, 10.0);
    scene.add(ground);

    //var groundGeometry = new THREE.BoxGeometry(10000, 100, 10);
    
    //ground = new THREE.Mesh(groundGeometry, groundMat);
    //ground.position.set(0.0, -250.0, 10.0);
    //scene.add(ground);
}

function UpdateMap()
{
    var t = (Date.now()/1000);
    circle.rotateY(0.03);
    circle2.rotateY(0.03);
    circle3.rotateY(0.03);
}