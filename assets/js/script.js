// Set Variables
var head = document.head;
var body = document.body;
var currentDayEl = document.querySelector('#currentDay');
var day = dayjs().format('dddd, MMMM Do');
containerEl = document.querySelector('.container-lg');
timeBlockEl = $(document.getElementsByClassName('time-block'));
var btnEl = $([]);
var iconEl = $([]);
var hourEl = $([]);
var lineEl = $([]);
var descriptionEl = $([]);
var eventsText = $([]);

//Get the time of current time of day and convert to hour format.
var currentTime = dayjs().format('H');
console.log(currentTime + ':00 - 24 hour format');
//Add Current day to header
$(function () {
  currentDayEl.textContent = day;
});

$(function renderEvents() {
  x = 9;
  
  for (var x = 9; x < 18; x++) {
    var lineEl = document.createElement('section');
    var hourEl = document.createElement('div');
    hourEl.setAttribute('id', 'hour-' + x);
    hourEl.setAttribute('class', 'col-2 col-md-1 hour text-center py-3');
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
    descriptionEl[x] = document.createElement('textarea');
    descriptionEl[x].setAttribute('class', 'col-8 col-md-10 description rows=3');
    descriptionEl[x].setAttribute('data-index', x - 9);
    descriptionEl[x].textContent = '';
    btnEl[x-9] = document.createElement('button');
    btnEl[x-9].setAttribute('class', 'btn saveBtn col-2 col-md-1', 'aria-label', 'save');
    iconEl = document.createElement('i');
    iconEl.setAttribute('class', 'fas fa-save', 'aria-hidden', '');


    // Append all elements.
    containerEl.append(lineEl);
    lineEl.append(hourEl)
    lineEl.append(descriptionEl[x]);
    lineEl.append(btnEl[x-9]);
    btnEl[x-9].append(iconEl);

    function init() { //Get stored events
      var storedEvents = JSON.parse(localStorage.getItem('events'));
  
      if (storedEvents !== null) {
        events = storedEvents;
      }
  
      renderEvents();
    }

    function storeEvents() {
      localStorage.setItem('events', JSON.stringify(eventsText));
    }

     // TODO: Add a listener for click events on the save button.
   btnEl[x-9].addEventListener('click', function(event) {
    event.preventDefault();
    eventsText[x-9] = descriptionEl.value;
    console.log(eventsText);
  
    if (eventsText === '') {
      return;
    }
  
    descriptionEl.push(eventsText[x]);
    descriptionEl.value = '';
  
    storeEvents();
    renderEvents();
  })
  
  }
  console.log(descriptionEl);
},  
);







