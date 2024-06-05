function setup(){
    canvas = createCanvas(800,500);
    canvas.center();
}
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();
function start(){
    recognition.start();
    document.getElementById("status").innerHTML = "Status : Canvas is listening. Please speak!";
}
y=0;
x = 0;
dr = 0;
dc = 0;
ds = 0;
synth = window.speechSynthesis;
utterThis = "";
recognition.onresult = function(event){
    console.log(event);
    speech = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognized as "+speech;
    if(speech == "rectangle"){
        y = Math.random()*500;
        x = Math.random()*800;
        document.getElementById("status").innerHTML = "Status : Drawing rectangle";
        dr=1;
        utterThis = new SpeechSynthesisUtterance("Rectangle");
        synth.speak(utterThis);
    }
    if(speech == "square"){
        y = Math.random()*500;
        x = Math.random()*800;
        document.getElementById("status").innerHTML = "Status : Drawing square";
        ds=1;
        utterThis = new SpeechSynthesisUtterance("square");
        synth.speak(utterThis);
    }
    if(speech == "circle"){
        y = Math.random()*500;
        x = Math.random()*800;
        document.getElementById("status").innerHTML = "Status : Drawing circle";
        dc=1;
        utterThis = new SpeechSynthesisUtterance("circle");
        synth.speak(utterThis);
    }
}
function draw(){
    if(dc==1){
        fill("orange");
        circle(x,y,50)
        document.getElementById("status").innerHTML="Status : Circle is drawn";
        dc = 0;
    }
    if(dr==1){
        fill("yellow");
        rect(x,y,100,20)
        document.getElementById("status").innerHTML="Status : Rectangle is drawn";
        dr = 0;
    }
    if(ds==1){
        fill("red");
        rect(x,y,50,50)
        document.getElementById("status").innerHTML="Status : Square is drawn";
        ds = 0;
    }
}
function clearc(){
    
}