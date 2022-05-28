var camera, scene, renderer;

  function Init()
 {
     keyboard = new THREE.keyboardstate();
    TBI();
    createmap();
    playsound();
 }
 //three basic init
 function TBI()
{
     scene = new THREE.Scene();

     camera = new THREE.OrthographicCamera( window.width / - 2, window.width / 2, window.height / 2, window.height / - 2, 1, 1000 );
      camera.position.x = ball.position.x
      camera.lookAt(scene,camera);
      camera.position.x = ball.position.x;
      camera.position.y = 0.0;
      camera.position.z = -10.0;
     scene.add( camera );

     renderer = new THREE.WebGLrenderer();
     renderer.setSize( window.innerWidth, window.innerHeight );
     renderer.setclearcolor(0xb4f7ee);
     document.body.appendChild( renderer.domElement );
}
function Animate()
{
    requestAnimationFrame(Animate);
    renderer.render(scene, camera);
    handleinput();
    //changecolor();
}
 
 window.onload = function ()
{
  init();
  Animate();
}