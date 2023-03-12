// Drum start

let drumPattern = [];

// Practice Toggle

document.querySelector(".practice-btn").addEventListener("click",function(){
    this.classList.remove("disable");
    document.querySelector(".record-btn").classList.add("disable");
    document.querySelector(".record-btn").classList.remove("fade-in");
    document.querySelector(".record-btn").innerHTML = "Record";
    document.querySelector(".play-btn").classList.add("disable");
    drumPattern = [];
});

// Record Toggle

document.querySelector(".record-btn").addEventListener("click",function(){
    this.classList.remove("disable");
    this.classList.toggle("fade-in");
    document.querySelector(".practice-btn").classList.add("disable");
    document.querySelector(".play-btn").classList.add("disable");
    this.innerHTML = "Recording";
    drumPattern = [];
});

// Play Toggle

document.querySelector(".play-btn").addEventListener("click",function(){
    this.classList.remove("disable");
    document.querySelector(".practice-btn").classList.add("disable");
    document.querySelector(".record-btn").classList.add("disable");
    document.querySelector(".record-btn").classList.remove("fade-in");
    document.querySelector(".record-btn").innerHTML = "Record";
    for (i = 0; i < drumPattern.length; i++){
        playDelay(i,drumPattern);
    }
});

// Delay between sounds

function playDelay(i,drumPattern){
    setTimeout(function(){
        switchFx(drumPattern[i]);
    }, 200 * i);
}

// Add sound to click

let targetList = document.querySelectorAll(".drum");
for (x = 0; x < targetList.length; x++){
    targetList[x].addEventListener("click",function(){        
    let buttonHTML = this.innerHTML;
    switchFx(buttonHTML);
    animateButton(buttonHTML);
    drumPattern.push(buttonHTML);
    console.log(drumPattern);
    });
}


// Add sound to keydown
document.addEventListener("keydown", function(event){
    let keyChecker = (event.key);
    switchFx(keyChecker);
    animateButton(keyChecker);
    drumPattern.push(keyChecker);
    console.log(drumPattern);
});


// Switch click and keydown for sound

function switchFx(character){

    switch (character) {
        case "w":
            let crashSound = new Audio("sounds/crash.mp3");
            crashSound.play();
            break;

        case "a":
            let kickSound = new Audio("sounds/kick-bass.mp3");
            kickSound.play();
            break;

        case "s":
            let snareSound = new Audio("sounds/snare.mp3");
            snareSound.play();
            break;

        case "d":
            let tom1Sound = new Audio("sounds/tom-1.mp3");
            tom1Sound.play();
            break;
        
        case "j":
            let tom2Sound = new Audio("sounds/tom-2.mp3");
            tom2Sound.play();
            break;

        case "k":
            let tom3Sound = new Audio("sounds/tom-3.mp3");
            tom3Sound.play();
            break;

        case "l":
            let tom4Sound = new Audio("sounds/tom-4.mp3");
            tom4Sound.play();
            break;
    
        default:
            console.log(character);
            break;
    }
}
// Click animation
function animateButton(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    },200);
}



