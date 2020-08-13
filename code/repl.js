var editor = ace.edit("editor", {
    theme: "ace/theme/tomorrow_night_blue",
    mode: "ace/mode/javascript",
    autoScrollEditorIntoView: true,
    maxLines: 15,
    minLines: 15
});

var consolewin = ace.edit("consolewin");
consolewin.setOptions({
    theme: "ace/theme/terminal",
    autoScrollEditorIntoView: true,
    maxLines: 8,
    minLines: 8
});
consolewin.renderer.setScrollMargin(10, 10, 10, 10);

var
    preamble = `
// pre
(function () {
    var logg = [];
    console.log = function() {
        let args = [];
        for (var k = 0; k < arguments.length; k++) {
            args.push(arguments[k]);
        }
        logg.push(args.join(" "));
    }
//pre
`;

var postamble = `
//post
return logg.join("\\n") + "\\n";
})();

//post
`;


window.addEventListener('message',

    function(e) {
        // Sandboxed iframes which lack the 'allow-same-origin'
        // header have "null" rather than a valid origin. This means you still
        // have to be careful about accepting data via the messaging API you
        // create. Check that source, and validate those inputs!
        var frame = document.getElementById('sandboxed');
        if (e.origin === "null" && e.source === frame.contentWindow) {
            consolewin.setValue(e.data);
            consolewin.clearSelection(); // This will remove the highlight over the text
        }
    });

function evaluate() {
    var frame = document.getElementById('sandboxed');
    // var code = document.getElementById('code').value;
    var code = preamble + editor.getValue() + postamble;
    clearConsoleWin();
    //console.log(code);
    // Note that we're sending the message to "*", rather than some specific
    // origin. Sandboxed iframes which lack the 'allow-same-origin' header
    // don't have an origin which you can target: you'll have to send to any
    // origin, which might alow some esoteric attacks. Validate your output!
    frame.contentWindow.postMessage(code, '*');
}

function clearConsoleWin() {
    consolewin.setValue("");
    consolewin.clearSelection(); // This will remove the highlight over the text
}

document.getElementById('safe').addEventListener('click', evaluate);
document.getElementById('clear').addEventListener('click', clearConsoleWin);
document.getElementById("sandboxed").style.display = "none";