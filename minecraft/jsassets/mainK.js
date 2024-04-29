twoDContent = new Array;
{
  twoDContent[0] = "2k/Alicia.jpg";
  twoDContent[1] = "2k/Annie.jpg";
  twoDContent[2] = "2k/Arya.jpg";
  twoDContent[3] = "2k/Ashley.jpg";
  twoDContent[4] = "2k/Ava.jpg";
  twoDContent[5] = "2k/Carmen.jpg";
  twoDContent[6] = "2k/Cathy.jpg";
  twoDContent[7] = "2k/Craig.jpg";
  twoDContent[8] = "2k/Doris.jpg";
  twoDContent[9] = "2k/Edward.jpg";
  twoDContent[10] = "2k/Harry.jpg";
  twoDContent[11] = "2k/Jimmy.jpg";
  twoDContent[12] = "2k/Joanna.jpg";
  twoDContent[13] = "2k/Joey.jpg";
  twoDContent[14] = "2k/Joy.jpg";
  twoDContent[15] = "2k/Kevin.jpg";
  twoDContent[16] = "2k/Leo.jpg";
  twoDContent[17] = "2k/Matthew.jpg";
  twoDContent[18] = "2k/Routian.jpg";
  twoDContent[19] = "2k/Roy Zhang.jpg";
  twoDContent[20] = "2k/Sophie.jpg";
  twoDContent[21] = "2k/Sunny.jpg";
  twoDContent[22] = "2k/Terrance.jpg";
  twoDContent[23] = "2k/Vihaan.jpg";
  twoDContent[24] = "2k/William.jpg";
}

twoD = new Image;
twoD.src = "";

material = "";
object = "";

function s0(){ index = 0; rndr();}
function s1(){ index = 1; rndr();}
function s2(){ index = 2; rndr();}
function s3(){ index = 3; rndr();}
function s4(){ index = 4; rndr();}
function s5(){ index = 5; rndr();}
function s6(){ index = 6; rndr();}
function s7(){ index = 7; rndr();}
function s8(){ index = 8; rndr();}
function s9(){ index = 9; rndr();}
function s10(){ index = 10; rndr();}
function s11(){ index = 11; rndr();}
function s12(){ index = 12; rndr();}
function s13(){ index = 13; rndr();}
function s14(){ index = 14; rndr();}
function s15(){ index = 15; rndr();}
function s16(){ index = 16; rndr();}
function s17(){ index = 17; rndr();}
function s18(){ index = 18; rndr();}
function s19(){ index = 19; rndr();}
function s20(){ index = 20; rndr();}
function s21(){ index = 21; rndr();}
function s22(){ index = 22; rndr();}
function s23(){ index = 23; rndr();}
function s24(){ index = 24; rndr();}

function rndr(){
  twoD.src = twoDContent[index];
  document.getElementById("viewer").style.display = "block";
	document.getElementById("c").style.display = "none";
	document.getElementById("imageviewer").style.display = "block";
	document.getElementById("img").src = twoD.src;
}
function exit(){
	document.getElementById("viewer").style.display = "none";
	/*window.location.reload();*/
}

function load3D(){
  'use strict';

/* global THREE */
function main(){
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');
  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }
  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();
    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
    camera.updateProjectionMatrix();
    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }
  {
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl(fileMTL, null, (materials) => {
      objLoader.setMaterials(materials);
      objLoader.load(fileOBJ, (event) => {
        const root = event.detail.loaderRootNode;
        scene.add(root);
        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        // set the camera to frame the box
        frameArea(boxSize * 1.2, boxSize, boxCenter, camera);
        // update the Trackball controls to handle the new size
        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
      });
    });
  }
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
main();
}