const scene = new THREE.Scene();  //Crear una nueva escena

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );   //Camara perspectiva
const camera1 = new THREE.OrthographicCamera( window.innerWidth / - 50, window.innerWidth / 50, window.innerHeight / 50, window.innerHeight / - 50, 0.1, 1000 );
camera.position.z = 5; 
camera.position.x = 0; 

camera1.position.z=10;  

const renderer = new THREE.WebGLRenderer();  //Renderizar mediante WebGL /El metodo puede utilizar parametros dependiendo la situacion.
renderer.setSize( window.innerWidth, window.innerHeight );  //Definir el tamaño del renderizador, el primer parametro es el ancho de la ventana y el segundo sera la altura
document.body.appendChild( renderer.domElement );  //Agrega el renderizador WebGL al documento HTML

// Crear ejes de referencia
var axesHelper = new THREE.AxesHelper(5); // El argumento es la longitud de los ejes
scene.add(axesHelper);

// Constantes para las medidas
const chairWidth = 2;    // Ancho de la silla
const chairHeight = 2;   // Alto de la silla
const chairDepth = 2;    // Profundidad de la silla
const legWidth = 0.1;    // Ancho de las patas
const legHeight = 1.0;   // Alto de las patas
const seatSize = 0.8;    // Lado del asiento
const seatThickness = 0.2; // Espesor del asiento
const backrestRadius = 0.4; // Radio del respaldo
const backrestThickness = 0.2; // Espesor del respaldo

//Caja de ancho 2x2x2

Geometry_box = new THREE.BoxGeometry(chairWidth, chairHeight, chairDepth);
material_box = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
cube = new THREE.Mesh();
Asiento = new THREE.Mesh(Geometry_box, material_box);
Patas = new THREE.Mesh();
Pata1 = new THREE.Mesh(Geometry_box, material_box); 
Pata2 = new THREE.Mesh(Geometry_box, material_box); 
Pata3 = new THREE.Mesh(Geometry_box, material_box); 
Pata4 = new THREE.Mesh(Geometry_box, material_box); 

//Patas
Patas.add(Pata1, Pata2, Pata3, Pata4)
Patas.scale.set(legWidth, legHeight, legWidth)
Pata1.position.set(7,-1,7)
Pata2.position.set(-7, -1, -7)
Pata3.position.set(7,-1,-7)
Pata4.position.set(-7, -1, 7)

//Espaldar
const cylinderGeometry = new THREE.CylinderGeometry(backrestRadius, backrestRadius, backrestThickness, 32);
const cylinderMaterial = new THREE.MeshNormalMaterial();
const cylinder = new THREE.Mesh(cylinderGeometry, material_box);

cylinder.position.set(0,0,0)
cylinder.rotation.x = Math.PI / 2;
Asiento.scale.set(seatSize, seatThickness, seatSize)
cube.add(Asiento, Patas, cylinder)
scene.add(cube)






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

	function animate() 
	{
        //cube.rotation.x += 0.1;
		requestAnimationFrame(animate);
		renderer.render( scene, currentC );  //Renderizar la escena y la camara
	}

animate();  //llamado de la funcion animate() para iniciar la anmacion del cubo 