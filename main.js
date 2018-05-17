/* UI Hint */

$('input').on('keyup', function (e) {
    let target = e.target.id;
    let entry = this.value;
    let numberOfCharacter = this.value.length;
    let guideMessage = ["The name is incorrect", "The format of the mail is incorrect", "The address is incorrect", "The password requires a minimum of 8 character, a uppercase letter and a number"];


    function uiValidator(cond, errormessage, guideNumber) {
        if (e.target.classList !== 0) {
            e.currentTarget.className = '';
        }
        if (cond) {
            errormessage.textContent = "";
            e.target.classList.add("validated");
        } else {
            errormessage.textContent = guideMessage[guideNumber];
            e.target.classList.add("not_validated");
        }
    }

    switch (target) {
        case "full-name":
            let cond = numberOfCharacter > 2 && entry.includes(" ");
            let errormessage = document.querySelector("#fullname_error");
            uiValidator(cond, errormessage, 0);
            break;
        case "email":
            let cond1 = numberOfCharacter > 2 && entry.includes("@");
            let errormessage1 = document.querySelector("#email_error");
            uiValidator(cond1, errormessage1, 1);

            break;
        case "user_input_autocomplete_address":
            let cond2 = numberOfCharacter > 8;
            let errormessage2 = document.querySelector("#address_error");
            uiValidator(cond2, errormessage2, 2);

            break;
        case "password":
            let cond3 = numberOfCharacter > 8;
            let errormessage3 = document.querySelector("#password_error");
            uiValidator(cond3, errormessage3, 3);

            break;

    }

});

/* Validation Script */

$("#validation").click(function() {
    let listInput = $("input");
    console.log(listInput);
    for (i=0; i < listInput.length; i++) {
        let className = listInput[i].className;

        if (className !== "validated") {
            let section = ["name","email","address","password"];
            let errorMessage = document.createElement("p");
            errorMessage.textContent = "The section " + section[i] + " is invalid";
            $("#header").append(errorMessage);
        }

        else {
            if (i===3) {
                alert("Your form has been sent successfully!");

            }
        }
    }
});


/* Voice recognition address

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
*/
