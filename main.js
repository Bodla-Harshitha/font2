function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(100,100);

    canvas=createCanvas(550,500);
    canvas.position(700,130);

    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw(){
    background('#FFFF99');
}

function modelLoaded(){
    console.log("model loaded!!");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
}