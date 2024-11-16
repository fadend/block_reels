function hideReelLinks() {
    [...document.querySelectorAll('a[href^="/reel/"]')].forEach(
        e => {e.style.display = 'none'; });
}

hideReelLinks();
const observer = new MutationObserver(hideReelLinks);
observer.observe(document.documentElement, {subtree: true, childList: true});