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
});
