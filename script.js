
const scene = new THREE.Scene();

/* (
  - How wide the camera view will be for the user (Low # = Too wide => Figure will not fit screen)
  - Width/Height => Make the shape proportional
  - Elements closer to this number won’t be seen
  - Max distance we will see from camera’s view
*/
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

// The renderer: something that draws 3D objects onto the canvas
const renderer = new THREE.WebGLRenderer({ alpha: true } );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);//Background color = Use Hex Code (0xHexCode)
document.body.appendChild(renderer.domElement);

//Camera Position = The user's view
camera.position.z = 20;

const cube = {
  //Geometry/Shape + Size of 3D Object
  geometry: new THREE.CubeGeometry(10,10,10),
  //The material / appearance of the cube
  material: new THREE.MeshNormalMaterial()
};
// Mesh = the combination of the geometry and material
cube.mesh = new THREE.Mesh(cube.geometry, cube.material);
scene.add(cube.mesh);


const cube1 = {
  //Geometry/Shape + Size of 3D Object
  geometry1: new THREE.CubeGeometry(5,5,5),
  //The material / appearance of the cube
  material1: new THREE.MeshNormalMaterial({wireframe:false})
};
// Mesh = the combination of the geometry and material
cube.mesh1 = new THREE.Mesh(cube1.geometry1, cube1.material1);
cube.mesh1.position.x = -20;
scene.add(cube.mesh1);


const cube2 = {
  //Geometry/Shape + Size of 3D Object
  geometry2: new THREE.CubeGeometry(5,5,5),
  //The material / appearance of the cube
  material2: new THREE.MeshNormalMaterial({wireframe:false})
};
// Mesh = the combination of the geometry and material
cube.mesh2 = new THREE.Mesh(cube1.geometry1, cube1.material1);
cube.mesh2.position.x = 20;
scene.add(cube.mesh2);

var imgArray = ["https://s3.amazonaws.com/media.briantracy.com/blog/wp-content/uploads/2018/01/08095511/will-rodger-dont-let-yesterday.png", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-camilla-eyring-kimball-1562000222.png", "https://i.pinimg.com/564x/a6/9d/07/a69d07ab68554da92a5660418927e0e0.jpg", "https://www.dailyfunnyquote.com/wp-content/uploads/2018/06/40-Positive-Quotes-About-Life-And-Encourage-Quotes-6.jpg", "https://1.bp.blogspot.com/-S6101WzpTlY/Xw6YtZ8J_TI/AAAAAAAAxRw/fzRc39URQrAP1Fl0K_OeXbQ9Ok3oezNtACLcBGAsYHQ/s1600/Inspirational-quotes-about-life-and-struggles%2B%25282%2529-min.jpg","https://iamfearlesssoul.com/wp-content/uploads/2018/02/grow-you.jpg", "https://i0.wp.com/quotesviral.net/wp-content/uploads/2019/07/Inspirational-Positive-Quotes-Life-is-better-when-you-cry-a.jpg?w=662&ssl=1","https://www.keepinspiring.me/wp-content/uploads/2019/10/inspirational-quotes-5-min.jpg"]
var img = document.querySelector("#img");

var domEvents	= new THREEx.DomEvents(camera, renderer.domElement);
let cubeClicked = false;
domEvents.addEventListener(cube.mesh,'click',event=>{
  if(!cubeClicked){
    cube.material.wireframe = true;
    cubeClicked = true;
    img.src = imgArray[Math.floor(Math.random()*imgArray.length)];
  }else{
    cube.material.wireframe = false;
    cubeClicked = false;
    img.src = imgArray[Math.floor(Math.random()*imgArray.length)];
  }

})



function render(){
//Render the scene and camera => Outputs the scene and Camera
renderer.render(scene, camera);

//Animations to the Mesh
cube.mesh.rotation.x +=0.05;
cube.mesh.rotation.y -=0.03;

cube.mesh1.rotation.x +=0.05;
cube.mesh1.rotation.y -=0.03;

cube.mesh2.rotation.x +=0.05;
cube.mesh2.rotation.y -=0.03;

requestAnimationFrame(render);

//Render the background image and camera
  // renderer.autoClear = true;
  // renderer.clear();
  // renderer.render(scene, camera);
};

render();

document.querySelector("#button").addEventListener("click",function(){
    const prompts = ["What would you do if you woke up one morning to find yourself invisible?", " Describe the perfect day.  Put in as many details as you can.  Make it a possible day, not a 'dream day'.", "Who is your favorite person in all the world and why?", "Where do you see yourself in 10 years?", "What do I know to be true that I didn't know a year ago?", "If you could choose any place or scenario (real or imaginary) to place yourself in right now for your comfort and relaxation, where would it be? Describe it in as much detail as possible.","I am grateful for... (List at least 15 things)"];
    const randomPrompt = prompts[Math.floor(Math.random()*prompts.length)]
    document.getElementById("prompt").value = randomPrompt;
})

alert("Welcome to the Galactic Journal! A place for you to record all your personal thoughts.");
alert("There are random prompts for you to write about if you have no idea what to write about and there are positive quotes at the bottom.")
alert("If you would like to see a different quote, please click on the middle rotating cube. Click the cube again, if the quote does not change.");
alert("Without further ado, HAVE FUN JOURNALING!");
