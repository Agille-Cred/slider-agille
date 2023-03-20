function requestFullScreen() {
    var el = document.body;
    // suportar mais navegadores.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
        || el.mozRequestFullScreen || el.msRequestFullScreen;
    
    console.log(requestMethod);
    if (requestMethod) {
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}