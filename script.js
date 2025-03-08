// Custom cursor
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});


gsap.registerPlugin(ScrollTrigger);

gsap.to("#resize-text", {
    scale: 0.5,
    scrollTrigger: {
        trigger: "#resize-text",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("3d-container").appendChild(renderer.domElement);

// Cube Example
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();


const audio = document.getElementById("background-music");
const playButton = document.getElementById("play-music");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause Music";
    } else {
        audio.pause();
        playButton.textContent = "Play Music";
    }
});
