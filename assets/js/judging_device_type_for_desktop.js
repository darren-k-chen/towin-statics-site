// JavaScript source code
// Author: K.J. Chen

function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

if (isMobile()) {
    window.location.href = "index_for_mobile.html";
}