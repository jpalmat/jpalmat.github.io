(function(){

"use strict"

window.onload = function(){
    document.getElementById("animationSelector").onchange = getAnimationPage;
    document.getElementById("sizeSelector").onchange = setAnimationSize;
    document.getElementById("startBtn").onclick = animationLooper;
    document.getElementById("stopBtn").onclick = animationStopper;
};

function getAnimationPage(){
    let e = document.getElementById("animationSelector");
    let v = document.getElementById("viewBoard")
    if(e.value === "blank"){
        v.innerHTML = BLANK;
    }else if(e.value === "exercise"){
        v.innerHTML = EXERCISE;
    }else if(e.value === "juggler"){
        v.innerHTML = JUGGLER;
    }else if(e.value === "bike"){
        v.innerHTML = BIKE;
    }else if(e.value === "dive"){
        v.innerHTML = DIVE;
    }else if(e.value === "custom"){
        v.innerHTML = CUSTOM;
        v.readOnly = false;
    }
}

function setAnimationSize(){
    let e = document.getElementById("sizeSelector");
    let v = document.getElementById("viewBoard");
    if(e.value === "t"){
        v.style.fontSize = "7pt";
    }else if(e.value === "s"){
        v.style.fontSize = "10pt";
    }else if(e.value === "m"){
        v.style.fontSize = "12pt";
    }else if(e.value === "l"){
        v.style.fontSize = "16pt";
    }else if(e.value === "xl"){
        v.style.fontSize = "24pt";
    }else if(e.value === "xxl"){
        v.style.fontSize = "42pt";
    }
}

var x = null;
var i;

function animationLooper(){
    let v = document.getElementById("viewBoard");
    let arr = v.innerHTML.split("=====");
    let s;
    if(document.getElementById("turbo").checked){
        s = 50;
    }else{
        s = 250;
    }
    x = setInterval(myAnimate, s);

    function myAnimate(){
        if(i === undefined){
            i = 0;
        }else if(i < (arr.length - 1)){
            i = i + 1;
        }else if(i === (arr.length - 1)){
            i = 0;
        }
        v.innerHTML = arr[i];
        document.getElementById("startBtn").disabled = true;
        document.getElementById("animationSelector").disabled = true;
    }
}

function animationStopper(){
    clearInterval(x);
    getAnimationPage();
    document.getElementById("startBtn").disabled = false;
    document.getElementById("animationSelector").disabled = false;
}

})();
