document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Check if the 'popup' parameter is present in the URL
    if (getUrlParameter('popup') === 'true') {
        popup.style.display = 'block';
    }

    // Close the popup when the close button is clicked
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close the popup when clicking outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    // For testing: open the popup when clicking the shareable link
    var shareableLink = document.getElementById('shareableLink');
    shareableLink.onclick = function(event) {
        event.preventDefault(); // Prevent the default link behavior
        var newUrl = new URL(window.location.href);
        newUrl.searchParams.set('popup', 'true');
        window.history.pushState({}, '', newUrl);
        popup.style.display = 'block';
    }
});
