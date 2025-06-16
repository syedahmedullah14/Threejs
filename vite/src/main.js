import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//add canvas to the scene
const canvas = document.getElementById('canvas');

//create a scene
const scene = new THREE.Scene();

//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


//create a geometry
const geometry = new THREE.DodecahedronGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

//create a box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshLambertMaterial({color: '#B4B4B3', emissive: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5

//add the objects to the scenes
scene.add(dodecahedron);
scene.add(box);


//add lighting
const light = new THREE.SpotLight(0x006769, 100 );
light.position.set(1, 1, 1);
scene.add(light);


//create a renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//add orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;
controls.enableKeys = true;
controls.enableZoom = true;

//add animation
function animate() {
    requestAnimationFrame(animate);
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;

    controls.update();
    renderer.render(scene, camera);
}

//handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//start the animation
animate();