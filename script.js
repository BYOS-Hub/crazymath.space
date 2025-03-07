// Pop-up trigger function
window.onload = function() {
    // Show the popup after 1 second (1000 milliseconds)
    setTimeout(function() {
        document.getElementById('popup').style.visibility = 'visible';
    }, 1000);
    
    // Automatically detect the current website's domain (without the protocol or path)
    const websiteUrl = window.location.hostname;
    
    // Set the URL for the "Submit an issue" link
    document.getElementById('submit-issue').href = `https://github.com/BYOS-Hub/${websiteUrl}/issues`;
};
