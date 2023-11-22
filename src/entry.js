/**
 * entry.js
 *
 * This is the first file loaded. It sets up the Renderer,
 * Scene and Camera. It also starts the render loop and
 * handles window resizes.
 *
 */

import { WebGLRenderer, PerspectiveCamera, Scene, Vector3, TextureLoader, MeshStandardMaterial, BoxGeometry, Mesh, DefaultLoadingManager } from 'three';
import SeedScene from './objects/Scene.js';
import ImageScene from './objects/ImageScene.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import IMAGE from './textures/negz.jpg'


const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({antialias: true});
const controls = new OrbitControls(camera, renderer.domElement)
const imageScene = new ImageScene();

// const texture = new TextureLoader().load(IMAGE)
// scene
scene.add(imageScene);
// scene.background = texture

// camera
camera.position.set(0, 0,-10);
camera.lookAt(new Vector3(0,0,0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  // imageScene.update && imageScene.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => {
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );

DefaultLoadingManager.onProgress = function ( item, loaded, total ) {
  // All textures are finished loading when loaded === total

  console.log(loaded)
  console.log(total)
};
