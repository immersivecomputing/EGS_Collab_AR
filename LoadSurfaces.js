import { VTKLoader } from './threejs/examples/jsm/loaders/VTKLoader.js';
import { OBJLoader } from './threejs/examples/jsm/loaders/OBJLoader.js';
import * as THREE from './threejs/build/three.module.js';

function LoadVTK(fileName, group, convert){
    const loader1 = new VTKLoader();
    loader1.load(fileName, function (geometry){
        geometry.computeVertexNormals();

        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        const mesh = new THREE.Mesh( geometry, material );

        if(convert){
            mesh.scale.set(3.28084, 3.28084, 3.28084);
        }

        mesh.position.set(-4047.435, -1047.088, -2779.125);
        mesh.rotation.set(-90 * (Math.PI / 180), 0 ,0);

        group.add(mesh);

    })
}

function LoadOBJ(fileName, group, convert){
    const loader1 = new OBJLoader();
    loader1.load(fileName, function (object){
        
        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );

        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        });

        if(convert){
            object.scale.set(3.28084, 3.28084, 3.28084);
        }

        object.position.set(-4047.435, -1047.088, -2779.125);
        object.rotation.set(-90 * (Math.PI / 180), 0 ,0);

        group.add(object);

    })
}

export { LoadVTK, LoadOBJ };