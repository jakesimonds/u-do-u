// Background script for u-do-u extension
chrome.runtime.onStartup.addListener(() => {
  showWhatchaDoingModal();
});

// Also trigger on extension install/enable (for testing)
chrome.runtime.onInstalled.addListener(() => {
  showWhatchaDoingModal();
});

function showWhatchaDoingModal() {
  // Create a simple prompt modal
  chrome.windows.create({
    url: chrome.runtime.getURL('modal.html'),
    type: 'popup',
    width: 800,
    height: 800,
    //focused: true
  });
}

// Removed auto-clear - we want to keep activities for export
