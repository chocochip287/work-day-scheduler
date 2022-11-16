/* 11/15/2022
Todo:
- set up functions/listeners for event entry
- set up local storage to hold entered events
- 


*/

// variable to hold today's date in the desired format

var today = moment().format('dddd') + ", " + moment().format('MMMM Do') + ", " + moment().format('YYYY');

// sets the text of the #currentDay paragraph to the current date

$('#currentDay').text(today);

// when I click into a given hour's text area I need to be able to enter text that I can save to the hour by clicking the save button to the right. these events are stored locally.

// text areas should have different colors for past, present, and future hours. these classes are pre-defined as .past, .present, and .future