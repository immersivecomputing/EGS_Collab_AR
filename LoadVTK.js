import { VTKLoader } from './threejs/examples/jsm/loaders/VTKLoader.js';
import * as THREE from './threejs/build/three.module.js';

function LoadVTK(fileName, group, convert){
    const loader1 = new VTKLoader();
    loader1.load(fileName, function (geometry){
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        const mesh = new THREE.Mesh( geometry, material );

        if(convert){
            mesh.scale.set(3.28084 * 0.01, 3.28084 * 0.01, 3.28084 * 0.01);
        }

        group.add(mesh)
        mesh.position.set(4047.435, -1047.088, -2779.125);
        
        

    })
}

export { LoadVTK };