

function ControlPosition(meshSpline, realtimeObject){
	getText(meshSpline, realtimeObject);
}

function getText(meshSpline, realtimeObject){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://raw.githubusercontent.com/immersivecomputing/EGS_Collab_AR/main/TextFile/Position.txt', true);
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var type = request.getResponseHeader('Content-Type');
			if (type.indexOf("text") !== 1) {
				
				//Just for testing
				var today = new Date();
				var sec = today.getSeconds();
				var increment = (sec/60);

				
				
				var position = meshSpline.geometry.parameters.path.getPoint(increment);

				console.log(position);
				realtimeObject.position.set(position);
				console.log(realtimeObject.position);
				console.log(realtimeObject.getWorldPosition);

			}
		}
	}
}
	


export { ControlPosition };
