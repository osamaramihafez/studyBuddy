document.addEventListener("fullscreenchange", function (event) {
    if (document.fullscreenElement) {
        // fullscreen is activated
        document.exitFullscreen();
    } else {
        // fullscreen is cancelled
        document.documentElement.requestFullscreen();
    }
});

document.addEventListener("fullscreenerror", function (event) {
    // an error occurred
    document.write("Error occured from fullscreen");
});

