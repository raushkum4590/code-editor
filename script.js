
        var timeout; // Variable to store timeout ID

        // Function to update the output iframe with HTML content
        function updateOutput() {
            clearTimeout(timeout); // Clear previous timeout
            timeout = setTimeout(function() {
                var htmlCode = document.getElementById('html_code1').value;
                var outputFrame = document.getElementById('output').contentWindow.document;

                outputFrame.open();
                outputFrame.write(htmlCode);
                outputFrame.close();
            }, 300); // Delay for 300 milliseconds before updating output
        }

        // Call updateOutput() when the HTML textarea changes
        document.getElementById('html_code1').addEventListener('input', updateOutput);

        // Initial call to updateOutput() to display the initial HTML code
        updateOutput();
