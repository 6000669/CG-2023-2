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
function createCube(size, textura) {
    var geometry = new THREE.Geometry();
  
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textura);

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
  
    // Calcular coordenadas UV manualmente
    geometry.faceVertexUvs[0] = [];
    for (let i = 0; i < geometry.faces.length; i++) {
        const face = geometry.faces[i];
        const uvs = [];
        for (let j = 0; j < 3; j++) {
            const vertexIndex = face.a + (j % 3);
            const vertex = geometry.vertices[vertexIndex];
            uvs.push(new THREE.Vector2((vertex.x + 0.5), (vertex.y + 0.5)));
        }
        geometry.faceVertexUvs[0].push(uvs);
    }

    const material = new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, map: texture });

    // Crear un material personalizado utilizando la textura cargada

    var cube = new THREE.Mesh(geometry, material);
  
    return cube;
  }
  
  // Función para trasladar un cubo
function translateCube(cube, translation) {
    cube.position.set(translation.x, translation.y, translation.z);
  }

  var cubes = new THREE.Mesh();


  // Crea el cubo principal
  var cube1 = createCube(1, 'textura.jpg'); //Tiene dos parametros, el Tamaño 1 y color verde
  scene.add(cube1);
  
  // Crea un cubo más pequeño y traslada encima del cubo principal
  var cube2 = createCube(0.5, 'textura2.jpg'); //Tiene dos parametros, el Tamaño 0.5 
  translateCube(cube2, { x: 0, y: 0.75, z: 0 }); // Traslación en el eje Y
  scene.add(cube2);


  // Crea un cubo más pequeño encima del cubo principal
  var cube3 = createCube(0.25, 'textura3.jpg'); ////Tiene dos parametros, el Tamaño 0.5
  translateCube(cube3, { x: 0, y: 1.1, z: 0 });
  scene.add(cube3);
  
  // Configura la posición de la cámara y el bucle de animación
  camera.position.z = 3;
  camera.position.y = 1;

  
  cubes.add(cube1, cube2, cube3)
  scene.add(cubes)
 
  
  var animate = function () {
    requestAnimationFrame(animate);
  
    renderer.render(scene, camera);


  };
  
  animate();