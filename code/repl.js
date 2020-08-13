var editor = ace.edit("editor", {
    theme: "ace/theme/tomorrow_night_blue",
    mode: "ace/mode/javascript",
    autoScrollEditorIntoView: true,
    maxLines: 15,
    minLines: 15
});

var consolewin = ace.edit("consolewin");
consolewin.setOptions({
    autoScrollEditorIntoView: true,
    maxLines: 8,
    minLines: 8
});
consolewin.renderer.setScrollMargin(10, 10, 10, 10);

window.addEventListener('message',
    function(e) {
        // Sandboxed iframes which lack the 'allow-same-origin'
        // header have "null" rather than a valid origin. This means you still
        // have to be careful about accepting data via the messaging API you
        // create. Check that source, and validate those inputs!
        var frame = document.getElementById('sandboxed');
        if (e.origin === "null" && e.source === frame.contentWindow)
        //alert('Result: ' + e.data);
            consolewin.setValue('Result ' + e.data);
    });

function evaluate() {
    var frame = document.getElementById('sandboxed');
    // var code = document.getElementById('code').value;
    var code = editor.getValue();
    // Note that we're sending the message to "*", rather than some specific
    // origin. Sandboxed iframes which lack the 'allow-same-origin' header
    // don't have an origin which you can target: you'll have to send to any
    // origin, which might alow some esoteric attacks. Validate your output!
    frame.contentWindow.postMessage(code, '*');
}

document.getElementById('safe').addEventListener('click', evaluate);
document.getElementById("sandboxed").style.display = "none";