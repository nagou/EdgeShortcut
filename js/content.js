// get the URL of the page
var url = document.location.href

var url_pages = [], anchor_nodes = [];

var anchors = document.links
var len = anchors.length
alert(len)
while (len--){
    var a = anchors[len];
    anchor_nodes.push(a); // push the node object in case that needs to change
    url_pages.push(a.href); // push the href attribute to the array of hrefs
    if (!isHidden(a))
        alert(a.text);
    a.innerHTML = a.text+" " + "<b> <font color = 'red'>" + len + "</font></b>";

    alert(a.text);
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return ((style.display === 'none') || (style.visibility === 'hidden'))
}