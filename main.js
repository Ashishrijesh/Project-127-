song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload()
{
    song = loadSound("Panic_At_the_Disco_-_High_Hopes.mp3");
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(900, 800);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
    
}

function modelLoaded()
{
    console.log("poseNet is intialized!");
}

function draw()
{
    image = video(0, 0, 900, 800);
}

function gotPoses()
{
    if(poseNet > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function loadSound()
{
    console.log("loading....");
}


