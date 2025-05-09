
function switchPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.add('active');
}

// Default to show the trade page
document.addEventListener('DOMContentLoaded', () => {
    switchPage('trade');
});
