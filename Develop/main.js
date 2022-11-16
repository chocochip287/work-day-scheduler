/* 11/15/2022
Todo:
- set up functions/listeners for event entry
- set up local storage to hold entered events
- 


*/

var now;

// variable to reference button elements for event handling/loops

var buttons = document.getElementsByTagName("button");

// variable to reference text area elements for event handling/loops

var textAreas = document.getElementsByTagName("textarea");

// variable to hold today's date in the desired format

var today = moment().format('dddd') + ", " + moment().format('MMMM Do') + ", " + moment().format('YYYY');

// 

// sets the text of the #currentDay paragraph to the current date

$('#currentDay').text(today);

// when I click into a given hour's text area I need to be able to enter text that I can save to the hour by clicking the save button to the right. these events are stored locally.

// text areas should have different colors for past, present, and future hours. these classes are pre-defined as .past, .present, and .future.

// loop to style the text areas based on the area's assigned hour compared with the actual time

function textareaStyler() {
    // need to add/remove classes based on the hour - compare current hour to its related time block ID
    for (i = 0; i < textAreas.length; i++) {
        var now = moment().hour();
        if (textAreas[i].id > now) {
            $(textAreas[i]).addClass('future');
        } else if (textAreas[i].id === now) {
            $(textAreas[i]).addClass('present');
        } else {
            $(textAreas[i]).addClass('past');
        }
    }
}

textareaStyler();