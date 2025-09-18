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
    width: 400,
    height: 200,
    focused: true
  });
}

// Clear storage when Chrome is closing (best effort)
chrome.runtime.onSuspend.addListener(() => {
  chrome.storage.local.clear();
});
