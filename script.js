var timeout; // Variable to store timeout ID

// Function to update the output iframe with HTML, CSS, and JavaScript content
function updateOutput() {
    clearTimeout(timeout); // Clear previous timeout
    timeout = setTimeout(function() {
        var htmlCode = document.getElementById('html_code').value;
        var cssCode = document.getElementById('css_code').value;
        var jsCode = document.getElementById('js_code').value;
        var outputFrame = document.getElementById('output').contentWindow.document;

        outputFrame.open();
        outputFrame.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}<\/script>
            </body>
            </html>
        `);
        outputFrame.close();
    }, 300); // Delay for 300 milliseconds before updating output
}

// Call updateOutput() when any of the textareas change
document.getElementById('html_code').addEventListener('input', updateOutput);
document.getElementById('css_code').addEventListener('input', updateOutput);
document.getElementById('js_code').addEventListener('input', updateOutput);

// Initial call to updateOutput() to display the initial HTML code
updateOutput();
