
function ShowFeedbackText(text) {

    const feedback = document.createElement( 'FeedbackText' );
    feedback.style.display = '';

	feedback.style.cursor = 'pointer';
	feedback.style.left = 'calc(50% - 50px)';
	feedback.style.width = '100px';
    feedback.textContent = text;

    feedback.style.position = 'absolute';
    feedback.style.bottom = '20px';
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

export {ShowFeedbackText};