const scene = new THREE.Scene();  //Crear una nueva escena

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );   //Camara perspectiva
const camera1 = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / - 50, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();  //Renderizar mediante WebGL /El metodo puede utilizar parametros dependiendo la situacion.
renderer.setSize( window.innerWidth, window.innerHeight );  //Definir el tamaño del renderizador, el primer parametro es el ancho de la ventana y el segundo sera la altura
document.body.appendChild( renderer.domElement );  //Agrega el renderizador WebGL al documento HTML

const light = new THREE.PointLight(0xffffff, 500);  //Metodo para crear un punto de luz 
light.position.set(10, 10, 10);
scene.add(light);  //Agregar la luz al escenario

const geometry = new THREE.BoxGeometry( 8, 8, 8 );  //Metodo para crear un cubo rectangular con parametros de ancho, altura y profunidad respectivamente
const geometry1= new THREE.SphereGeometry( 7, 33, 11);  //Metodo para crear una esfera con parametros de radio 
const material = new THREE.MeshToonMaterial( { color: 0x00ff00 } );  //Metodo para definir el material de la figura creada, en este caso el material es de color verde
const material1 = new THREE.MeshNormalMaterial( { color: 0xffff00 } );   //Metodo para definir el material
const cube = new THREE.Mesh( geometry, material );  //Clase que representa los objetos que combina la geometria y el material
const sphere = new THREE.Mesh( geometry1, material1 );   //Metodo para definir el material de la esfera

//scene.add( cube );  //Agregar a la escena el cubo 
scene.add( sphere, cube);
camera.position.z = 50;  //Configura la posición de la cámara en perspectiva en el eje Z a 50 unidades hacia afuera desde el origen.
camera1.position.z=10;  //Configura la posición de la cámara ortogonal en el eje Z a 50 unidades hacia afuera desde el origen.



 //Configura la posición de la cámara en el eje Z a 5 unidades hacia afuera desde el origen.



let currentC= camera;    //Variable para controlar el contro de las camaras 

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
		case 'w':  //Si se presiona w, se movera la esfera en el eje z negativamente
			spherePosition.z -= moveDistance;
			break;
		case 's':  //Si se presiona s, se movera la esfera en el eje z positivamente
			spherePosition.z += moveDistance;
			break;
		case 'a':  //Si se presiona a, se movera la esfera en el eje x negativamente
			spherePosition.x -= moveDistance;  
			break;
		case 'd':  //Si se presiona d, se movera la esfera en el eje x positivamente 
			spherePosition.x += moveDistance;
			break;
		case 'i':  //Si se presiona i, se movera el cubo en el eje z negativamente
			cubePosition.z -= moveDistance;
			break;
		case 'k':  //Si se presiona k, se movera el cubo en el eje z positivamente 
			cubePosition.z += moveDistance;
			break;
		case 'j':  //Si se presiona l, se movera el cubo en el eje x negativamente
			cubePosition.x -= moveDistance;
			break;
		case 'l':  //Si se presiona l, se movera el cubo en el eje x positivamente 
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