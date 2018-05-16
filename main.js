/* Form Validation */
let validationObject = [];
document.querySelector(".robotvalidation").textContent = "false";

//Input Checker: If Character > 1 on click input, change validationObject

$('input').on('keyup', function(e) {
    let idInput = e.target.id;
    console.log(this.value.length);
    if (validationObject)
     if (this.value.length > 2) {
          validationObject.push(idInput)
          console.log(validationObject);
     }
});

/* Voice robot Validation */

let testWord = document.querySelector("#test-word");
let wordRobotValidation = ["robot", "red", "black"];
testWord.textContent = wordRobotValidation[0];

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

recognition.addEventListener("result", function (e) {
        let transcript = event.results[0][0].transcript;
        document.querySelector(".result").textContent = "Result: " + transcript;
        if (transcript === testWord.textContent) {
            validationObject.robot = true;
            document.querySelector(".robotvalidation").textContent = "Valid"
        }
    }

);

// When button is clicked start recognition

document.querySelector(".fa-microphone").addEventListener("click", function () {
    recognition.start();
});
