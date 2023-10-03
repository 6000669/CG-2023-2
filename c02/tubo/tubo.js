const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.antialias = true;
document.body.appendChild(renderer.domElement);

// Crear una luz de hemisferio con colores azul y verde, y una intensidad de 0.5
var hemiLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.5);

// Establecer la posición de la luz de hemisferio en el espacio 3D
hemiLight.position.set(0, 500, 0);

//Agregar la luz a la escena
scene.add(hemiLight)

// Crear una luz de hemisferio con colores azul y verde, y una intensidad de 0.1
var hemiLight2 = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.1);

// Establecer la posición de la luz de hemisferio en el espacio 3D
hemiLight.position.set(0, -500, 0);

//Agregar la segunda luz a la escena
scene.add(hemiLight2)


// Definir una curva de Catmull-Rom utilizando una serie de puntos en 3D
const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, 0, 0),
    new THREE.Vector3(-1.5, 1, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-0.5, -1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.5, 1, 0),
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(1.5, -1, 0),
    new THREE.Vector3(2, 0, 0),
]);

// Obtener una serie de 50 puntos equidistantes a lo largo de la curva de Catmull-Rom
const points = curve.getPoints(50);

// Crear una geometría de tubo a lo largo de la curva de Catmull-Rom
const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 100, 0.3, 20, false);

// Crear un material de malla Phong con un color verde
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

// Crear un objeto 3D usando la geometría del tubo y el material Phong
const tube = new THREE.Mesh(geometry, material);

//Agregar el objeto tubo a la escena
scene.add(tube);


camera.position.z = 10;

function animate() {
	requestAnimationFrame(animate);

	tube.rotation.x += 0.01;
	tube.rotation.y += 0.01;

	renderer.render(scene, camera);  //Renderizar la escena y la camara
}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 