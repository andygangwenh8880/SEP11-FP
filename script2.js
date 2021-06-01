const scene = new THREE.Scene();

/* (
  - How wide the camera view will be for the user (Low # = Too wide => Figure will not fit screen)
  - Width/Height => Make the shape proportional
  - Elements closer to this number won’t be seen
  - Max distance we will see from camera’s view
*/
const camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,1,2000);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0 );//Background color = Use Hex Code (0xHexCode)

document.body.appendChild(renderer.domElement);

const cube = {
  //Geometry/Shape + Size of 3D Object
  geometry: new THREE.CubeGeometry(5,5,5),
  //The material / appearance of the cube
  material: new THREE.MeshBasicMaterial({color: 0x00FFFF})
};

// Mesh = the combination of the geometry and material
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);

scene.add(cube.mesh);

//Camera Position = The user's view
camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 0;

// var texture = THREE.ImageUtils.loadTexture( 'Galaxy.jpg' );
//   var backgroundMesh = new THREE.Mesh(
//   new THREE.PlaneGeometry(2.5, 2, 0),
//   new THREE.MeshBasicMaterial({
//   map: texture
// }));

// backgroundMesh .material.depthTest = true;
// backgroundMesh .material.depthWrite = false;

// // Create your background scene
// var backgroundScene = new THREE.Scene();
// var backgroundCamera = new THREE.Camera();
// backgroundScene .add(backgroundCamera);
// backgroundScene .add(backgroundMesh);



function render(){
//Render the scene and camera => Outputs the scene and Camera
renderer.render(scene, camera);

//Animations to the Mesh
cube.mesh.rotation.x +=0.05;
cube.mesh.rotation.y -=0.03;


requestAnimationFrame(render);

//Render the background image and camera
  renderer.autoClear = true;
  renderer.clear();
  // renderer.render(backgroundScene , backgroundCamera);
  renderer.render(scene, camera);
};

render()



document.querySelector("#button").addEventListener("click",function(){
    const prompts = ["What would you do if you woke up one morning to find yourself invisible?", " Describe the perfect day.  Put in as many details as you can.  Make it a possible day, not a 'dream day'.", "Who is your favorite person in all the world and why?", "Where do you see yourself in 10 years?"];
    const randomPrompt = prompts[Math.floor(Math.random()*prompts.length)]
    document.getElementById("prompt").value = randomPrompt;
})