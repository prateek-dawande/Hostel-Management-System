// Function to display the selected feature
function showFeature(feature) {
    // Hide all features
    document.querySelectorAll('.feature-content').forEach(function(element) {
        element.style.display = 'none';
    });

    // Show the selected feature
    document.getElementById(feature).style.display = 'block';
}

// Default view - show rooms on page load
window.onload = function() {
    showFeature('rooms');
};
