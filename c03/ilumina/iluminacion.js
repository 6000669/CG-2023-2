// Configuración básica
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement ); 

// Crear la geometría de la taza
const geometry = new THREE.SphereGeometry( 5, 32, 16, 0, Math.PI * 2, 1.45, 1.45); 
const material = new THREE.MeshPhongMaterial( { color: 0xE4E4E4 } ); 
const sphere = new THREE.Mesh( geometry, material ); 

// Crear la oreja de la taza
const earGeometry = new THREE.TorusGeometry(1.5, 0.3, 16, 100, Math.PI); // Geometría de una oreja simple
const earMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const ear = new THREE.Mesh(earGeometry, earMaterial);

// Posicionar la oreja a la derecha de la taza
ear.position.set(-4.3, -1.2, 0);
ear.rotation.set(0, 0,Math.PI/2)

const eyegeometry = new THREE.SphereGeometry( 0.5, 32, 16, 0, Math.PI * 2, 1.45, 1.45); 
const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF }); 


// Crear el primer "ojo" y posicionarlo en la taza
const ojo1 = new THREE.Mesh(eyegeometry, eyeMaterial);
ojo1.position.set(1.7, 0.32, 5.1);
ojo1.scale.set(3.6,4,0.1)
//Crear el segundo ojo
const ojo2 = new THREE.Mesh(eyegeometry, eyeMaterial);
ojo2.position.set(-1.7, 0.32, 5.1);
ojo2.scale.set(3.6,4,0.1)

// Crear la geometría de la boca (anillo o toroide)
const mouthGeometry = new THREE.TorusGeometry(0.5, 0.5, 16, 80, Math.PI); // Puedes ajustar los parámetros según tus necesidades
const mouthMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 }); // Color rojo para la boca
const boca = new THREE.Mesh(mouthGeometry, mouthMaterial);
boca.rotation.set(Math.PI, 0,0)
boca.scale.set(2.3,2,0.1)
boca.position.set(0, -1.8, 5.1); // Ajusta las coordenadas según sea necesario

// Crear la geometría de la boca (anillo o toroide)
const lenguaGeometry = new THREE.TorusGeometry(0.5, 0.5, 16, 80, Math.PI); // Puedes ajustar los parámetros según tus necesidades
const lenguaMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000  }); // Color rojo para la boca
const lengua = new THREE.Mesh(lenguaGeometry, lenguaMaterial);
lengua.rotation.set(Math.PI, 0,0)
lengua.scale.set(1.4,0.9,0.1)
lengua.position.set(0, -2.7, 5.2); // Ajusta las coordenadas según sea necesario

const geometry1 = new THREE.CircleGeometry( 1, 32, 0, 11* Math.PI / 6); 
const material1 = new THREE.MeshPhongMaterial( { color: 0x1B1B1B } ); 
const pupila = new THREE.Mesh( geometry1, material1 ); 
pupila.scale.set(0.45,0.75, 0.1)
pupila.position.set(-1.8,-0.4,5.5)

const pupila2 = new THREE.Mesh( geometry1, material1 ); 
pupila2.scale.set(0.45,0.75, 0.1)
pupila2.position.set(1.8,-0.4,5.5)

// Agregar la taza y la oreja a la escena
cuphead = new THREE.Mesh();
cuphead.add(sphere, ear, ojo1, ojo2, boca, lengua, pupila, pupila2);
scene.add(cuphead);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.enableRotate = true;
controls.minDistance = 10;
controls.maxDistance = 500;


function makeLights() {
    // we're using globals for the lights, for the GUI
 
    light0 = new THREE.AmbientLight( 0x202020 ); // 10%
    scene.add(light0);
 
    light1 = new THREE.PointLight( 0xFFFFFF, 1.2 ); // 50%
    light1.position.set( -12, 15, 10 );
    scene.add(light1);
    controls.update();
    light2 = new THREE.DirectionalLight( 0xFFFFFF, 1 );
    light2.position.set( 0, 100, 10 );
    scene.add(light2);
}

// Animación
function animate() {  //Funcion definida "animate" en bucle para realizar el ciclo de animacion en el navegador, 60 fps
	requestAnimationFrame( animate );   //Llamado a la función animate en el próximo ciclo de animación del navegador.
    //cuphead.rotation.x += 0.005;
    //cuphead.rotation.y += 0.005;
    controls.update();
	renderer.render( scene, camera );  //Renderizar la escena y la camara
}

animate();
makeLights();