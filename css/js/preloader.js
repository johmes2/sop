// Function to handle the preloader display
function showPreloader() {
    const preloader = document.getElementById('preloader');

    // Show preloader for 5 seconds
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader
        window.location.href = 'index.html'; // Redirect to main app page
    }, 5000); // 5000ms = 5 seconds
}

// Call the function when the window is loaded
window.onload = showPreloader;
