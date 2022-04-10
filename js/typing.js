const box = document.querySelector('.typing');
const text = "I'm Developer from Białystok, Poland. I'm creating websites and apps in Java and Front-end technologies.";
let wordIndex = 0;
let oldTime = 0;
let speed = 100;

const typing = (newTime) => {
    if(newTime - oldTime > speed) {
        oldTime = newTime;
        const letter = text.substr(wordIndex, 1); 
        box.textContent += letter;
        wordIndex++;
    }
   
    requestAnimationFrame(typing);
}


typing()

