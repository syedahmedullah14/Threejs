import * as THREE from 'three';

//create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//create a cude object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//add lighting 
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1); //x, y, z coordinates
scene.add(light);

//create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//animate the cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();