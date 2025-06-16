import * as THREE from 'three';


//add canvas to the scene
const canvas = document.getElementById('canvas');

//create a scene
const scene = new THREE.Scene();

//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;


//create a geometry
const geometry = new THREE.DodecahedronGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

//create a box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({color: '#B4B4B3'});
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
renderer.render(scene, camera);