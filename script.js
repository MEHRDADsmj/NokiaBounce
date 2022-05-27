// TBI
var camera, scene, renderer;

function Init()
{
    keyboard = new THREEx.KeyboardState();
    TBI();
}

// Three basic inits
function TBI()
{
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(window.innerWidth / 2, window.innerWidth / -2, window.innerHeight / 2, window.innerHeight / -2,
        1, 1000);
    camera.position.set(0.0, 0.0, -10.0);
    camera.lookAt(scene.position);
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xb4f7ee);
    document.body.appendChild(renderer.domElement);
}

function Animate()
{
    requestAnimationFrame(Animate);
    renderer.render(scene, camera);
}

window.onload = function ()
{
    Init();
    Animate();
}
