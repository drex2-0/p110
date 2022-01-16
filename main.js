prediction1="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);
 
function take_photo()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version: ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/odYCKZ-h0/model.json",modelloaded);

function modelloaded()
{
    console.log("model is loaded");
}

function speak()
{
    var synth=window.speechSynthesis;
    data1="The first prediction is "+prediction1;
    
    var utterThis=new SpeechSynthesisUtterance(data1);
    synth.speak(utterThis);

}
function check()
{
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresults);
}

function gotresults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion").innerHTML=results[0].label;
        prediction1=results[0].label;
        
        speak();
        if(results[0].label=="amazing")
        {
            document.getElementById("result_emoji").innerHTML="&#128076;";
        }
        if(results[0].label=="victory")
        {
            document.getElementById("result_emoji").innerHTML="&#9996;";
        }
        if(results[0].label=="best")
        {
            document.getElementById("result_emoji").innerHTML="&#128077;";
        }
    }
}
