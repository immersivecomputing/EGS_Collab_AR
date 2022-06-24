let pathPrefix = "./";
//let pathPrefix = "./main/";


// async () => {
//     const { VTKLoader } = await import(pathPrefix + 'threejs/examples/jsm/loaders/VTKLoader.js');
//     const { OBJLoader } = await import(pathPrefix + 'threejs/examples/jsm/loaders/OBJLoader.js');
//     const { THREE } = await import(pathPrefix + 'threejs/build/three.module.js');
//}
import { VTKLoader } from './threejs/examples/jsm/loaders/VTKLoader.js';
import { OBJLoader } from './threejs/examples/jsm/loaders/OBJLoader.js';
import * as THREE from './threejs/build/three.module.js';



function LoadVTK(loadedModel, VTKfilePath, renderOrder, surfColor, clipPlanes){
    const loader = new VTKLoader();
    console.log(VTKfilePath);
    console.log('/EGS_Collab_AR/ERT_Data/' + VTKfilePath);
    loader.load( /*pathPrefix + */ '/main/EGS_Collab_AR/ERT_Data/' + VTKfilePath, function ( geometry ) {

        geometry.computeVertexNormals();
        const material = new THREE.MeshLambertMaterial( { 
            color: surfColor,
            opacity: 0.25,
            transparent: true,
            clippingPlanes: clipPlanes,
		    clipShadows: true,
            side: 2
        });

        const mesh = new THREE.Mesh( geometry, material);
        mesh.renderOrder = renderOrder;
        loadedModel.add( mesh );
    });
}

//Included for flexibility
function LoadOBJ(fileName, group, convert, renderOrder, surfColor){
    const loader1 = new OBJLoader();
    loader1.load(fileName, function (object){
        
        const material = new THREE.MeshLambertMaterial( { 
            color: surfColor,
            opacity: 0.1,
            transparent: true,
            side: 2
        });

        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
                child.castShadow = false;
                child.receiveShadow = false;
				child.geometry.computeVertexNormals(true);
            }
        });

        if(convert){
            object.scale.set(3.28084, 3.28084, 3.28084);
        }

        object.position.set(-4047.435, -1047.088, -2779.125);
        object.rotation.set(-90 * (Math.PI / 180), 0 ,0);
        object.renderOrder = renderOrder;
        object.bulkConductivity = 7-renderOrder;

        group.add(object);

    })
}

export { LoadVTK, LoadOBJ };