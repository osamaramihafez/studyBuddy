import { ButtonToolbar } from "react-bootstrap";

class Fullscreen extends React.Component{
    render() {
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

