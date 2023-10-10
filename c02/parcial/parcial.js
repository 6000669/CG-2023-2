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

// Crear ejes de referencia
var axesHelper = new THREE.AxesHelper(5); // El argumento es la longitud de los ejes
scene.add(axesHelper);


// Función para crear un cubo con un tamaño específico
function createCube(size, color) {
    var geometry = new THREE.Geometry();
  
    // Define los vértices del cubo
    var vertices = [
      new THREE.Vector3(-size / 2, -size / 2, -size / 2), // Vértice 0
      new THREE.Vector3(size / 2, -size / 2, -size / 2),  // Vértice 1
      new THREE.Vector3(size / 2, size / 2, -size / 2),   // Vértice 2
      new THREE.Vector3(-size / 2, size / 2, -size / 2),  // Vértice 3
      new THREE.Vector3(-size / 2, -size / 2, size / 2),  // Vértice 4
      new THREE.Vector3(size / 2, -size / 2, size / 2),   // Vértice 5
      new THREE.Vector3(size / 2, size / 2, size / 2),    // Vértice 6
      new THREE.Vector3(-size / 2, size / 2, size / 2)   // Vértice 7
    ];
  
    // Define las caras del cubo utilizando los índices de los vértices
    var faces = [
      new THREE.Face3(0, 1, 2),
      new THREE.Face3(0, 2, 3),
      new THREE.Face3(4, 5, 6),
      new THREE.Face3(4, 6, 7),
      new THREE.Face3(0, 1, 5),
      new THREE.Face3(0, 5, 4),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(1, 2, 6),
      new THREE.Face3(1, 6, 5),
      new THREE.Face3(0, 3, 7),
      new THREE.Face3(0, 7, 4)
    ];
  
    geometry.vertices = vertices;
    geometry.faces = faces;
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
  
    var material = new THREE.MeshPhongMaterial({ color: color });
    var cube = new THREE.Mesh(geometry, material);
  
    return cube;
  }
  
  // Crea el cubo principal
  var cube1 = createCube(1, 0x00ff00); // Tamaño 1 y color verde
  scene.add(cube1);
  
  // Crea un cubo más pequeño encima del cubo principal
  var cube2 = createCube(0.5, 0x00ff00); // Tamaño 0.5 y color rojo
  cube2.position.y = 1; // Posición encima del cubo principal
  scene.add(cube2);

  // Crea un cubo más pequeño encima del cubo principal
  var cube3 = createCube(0.25, 0x00ff00); // Tamaño 0.5 y color rojo
  cube3.position.y = 1.2; // Posición encima del cubo principal
  scene.add(cube3);
  
  // Configura la posición de la cámara y el bucle de animación
  camera.position.z = 5;
  camera.position.y = 2;
  
  var animate = function () {
    requestAnimationFrame(animate);
  
    // Puedes agregar aquí las animaciones o interacciones
  
    renderer.render(scene, camera);
  };
  
  animate();