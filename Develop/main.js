/* 11/16/2022
Todo:
- nothing for now. MVP achieved.

Possible future work:
- setting up functionality to allow the user to add additional hours or edit the existing ones since not everyone works 09:00-17:00.
- refine the container classes for improved mobile functionality.
- set up "clear all inputs" functionality so that a user wouldn't need to delete them one by one on a new day.
*/

// variable to reference button elements for event handling/loops

var buttons = document.getElementsByTagName("button");

// variable to reference text area elements for event handling/loops

var textAreas = document.getElementsByTagName("textarea");

// variable to hold today's date in the desired format

var today = moment().format('dddd') + ", " + moment().format('MMMM Do') + ", " + moment().format('YYYY');

// variable to hold the JSON of events - defaulted as an empty array until inputs are rendered

var inputs = JSON.parse(localStorage.getItem('inputs')) || ["","","","","","","","",""]

// sets the text of the #currentDay paragraph to the current date

$('#currentDay').text(today);

// function to set style for textareas

function textareaStyler() {
    // need to add/remove classes based on the hour - compare current hour to its related time block ID
    for (i = 0; i < textAreas.length; i++) {
        // comparison variable for the current hour
        var now = moment().hour();
        // logic to determine text area sylization
        if (textAreas[i].id > now) {
            $(textAreas[i]).addClass('future');
        } else if (textAreas[i].id == now) {
            $(textAreas[i]).addClass('present');
        } else {
            $(textAreas[i]).addClass('past');
        }
    }
}

// function to set the textareas based on content in localstorage without any extra actions

function textareaInitial() {
    for (i = 0; i < textAreas.length; i++) {
        textAreas[i].textContent = inputs[i];
    }
}

// runs textareaInitial on page load so that locally stored appointments plug back in on refresh
textareaInitial();

// sets textarea stylization on page load
textareaStyler();

// button event listener assignment loop
function buttonListener() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", inputSaver)
    }
}

// establishes the button listeners for all buttons on page load

buttonListener();

// captures any inputs in the page's textareas and plugs them into the default array

function inputSaver(event) {
    for (i = 0; i < buttons.length; i++) {
        // ignores values that aren't updating the intended textarea.
        if (event.target !== buttons[i]) {
            continue
        }
        // sets the value of the input array to the matching textarea index.
        inputs[i] = textAreas[i].value;
        localStorage.setItem('inputs', JSON.stringify(inputs));
        inputRender();
    }   
}

function inputRender() {
    // confirmation text that an input was saved
    $('#confirmation').text("Appointment(s) updated. ✓");
    // timed function to remove the confirmation text
    setTimeout(hideConfirmation, 5000);
    function hideConfirmation() {
        $('#confirmation').text(" ");
    }
    // updates the inputs variable following the user providing a new appointment
    inputs = JSON.parse(localStorage.getItem('inputs'));
}