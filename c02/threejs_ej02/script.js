const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );   //Camara perspectiva
const camera1 = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / - 50, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();  //Renderizar mediante WebGL /El metodo puede utilizar parametros dependiendo la situacion.
renderer.setSize( window.innerWidth, window.innerHeight );  //Definir el tamaño del renderizador, el primer parametro es el ancho de la ventana y el segundo sera la altura
document.body.appendChild( renderer.domElement );  //Agrega el renderizador WebGL al documento HTML



const geometry = new THREE.BoxGeometry( 8, 8, 8 );  //Metodo para crear un cubo rectangular con parametros de ancho, altura y profunidad respectivamente
const geometry1= new THREE.SphereGeometry( 5, 33, 11);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );  //Metodo para definir el material de la figura creada, en este caso el material es de color verde
const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const cube = new THREE.Mesh( geometry, material );  //Clase que representa los objetos que combina la geometria y el material
const sphere = new THREE.Mesh( geometry1, material1 );

//scene.add( cube );  //Agregar a la escena el cubo 
scene.add( sphere, cube);
camera.position.z = 50;  //Configura la posición de la cámara en el eje Z a 5 unidades hacia afuera desde el origen.
camera1.position.z=10;



 //Configura la posición de la cámara en el eje Z a 5 unidades hacia afuera desde el origen.


sphere.position.x=10;
sphere.position.z=-50;


cube.position.x=-20

function animate() {  //Funcion definida "animate" en bucle para realizar el ciclo de animacion en el navegador, 60 fps
	requestAnimationFrame( animate );   //Llamado a la función animate en el próximo ciclo de animación del navegador.


	renderer.render( scene, camera );  //Renderizar la escena y la camara
}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 