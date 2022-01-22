song1 = "";
song2 = "";
counter = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function setup()
    {
canvas = createCanvas(600 , 500)
canvas.center()

video = createCapture(VIDEO)
video.hide()

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Working!!!')
}


function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results)
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    }
}


function draw()
{
    image(video , 0 , 0 , 600 , 500)



    fill("#FF0000")
    stroke("#FF0000")

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song2.stop()

        if(song1  == false)
        {
            document.getElementById("songName").innerHTML = "Song Name = " + song1;
        }
    }
}

function preload()
{
song1 = loadSound("Acapulco.mp3");
song2 = loadSound("Ghost.mp3");
}

function start()
{
counter = counter + 1
if(counter == 1)
{
song2.stop()
song1.play()
console.log("Playing 1")
}
else{
    song1.stop()
    song2.play()
    console.log('Playing 2')
    counter = 0;
}

}