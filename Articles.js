function commentButtonClicked() {
	// Remove comment button
	var commentButton = document.getElementById("commentButton");
	commentButton.parentNode.removeChild(commentButton);
	
	// Add Comment Form
	var commentForm = document.getElementById("commentForm");
	commentForm.removeAttribute("hidden");
}