function preload(){
    
}
function setup(){
    canvas=createCanvas(300,300);
    video=createCapture(VIDEO);
    canvas.position(50,250);
    video.hide();
    color="white";
}
function draw(){
    image(video,0,0,300,300);
    tint(color);
  circle(0, 0, 50);
  circle(50, 0, 50);
   circle(100, 0, 50);
   circle(150, 0, 50);
   circle(200, 0, 50);
  
   circle(250, 0, 50);
   circle(300, 0, 50);
  
   circle(0, 50, 50);
  circle(0, 100, 50);
   circle(0, 150, 50);
   circle(0, 200, 50);
   circle(0, 250, 50);
  
   circle(0, 300, 50);

   
   circle(300, 50, 50);
  circle(300, 100, 50);
   circle(300, 150, 50);
   circle(300, 200, 50);
   circle(300, 250, 50);
  
   circle(300, 300, 50);

   circle(0, 300, 50);
  circle(50, 300, 50);
   circle(100, 300, 50);
   circle(150, 300, 50);
   circle(200, 300, 50);
  
   circle(250, 300, 50);
   circle(300, 300, 50);

  
   
   
}
function apply_filter(){
    color=document.getElementById("color").value;
    document.getElementById("color").innerHTML="";
    
}
function take_snapshot(){
    save("screenshot.png")
    
}