// Crear una escena
const scene = new THREE.Scene();

// Crear una cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear un renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear tres objetos
const geometry = new THREE.BoxGeometry();
const geometry1 = new THREE.SphereGeometry(1, 32, 32);
const geometry2 = new THREE.ConeGeometry();

const material = new THREE.MeshNormalMaterial({ color: 0x00ff00, side: faceCullingEnabled ? THREE.FrontSide : THREE.DoubleSide });
const cube = new THREE.Mesh(geometry, material);
const sphere = new THREE.Mesh(geometry1, material);
const cone = new THREE.Mesh(geometry2, material);



// Aplicar transformaciones a los objetos
cube.position.x = -2;
sphere.position.x = 2;
cone.position.z = -3;


// Agregar los objetos a la escena
scene.add(cube);
scene.add(sphere);
scene.add(cone);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Renderizar la escena
function animate() {
	requestAnimationFrame(animate);

	// Rotar los objetos para apreciar el culling
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;
	cone.rotation.x += 0.01;
	cone.rotation.y += 0.01;
	controls.update();
	renderer.render(scene, camera);
}

animate();