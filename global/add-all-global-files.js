/**
 * Adds global CSS and JS files to the page.
 */
const globalFilePath = "https://www.pagoole.com.bd/";

// List of global CSS files
const globalCssFiles = [
    globalFilePath + 'css/footer.css',
    globalFilePath + 'css/global-css.css',
    'css/style.css', // Local CSS file
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // Font Awesome CDN
    // Add more CSS file paths as needed
];

// List of global JS files
const globalJsFiles = [
    globalFilePath + 'js/pagoole.js',
    globalFilePath + 'js/loading.js',
    globalFilePath + 'js/footer.js',
    'js/header-footer-banner.js', // Local JS file
    'js/script.js', // Local JS file
    // Add more JS file paths as needed
];

// Function to add CSS files
function addGlobalCss(files) {
    files.forEach(file => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = file;
        document.head.appendChild(link);
    });
}

// Function to add JS files
function addGlobalJs(files) {
    files.forEach(file => {
        const script = document.createElement('script');
        script.src = file;
        script.async = false;
        document.body.appendChild(script);
    });
}

// Add global files to the page
addGlobalCss(globalCssFiles);
addGlobalJs(globalJsFiles);