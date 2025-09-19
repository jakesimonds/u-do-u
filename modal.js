function saveAndClose() {
    const input = document.getElementById('userInput');
    const userText = input.value.trim();
    
    if (userText) {
        const session = {
            sessionId: `session_${Date.now()}`,
            activity: userText,
            startTime: new Date().toISOString(),
            urls: []
        };
        
        // Add to sessions array in chrome storage
        chrome.storage.local.get(['sessions'], (result) => {
            const sessions = result.sessions || [];
            sessions.push(session);
            chrome.storage.local.set({ 
                'sessions': sessions,
                'currentActivity': userText 
            }, () => {
                window.close();
            });
        });
    } else {
        window.close();
    }
}

// Allow Enter key to submit
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saveAndClose();
    }
});
