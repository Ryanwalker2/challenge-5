// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Set Variables
var head = document.head;
var body = document.body;
var currentDayEl = document.querySelector('#currentDay');
var day = dayjs().format('dddd, MMMM Do');
containerEl = document.querySelector('.container-lg');
timeBlockEl = document.querySelectorAll('.time-block');
var btnEl = $('#btn');
var events = [];
//Get the time of current time of day and convert to hour format.
var currentTime = $(dayjs().format('H'));
console.log(currentTime);
//Add Current day to header
$(function () {
  currentDayEl.textContent = day;
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  btnEl.on('click', function (event) {
    event.preventDefault();

    var eventsText = this.value.trim();
    console.log(eventsText);

    if (eventsText === '') {
      return;
    }

    events.push(eventText);
    eventsInput.value = '';

    // storeEvents();
    // renderEvents();
      });
  });
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function renderEvents() {
    // eventsList.innerHTML = '';
    // eventCountSpan.textContent = events.length;

      for (var x = 9; x < 18; x++) {
        var lineEl = document.createElement('section');
        var hourEl = document.createElement('div');
        hourEl.setAttribute('id', 'hour-' + x, 'class', 'col-2 col-md-1 hour text-center py-3');
        // If Else statement to change colours according to what time it is.
        if (currentTime > x) {
          lineEl.setAttribute('class', 'row time-block past');
        } else if (currentTime == x) {
          lineEl.setAttribute('class', 'row time-block present');
        } else {
          lineEl.setAttribute('class', 'row time-block future');
        };
        // Set Hour intervals
        if (x <= 12) {
          hourEl.textContent = (x + ' AM');
        } else {
          hourEl.textContent = (x - 12) + ' PM';
        };
        descriptionEl = document.createElement('textarea');
        descriptionEl.setAttribute('class', 'col-8 col-md-10 description rows=3');
        var btnEl = document.createElement('button');
        btnEl.setAttribute('class', 'btn saveBtn col-2 col-md-1', 'aria-label', 'save');
        iconEl = document.createElement('i');
        iconEl.setAttribute('class', 'fas fa-save', 'aria-hidden', '');
    
    
        // Append all elements.
        containerEl.append(lineEl);
        lineEl.append(hourEl)
        lineEl.append(descriptionEl);
        lineEl.append(btnEl);
        btnEl.append(iconEl);
      }
    };



  $(function init() {
    //Get stored events
    var storedEvents = JSON.parse(localStorage.getItem(''));

    if (storedEvents !== null) {
      events = storedEvents;
    }

    renderEvents();
  });

  