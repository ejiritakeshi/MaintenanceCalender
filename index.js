window.onload = (e) => {
  // Input
  const input = new Input();
  const inputArea = input.createInputDOM();
  const inputEl = document.getElementById("input");
  inputEl.appendChild(inputArea);
  Window.input = input;

  // Calendar
  const elem = document.getElementById("calendar");
  const calendarController = new CalendarController();
  const calendar = new FullCalendar.Calendar(elem, calendarController.configurationObject);
  calendar.render();
  
  calendarController.setCalendar(calendar);
  Window.calendarController = calendarController;
  
  // DataController
  Window.dataController = new DataController();
  Window.dataController.addAllEventsIntoCalendar();
};