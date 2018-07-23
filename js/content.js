// get the URL of the page
var url = document.location.href

var url_pages = [], anchor_nodes = [];

var anchors = document.links
var len = anchors.length

while (len--){
    var a = anchors[len];
    anchor_nodes.push(a); // push the node object in case that needs to change
    url_pages.push(a.href); // push the href attribute to the array of hrefs

    var n = a.innerHTML.indexOf("img")
    var s = a.innerHTML.indexOf("span")
    //alert(n +" " +a.innerHTML)
    console.log(a.innerHTML+","+n + " " + len)
    console.log(n == -1);
     if( n+"" == "-1" && s+"" == "-1"){
        console.log(a.innerHTML +","+n)
         a.innerHTML = "<sup><b> <font color = 'red'>" + len +"</font></b></sup>" + a.text;
     }


}
