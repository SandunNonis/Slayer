
// Store comments
var comments = [];

// Get comment
var postButton = document.getElementById("postComment");
var commentList = document.getElementById("commentList");

// comment counter
var cCount = document.getElementById("commentCount");

// visitor name and message
var vName = document.getElementById("visitorName");
var vComment = document.getElementById("visitorComment");

// Remove message
var removeButton = document.getElementById("removeComment");

// Post Button
postButton.onclick = function() {

    var name = vName.value;
    var message = vComment.value;

    if (name == "" || message == "") {
        alert("Please enter Your Gaming Name and Message!");
    }
    else {
        comments.push(name + ": " + message);
        cCount.innerHTML = "Total Comments: " + comments.length;
        commentList.innerHTML = "";
        for (var i = 0; i < comments.length; i++) {
            commentList.innerHTML += "<p>" + comments[i] + "</p>";
        }
        vName.value = "";
        vComment.value = "";
        alert("Comment submitted successfully!");
    }

};

// Remove Button
removeButton.onclick = function() {

    if (comments.length > 0) {
        comments.pop();
        cCount.innerHTML = "Total Comments: " + comments.length;
        commentList.innerHTML = "";

        for (var i = 0; i < comments.length; i++) {
            commentList.innerHTML += "<p>" + comments[i] + "</p>";
        }
    }
    else {
        alert("There are no comments to remove!");
    }
    if (comments.length == 0) {
    commentList.innerHTML = "<p>No comments yet. Be the first to leave a message!</p>";
}
};