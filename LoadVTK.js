import { VTKLoader } from './threejs/examples/jsm/loaders/VTKLoader.js';
import * as THREE from './threejs/build/three.module.js';

function LoadVTK(fileName, scene){
    const loader1 = new VTKLoader();
    loader1.load(fileName, function (geometry){
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        const mesh = new THREE.Mesh( geometry, material );
        scene.add(mesh)

    })
}

export { LoadVTK };