import { VTKLoader } from './threejs/examples/jsm/loaders/VTKLoader.js';
import * as THREE from './threejs/build/three.module.js';

function LoadVTK(fileName, scene, redScale, convert){
    const loader1 = new VTKLoader();
    loader1.load(fileName, function (geometry){
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        const mesh = new THREE.Mesh( geometry, material );

        

        if(convert){
            mesh.scale.set(3.28084 * redScale, 3.28084 * redScale, 3.28084 * redScale);
        }
        else{
            mesh.scale.set(redScale, redScale, redScale);
        }

        mesh.position.set(-4047.435, 1047.088, 2779.125);
        
        scene.add(mesh)

    })
}

export { LoadVTK };