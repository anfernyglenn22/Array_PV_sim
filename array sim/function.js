function toggleColOne() {
    var colOne = document.getElementById('toolbar');
    colOne.classList.toggle('hide-col');

    var imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(function (box) {
        box.style.height = colOne.classList.contains('hide-col') ? '0' : '150px';
        box.style.width = colOne.classList.contains('hide-col') ? '0' : '150px';
        box.style.opacity = colOne.classList.contains('hide-col') ? '0' : '1';
    });
}


function toggleImage() {
    var draggableImage = document.getElementById("draggableImage");
    draggableImage.style.display = (draggableImage.style.display === 'none') ? 'block' : 'none';

    if (draggableImage.style.display === 'block') {
        // Calculate the initial position to center the image
        var centerX = window.innerWidth / 2 - draggableImage.width / 2;
        var centerY = window.innerHeight / 2 - draggableImage.height / 2;

        // Set the initial position
        draggableImage.style.position = "absolute";
        draggableImage.style.left = centerX + "px";
        draggableImage.style.top = centerY + "px";
    }
}

function drag(event) {
    // Set the dragged data and specify the operation (move)
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = "move";
}

// Prevent the default behavior when dropping
document.addEventListener("dragover", function (event) {
    event.preventDefault();
});

// Handle the drop event
document.addEventListener("drop", function (event) {
    event.preventDefault();

    // Get the dragged data and move the image to the drop position
    var data = event.dataTransfer.getData("text/plain");
    var draggedElement = document.getElementById(data);

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    draggedElement.style.position = "absolute";
    draggedElement.style.left = mouseX - draggedElement.width / 2 + "px";
    draggedElement.style.top = mouseY - draggedElement.height / 2 + "px";
});