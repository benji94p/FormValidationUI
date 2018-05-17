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
            let cond2 = numberOfCharacter > 2;
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
            $(".error-container").append(errorMessage);
        }

        else {
            if (i===3) {
                alert("Your form has been sent successfully!");

            }
        }
    }
});

/* Autofill GoogleMaps */

function initializeAutocomplete(id) {
  var element = document.getElementById(id);
  if (element) {
    var autocomplete = new google.maps.places.Autocomplete(element, { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
  }
};

function onPlaceChanged() {
  var place = this.getPlace();

  for (var i in place.address_components) {
    var component = place.address_components[i];
    for (var j in component.types) {  // Some types are ["country", "political"]
      var type_element = document.getElementById(component.types[j]);
      if (type_element) {
        type_element.value = component.long_name;
      }
    }
  }
};

google.maps.event.addDomListener(window, 'load', function() {
  initializeAutocomplete('user_input_autocomplete_address');
});


/* Granim Canvas */

var granimInstance = new Granim({
   element: '#granim-canvas',
   name: 'granim',
   opacity: [1, 1],
   states : {
       "default-state": {
           gradients: [
               ['#834D9B', '#D04ED6'],
               ['#1CD8D2', '#93EDC7']
           ]
       }
   }
});
