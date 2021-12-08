

function ControlPosition(){
	let positionAlongBorehole = getText();
	return positionAlongBorehole;
}

function getText(){
	var request = new XMLHttpRequest();
	request.open('GET', 'https://raw.githubusercontent.com/immersivecomputing/EGS_Collab_AR/main/TextFile/Position.txt', true);
	request.send(null);
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var type = request.getResponseHeader('Content-Type');
			if (type.indexOf("text") !== 1) {
				
				//Just for testing
				var today = new Date();
				var min = today.getMinutes();
				var increment = (min/10) % 1.0;

				//console.log(increment);
				return increment;

				//return request.responseText;
			}
		}
	}
}
	


export { ControlPosition };
