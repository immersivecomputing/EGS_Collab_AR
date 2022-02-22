
function ShowFeedbackText(text, renderer, sessionInit = {} ) {

    const feedback = document.createElement( 'FeedbackText' );
    feedback.style.display = '';

	feedback.style.cursor = 'pointer';
	feedback.style.left = 'calc(50% - 50px)';
	feedback.style.width = '100px';
    feedback.textContent = text;
    feedback.style.bottom = '20px';
    feedback.style.padding = '12px 6px';
    feedback.style.border = '1px solid #fff';
    feedback.style.borderRadius = '4px';
    feedback.style.background = 'rgba(0,0,0,0.1)';
    feedback.style.color = '#fff';
    feedback.style.font = 'normal 13px sans-serif';
    feedback.style.textAlign = 'center';
    feedback.style.opacity = '0.5';
    feedback.style.outline = 'none';
	feedback.style.zIndex = '999';

    return feedback;
}

export {ShowFeedbackText};