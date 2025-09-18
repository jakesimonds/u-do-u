function saveAndClose() {
    const input = document.getElementById('userInput');
    const userText = input.value.trim();
    
    if (userText) {
        // Save to Chrome storage
        chrome.storage.local.set({
            'currentActivity': userText
        }, () => {
            // Close the modal window
            window.close();
        });
    } else {
        // If empty, just close
        window.close();
    }
}

// Allow Enter key to submit
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saveAndClose();
    }
});
