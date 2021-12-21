status="";
object_val="";
function preload() {
    
}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 400, 400);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    object_val = document.getElementById("object_found").value;
}
function modelLoaded() {
    console.log("model loaded");
    status = true;
}