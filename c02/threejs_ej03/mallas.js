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
const segmentos = 20;
const tipVertex = new THREE.Vector3(0, altura, 0);


for(let i=0; i <= segmentos; i++){
	const theta = (i / segmentos) *Math.PI * 2;
	const x = radio * Math.cos(theta)
	const z = radio * Math.sin(theta)
	const vertex = new THREE.Vector3(x, 0, z)
	geometry.vertices.push(vertex)

	if (i < segmentos){
		geometry.faces.push(new THREE.Face3(i, (i+1) % segmentos, segmentos))
		geometry.faces.push(new THREE.Face3(i, segmentos, segmentos + 1))
	}
}
geometry.vertices.push(new THREE.Vector3(0, altura, 0));

geometry.computeFaceNormals();

const material = new THREE.MeshNormalMaterial({ color: 0x00ff00, wireframe: true , side : THREE.DoubleSide });

const customMesh = new THREE.Mesh(geometry, material);
scene.add(customMesh);

camera.position.z = 10;


	function animate() 
	{
		customMesh.rotation.x += 0.01
		customMesh.rotation.y += 0.01
		requestAnimationFrame(animate);
		renderer.render(scene, camera);  //Renderizar la escena y la camara
	}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 