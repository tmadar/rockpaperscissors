var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
