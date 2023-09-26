const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.antialias = true;
document.body.appendChild(renderer.domElement);



const geometry = new THREE.Geometry();
// Definir los vértices del cono
const radio = 3;
const altura = 5;
const segmentos = 100;
const tipVertex = new THREE.Vector3(0, altura, 0);


for (let i = 0; i <= segmentos; i++) {
	const theta = (i / segmentos) * Math.PI * 2;
	const x = radio * Math.cos(theta)
	const z = radio * Math.sin(theta)
	const vertex = new THREE.Vector3(x, 0, z)
	geometry.vertices.push(vertex)

	if (i < segmentos) {
		geometry.faces.push(new THREE.Face3(i, (i + 1) % segmentos, segmentos))
		geometry.faces.push(new THREE.Face3(i, segmentos, segmentos + 1))
	}
}
geometry.vertices.push(tipVertex);

geometry.computeFaceNormals();
// Calcular coordenadas UV manualmente
geometry.faceVertexUvs[0] = [];
for (let i = 0; i < segmentos; i++) {
	const u1 = i / segmentos;
	const u2 = (i + 1) / segmentos;
	geometry.faceVertexUvs[0].push([
		new THREE.Vector2(u1, 1),
		new THREE.Vector2(u2, 1),
		new THREE.Vector2(0.5, 0.5)
	]);
}

// Mapeo UV para la parte superior del cono
for (let i = 0; i < segmentos; i++) {
	const u1 = i / segmentos;
	const u2 = (i + 1) / segmentos;
	geometry.faceVertexUvs[0].push([
		new THREE.Vector2(u1, 0),
		new THREE.Vector2(u2, 0),
		new THREE.Vector2(0.5, 0.5)
	]);
}

const textureLoader = new THREE.TextureLoader();
texture = textureLoader.load("https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png");

const material = new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, map: texture });


const customMesh = new THREE.Mesh(geometry, material);
scene.add(customMesh);

document.addEventListener('keydown', (event) => {
	if (event.key === 'a' || event.key === 'A') {
		customMesh.position.x -= 0.1;
	} else if (event.key === 'd' || event.key === 'D') {
		customMesh.position.x += 0.1;
	} else if (event.key === 'w' || event.key === 'W') {
		customMesh.position.y += 0.1;
	} else if (event.key === 's' || event.key === 'S') {
		customMesh.position.y -= 0.1;
	} else if (event.key === 'l' || event.key === 'L') {
		customMesh.rotation.y += 0.1;
	} else if (event.key === 'k' || event.key === 'K') {
		customMesh.rotation.x -= 0.1;
	} else if (event.key === 'j' || event.key === 'J') {
		customMesh.rotation.y -= 0.1;
	} else if (event.key === 'i' || event.key === 'I') {
		customMesh.rotation.x += 0.1;
	} 

})

camera.position.z = 10;

function animate() {

	requestAnimationFrame(animate);
	renderer.render(scene, camera);  //Renderizar la escena y la camara
}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 