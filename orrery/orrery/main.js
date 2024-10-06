// Import Three.js (you can also include it via a CDN in the HTML file)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.143.0/build/three.module.js';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const timeInput = document.getElementById('time');
    const searchInput = document.getElementById('search');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const fastForwardButton = document.getElementById('fast-forward');
    const details = document.getElementById('details');

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Function to create spheres representing celestial bodies
    function createCelestialBody(diameter, color) {
        const geometry = new THREE.SphereGeometry(diameter, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color });
        const sphere = new THREE.Mesh(geometry, material);
        return sphere;
    }

    // Example: Add a planet
    const planet = createCelestialBody(0.5, 0xff0000); // Diameter and color
    scene.add(planet);

    // Function to animate the scene
    function animate() {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.01; // Rotate the planet
        renderer.render(scene, camera);
    }
    
    animate();

    // Setup event listeners
    playButton.addEventListener('click', () => {
        console.log('Play pressed');
        // Add play functionality
    });

    pauseButton.addEventListener('click', () => {
        console.log('Pause pressed');
        // Add pause functionality
    });

    fastForwardButton.addEventListener('click', () => {
        console.log('Fast Forward pressed');
        // Add fast forward functionality
    });

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        console.log(`Searching for: ${query}`);
        // Implement search functionality
    });

    timeInput.addEventListener('change', (event) => {
        const selectedTime = event.target.value;
        console.log(`Selected time: ${selectedTime}`);
        // Implement time change functionality
    });
});
