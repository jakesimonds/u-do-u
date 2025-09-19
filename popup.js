// Load and display the current activity when popup opens
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['currentActivity'], function(result) {
        const activityDisplay = document.getElementById('activityDisplay');
        
        if (result.currentActivity) {
            activityDisplay.innerHTML = result.currentActivity;
            activityDisplay.classList.remove('no-activity');
        } else {
            activityDisplay.innerHTML = '<span class="no-activity">Nothing set yet...</span>';
        }
    });
    
    // Add click listener for export button
    document.getElementById('exportBtn').addEventListener('click', exportAndWipe);
});

function exportAndWipe() {
    console.log('Export button clicked!');
    chrome.storage.local.get(['sessions'], (result) => {
        const sessions = result.sessions || [];
        console.log('Found sessions:', sessions);
        
        if (sessions.length > 0) {
            // Create and download JSON file
            const blob = new Blob([JSON.stringify(sessions, null, 2)], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            
            chrome.downloads.download({
                url: url,
                filename: `u-do-u-export-${new Date().toISOString().split('T')[0]}.json`,
                saveAs: false
            }, () => {
                console.log('Download completed, clearing storage');
                // Wipe storage after successful download
                chrome.storage.local.clear();
                window.close();
            });
        } else {
            console.log('No sessions to export');
            alert('No sessions to export yet!');
        }
    });
}
