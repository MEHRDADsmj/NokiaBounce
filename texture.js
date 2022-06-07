var ball;
var box;

function createmap()
{
  var ballgeometry = new THREE.circlGeometry( 16, 64);
  var ballmaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 , side: THREE.doubleside} );
   ball= new THREE.Mesh( ballgeometry, ballmaterial );
   ball.position.set(0.0,0.0,0.0);
  scene.add(ball);

    var loader = new THREE.textureLoader();
    var walltexture = loader.load("stone_wall.jpg");
    walltexture.repeat.set(1, 100);
        walltexture.wrapS = THREE.RepeatWrapping;
        walltexture.wrapT = THREE.RepeatWrapping;
        walltexture.magFilter = THREE.LinearFilter;
        walltexture.minFilter = THREE.LinearMipMapLinearFilter;
     
   var boxgeometry = new THREE.BoxGeometry(512,512.512);
   var boxmaterial = new THREE.MeshBasicMaterial( map: walltexture );
     cube = new THREE.Mesh( boxgeometry, boxmaterial );
     ball.position.set(100.0,0.0,500.0);
    scene.add( box );
}
