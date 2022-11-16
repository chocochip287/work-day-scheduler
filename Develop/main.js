/* 11/15/2022
Todo:
- set up functions/listeners for event entry
- set up local storage to hold entered events
- 


*/

// variable for event testing

var doc = document;

// variable to reference button elements for event handling/loops

var buttons = document.getElementsByTagName("button");

// variable to reference text area elements for event handling/loops

var textAreas = document.getElementsByTagName("textarea");

// variable to hold today's date in the desired format

var today = moment().format('dddd') + ", " + moment().format('MMMM Do') + ", " + moment().format('YYYY');

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

// sets textarea stylization on page load
textareaStyler();

// button event listener assignment loop
function buttonListener() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonTester)
    }
}

// establishes the button listeners for all buttons on page load

buttonListener();

function buttonTester(event) {
    for (i = 0; i < buttons.length; i++) {
        if (event.target === buttons[i]) {
            console.log("yeah you're clicking a button");
        } else {
            console.log("you're clickin' something but not a button")
        }
    }   
}
