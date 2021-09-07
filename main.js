function setup()
{
    video=createCapture(VIDEO);
    video.size(400,330);
    video.position(100,150)

    canvas=createCanvas(450,450);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw()
{
 background("#808080");
}

function modelLoaded()
{
    console.log("poseNet is Initialised" )
}

function gotPoses(results)
{
 if(results.length>0)
 {
   console.log(results);
 }
}