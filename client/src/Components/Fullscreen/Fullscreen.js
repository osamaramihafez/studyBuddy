import ***REMOVED*** ButtonToolbar } from "react-bootstrap";

class Fullscreen extends React.Component***REMOVED***
    render() ***REMOVED***
        return (
          <div className="fullscreen">
              <ButtonToolbar>
              <Button variant="outline-primary" active onclick="">
                  Fullscreen
                  </Button>
              </ButtonToolbar>
          </div>
        )
      }
}



//Inspired from https://zinoui.com/blog/javascript-fullscreen-api

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

