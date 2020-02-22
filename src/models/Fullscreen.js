document.addEventListener("fullscreenchange", function (event) ***REMOVED***
    if (document.fullscreenElement) ***REMOVED***
        // fullscreen is activated
        document.exitFullscreen();
    } else ***REMOVED***
        // fullscreen is cancelled
        document.documentElement.requestFullscreen();
    }
***REMOVED***

document.addEventListener("fullscreenerror", function (event) ***REMOVED***
    // an error occurred
    document.write("Error occured from fullscreen");
***REMOVED***

