// get the URL of the page
var url = document.location.href

var url_pages = [], anchor_nodes = [];

var anchors = document.getElementsByTagName('a')
var len = anchors.length
while (len--){
    var a = anchors[len];
    anchor_nodes.push(a); // push the node object in case that needs to change
    url_pages.push(a.href); // push the href attribute to the array of hrefs
    a.innerHTML = "<sup><b> <font color = 'red'>" + len +"</font></b></sup>" + a.innerHTML;

}
