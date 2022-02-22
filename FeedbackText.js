const feedback = document.createElement( 'FeedbackText' );

function ShowFeedbackText(text) {    
    feedback.style.display = '';

	feedback.style.cursor = 'pointer';
	feedback.style.left = 'calc(50% - 100px)';
	feedback.style.width = '200px';
    feedback.textContent = text;

    feedback.style.position = 'absolute';
    feedback.style.bottom = '70px';
    feedback.style.padding = '12px 6px';
    feedback.style.background = 'rgba(0,0,0,0.1)';
    feedback.style.color = '#fff';
    feedback.style.font = 'normal 13px sans-serif';
    feedback.style.textAlign = 'center';
    feedback.style.opacity = '1.0';
    feedback.style.outline = 'none';
	feedback.style.zIndex = '999';

    return feedback;
}


function HideFeedbackText(){
    feedback.textContent = '';
}

export {ShowFeedbackText, HideFeedbackText};