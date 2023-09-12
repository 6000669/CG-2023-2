const scene = new THREE.Scene();  

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );   //Camara perspectiva
const camera1 = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / - 50, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();  //Renderizar mediante WebGL /El metodo puede utilizar parametros dependiendo la situacion.
renderer.setSize( window.innerWidth, window.innerHeight );  //Definir el tamaño del renderizador, el primer parametro es el ancho de la ventana y el segundo sera la altura
document.body.appendChild( renderer.domElement );  //Agrega el renderizador WebGL al documento HTML

const light = new THREE.PointLight(0xffffff, 500);
light.position.set(10, 10, 10);
scene.add(light);

const geometry = new THREE.BoxGeometry( 8, 8, 8 );  //Metodo para crear un cubo rectangular con parametros de ancho, altura y profunidad respectivamente
const geometry1= new THREE.SphereGeometry( 7, 33, 11);
const material = new THREE.MeshToonMaterial( { color: 0x00ff00 } );  //Metodo para definir el material de la figura creada, en este caso el material es de color verde
const material1 = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
const cube = new THREE.Mesh( geometry, material );  //Clase que representa los objetos que combina la geometria y el material
const sphere = new THREE.Mesh( geometry1, material1 );

//scene.add( cube );  //Agregar a la escena el cubo 
scene.add( sphere, cube);
camera.position.z = 50;  //Configura la posición de la cámara en el eje Z a 5 unidades hacia afuera desde el origen.
camera1.position.z=10;



 //Configura la posición de la cámara en el eje Z a 5 unidades hacia afuera desde el origen.



let currentC= camera; 

document.addEventListener("keydown", (event) => {
	if(event.key === "c" || event.key === "C"){
		if(currentC === camera){
			currentC = camera1;
		} else {
			currentC = camera;
		}
	}
});

// Registro de las posiciones de la esfera y el cubo
let spherePosition = new THREE.Vector3(-25, 0, 0);
let cubePosition = new THREE.Vector3(25, 0, 0);

// Agrega un controlador de eventos para detectar cuando se presionan teclas
document.addEventListener('keydown', (event) => {
	 const moveDistance = 0.1; 
	// Distancia de movimiento por cada pulsación de tecla  
	switch (event.key) {
		case 'w':
			spherePosition.z -= moveDistance;
			break;
		case 's':
			spherePosition.z += moveDistance;
			break;
		case 'a':
			spherePosition.x -= moveDistance;
			break;
		case 'd':
			spherePosition.x += moveDistance;
			break;
		case 'i':
			cubePosition.z -= moveDistance;
			break;
		case 'k':
			cubePosition.z += moveDistance;
			break;
		case 'j':
			cubePosition.x -= moveDistance;
			break;
		case 'l':
			cubePosition.x += moveDistance;
			break;
		 }
	});

	function animate() {
		requestAnimationFrame(animate);
		// Actualiza las posiciones de la esfera y el cubo  
		sphere.position.copy(spherePosition);
		cube.position.copy(cubePosition);

	renderer.render( scene, currentC );  //Renderizar la escena y la camara
}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 