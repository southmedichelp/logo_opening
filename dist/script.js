var image = new Image();
imageSrc = 'data:image/jpeg;base64,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DgAAAAAAAAAAAAA/gAAAOEJJTQPyAAAAAAAKAAD///////8AADhCSU0EDQAAAAAABAAAAB44QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHgAAAAAABAAAAAA4QklNBBoAAAAAA0kAAAAGAAAAAAAAAAAAAAEAAAABAAAAAAoAYwBsAG8AdQBkAC0AcwBvAGYAdAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAQAAAAAAUmdodGxvbmcAAAEAAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAEAAAAAAFJnaHRsb25nAAABAAAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAA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AEMAQwAgADIAMAAxADcAAAABADhCSU0EBgAAAAAABwAGAAAAAQEA/+ETPmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTQtMTAtMDNUMTc6NTM6MTgrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTctMDEtMDFUMTI6MTg6MjMrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE3LTAxLTAxVDEyOjE4OjIzKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OGQyNGRmNGEtYjg1ZS1iZDRkLThkZmQtMTNjYzY5ZDhmMDU0IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjdkN2EyZjctZDAxMy0xMWU2LTkxNmQtZDc0NmFjMjM5MGRkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjBiNTFmMTMtYmQyNi03MDRjLTgzZjMtNDRjNmE3NmQ2NjNjIiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iQ0RDRkZBN0RBOEM3QkUwOTA1NzA3NkFFQUYwNUMzNEUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwYjUxZjEzLWJkMjYtNzA0Yy04M2YzLTQ0YzZhNzZkNjYzYyIgc3RFdnQ6d2hlbj0iMjAxNC0xMC0wM1QxNzo1MzoxOCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2NiMmE4NTMtMjhjZC02NzRmLWFhMzQtZGU0NWMxZTRmNTUxIiBzdEV2dDp3aGVuPSIyMDE0LTEwLTAzVDE3OjU0OjM2KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODQwOTJjZi1lYjEyLTQ0NGEtYjRkNy1kN2IwNTQ5ZjY2ZTAiIHN0RXZ0OndoZW49IjIwMTQtMTAtMDNUMTg6MTE6MjcrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Nzc2Y2I0ZTAtNjRmNi03OTQwLWE5OGYtNWFlZTU2YTU3NzZkIiBzdEV2dDp3aGVuPSIyMDE0LTEwLTAzVDE4OjExOjI3KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZDI0ZGY0YS1iODVlLWJkNGQtOGRmZC0xM2NjNjlkOGYwNTQiIHN0RXZ0OndoZW49IjIwMTctMDEtMDFUMTI6MTg6MjMrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Njg0MDkyY2YtZWIxMi00NDRhLWI0ZDctZDdiMDU0OWY2NmUwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmIwYjUxZjEzLWJkMjYtNzA0Yy04M2YzLTQ0YzZhNzZkNjYzYyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmIwYjUxZjEzLWJkMjYtNzA0Yy04M2YzLTQ0YzZhNzZkNjYzYyIvPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT4yMkQ2MThEQkU4NjE2NjQ4ODIwN0I1NjU2NzY4MjQ3NDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6YjBiNTFmMTMtYmQyNi03MDRjLTgzZjMtNDRjNmE3NmQ2NjNjPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZEAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCgkKDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEAAQADAREAAhEBAxEB/90ABAAg/8QBogAAAAcBAQEBAQAAAAAAAAAABAUDAgYBAAcICQoLAQACAgMBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAIBAwMCBAIGBwMEAgYCcwECAxEEAAUhEjFBUQYTYSJxgRQykaEHFbFCI8FS0eEzFmLwJHKC8SVDNFOSorJjc8I1RCeTo7M2F1RkdMPS4ggmgwkKGBmElEVGpLRW01UoGvLj88TU5PRldYWVpbXF1eX1ZnaGlqa2xtbm9jdHV2d3h5ent8fX5/c4SFhoeIiYqLjI2Oj4KTlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+hEAAgIBAgMFBQQFBgQIAwNt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';
image.src = imageSrc;
// document.body.appendChild(image);

var texture = new THREE.Texture();
texture.image = image;
image.onload = function() {
	texture.needsUpdate = true;
};

  //////////////////////////////////////////////////////////////////////////////////
  //		Init Three JS BOOTSTRAPER
  //////////////////////////////////////////////////////////////////////////////////

  // init renderer
  var renderer	= new THREE.WebGLRenderer({
    antialias	: false,
    alpha: false,
  });
  renderer.setClearColor(new THREE.Color('gray'), 1)
  renderer.setSize( window.innerWidth, 500 );
  document.body.appendChild( renderer.domElement );

  // array of functions for the rendering loop
  var onRenderFcts= [];

  // init scene and camera
  var scene	= new THREE.Scene();
  var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / 500, 0.01, 1000);
  var step	= 0;

  var geometry = new THREE.TorusGeometry( 1024, 1, 16, 1024);
  var circleGeometry = new THREE.CircleGeometry( 1024, 128);
  var material = new THREE.MeshPhongMaterial({
    color       : 0xdfd730,
    emissive    : 0xf000f0,
    specular    : 0xa0ff32,
    shininess   : 20,
    side: THREE.DoubleSide, 
    map: texture,
    bumpMap: texture,
    bumpScale : 0.25
  });

  var torus = new THREE.Mesh( geometry, material );
  scene.add( torus );

  camera.position.x = circleGeometry.vertices[1].x;
  camera.position.y = circleGeometry.vertices[1].y;
  camera.position.z = circleGeometry.vertices[1].z;
  camera.lookAt(circleGeometry.vertices[2]);

  // Create the light
  var spotlight = new THREE.SpotLight( 0xffafff);
  spotlight.position.set( camera.position.x, camera.position.y, camera.position.z );
  spotlight.intensity = 20;
  spotlight.target.position.set(circleGeometry.vertices[10].x, circleGeometry.vertices[10].y, circleGeometry.vertices[10].z);
  spotlight.distance = 20;
  scene.add(this.spotlight);

//////////////////////////////////////////////////////////////////////////////////
//		render the whole thing on the page
//////////////////////////////////////////////////////////////////////////////////

// handle window resize
window.addEventListener('resize', function(){
  renderer.setSize( window.innerWidth, 500 )
  camera.aspect	= window.innerWidth / 500
  camera.updateProjectionMatrix()		
}, false)

// render the scene
onRenderFcts.push(function(){
  renderer.render( scene, camera );
  torus.rotation.z -= 0.002;
  camera.rotation.z = -1.57+Math.cos(-step);
  step += 0.005;
})

// run the rendering loop
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
  // keep looping
  requestAnimationFrame( animate );
  // measure time
  lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
  var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
  lastTimeMsec	= nowMsec
  // call each update function
  onRenderFcts.forEach(function(onRenderFct){
    onRenderFct(deltaMsec/1000, nowMsec/1000)
  })
})