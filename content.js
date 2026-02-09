setInterval(() => {
    // ইউটিউবের সব ধরণের স্কিপ বাটন খোঁজা
    const skipButton = document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button');
    
    if (skipButton) {
        skipButton.click();
        console.log("Ad skipped by your extension!");
    }
}, 1000);