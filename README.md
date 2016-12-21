# DroneDeploy-App-PDF-Creator [![Build Status](https://travis-ci.org/ochanje210/DroneDeploy-App-PDF-Creator.svg?branch=master)](https://travis-ci.org/ochanje210/DroneDeploy-App-PDF-Creator)
DroneDeploy App that creates PDF of tile images retrieved via Tiles API
 
![oops, this supposed to be a demo gif](http://i.giphy.com/l4Jzf1YBadKQIKxry.gif)


## How it works
1. Button clicked!
2. The app gets tile urls using Tiles.get API from DroneDeploy
3. The app sends the retrieved tile urls to the Heroku web server
4. Tile urls are encoded to base64 from the server and sent back to the client
5. Now, the app prints PDF on client-side using [pdfmake](https://github.com/bpampuch/pdfmake)

### About Web Server
This app requires additional server-side work in order to avoid CORS issues. 
You can see the web server [here](https://github.com/ochanje210/DroneDeploy-App-PDF-Creator-WebServer)
### Why CORS issues?
The first approach was to make this app as full client-side work. However, 
the tile url's domain, retrieved from Tiles API, was different from the origin domain where the app
is running. Printing PDF from an url on different domain required cross-origin HTTP request and it
was not able to be done since the app seemed running on client side. Therefore, a simple web server
with CORS headers was required to avoid this issue.
