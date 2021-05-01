song="";
leftWristX="";
leftWristy="";
rightWristX="";
rightWristy="";
ScoreLeftWrist="";
ScoreRightWrist="";

function preload()
{
    song=loadSound("music.mp3");
   
}
function setup()
{
canva=createCanvas(500 , 500);
video=createCapture(VIDEO);
video.hide();
canva.position(500 , 200);

console.log(ml5.version);
poseNet= ml5.poseNet(video , modelLoaded);
poseNet.on("pose", gotPoses);

}
function draw()
{
 image(video , 0 , 0 , 500 , 500);
 fill(0 , 255 , 255);
 stroke(0 , 0 , 255);
 

 if (ScoreLeftWrist > 0)
 {
    circle(leftWristX ,leftWristy ,30);
    convert_number=Number(leftWristy);
    remove_decimal=floor(convert_number);
    volume=remove_decimal/500;
    song.setVolume(volume);

    document.getElementById("sound_control").innerHTML=volume;
    
 }
 
}
function songPlay()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1)
}
function songStop()
{
    song.stop()
}
function modelLoaded ()
{
    console.log("Model Was taking your device data (DANGER !) please do not touch the code ");
    console.log("Hey this website is very dangerous !!!!!");
}
function gotPoses (result)
{
   if (result.length > 0)
   {
      
    console.log(result); 

    leftWristX=result[0].pose.leftWrist.x;
    rightWristX=result[0].pose.rightWrist.x;
    leftWristy=result[0].pose.leftWrist.y;
    rightWristy=result[0].pose.leftWrist.y;


    ScoreLeftWrist=result[0].pose.keypoints[9].score;
    ScoreRightWrist=result[0].pose.keypoints[10].score;



     

    


   }

}