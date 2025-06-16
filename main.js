import * as THREE from 'three';

//create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;