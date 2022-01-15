prediction1="";
prediction2="";

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
    var synth=window.SpeechSynthesis;
    data1="The first prediction is "+prediction1;
    data2="And the second prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(data1+data2);
    synth.speak(utterthis);

}