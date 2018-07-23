// get the URL of the page
var url = document.location.href;

var globalDict = {};
var detectedKeys = "";

var anchors = document.getElementsByTagName('a')
var len = anchors.length
while (len--){
    var a = anchors[len];
    a.innerHTML = "<sup><b> <font color = 'red'>" + len +"</font></b></sup>" + a.innerHTML;
    globalDict[len] = a.href;

}

window.addEventListener("keydown", function(e) { var evtobj = window.event? event : e
    if (evtobj.altKey && evtobj.keyCode >= 48 && evtobj.keyCode <= 57) {
        detectedKeys = detectedKeys + (evtobj.keyCode-48);
        console.log("hey I detected:" + (evtobj.keyCode-48));
    }
    //detect Enter
    else if (evtobj.keyCode == 13 && detectedKeys) {
        console.log("Finally I detected:" + detectedKeys);
        if (detectedKeys in globalDict) {
            console.log("Hey I have following in the dict " + globalDict[detectedKeys]);
        }
        tmpURL = globalDict[detectedKeys];
        detectedKeys = "";
        window.location = tmpURL;
    }
    else if (evtobj.altKey) {
    //no-op for alt key
    }
    else {
        detectedKeys = "";
    }
},
false);

console.log(globalDict);
