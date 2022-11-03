window.onload = (e) => {
  // Header
  const header = new HeaderController();
  header.createHeader();

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
  
  // Controller
  calendarController.setCalendar(calendar);
  Window.calendarController = calendarController;
  
  Window.dataController = new DataController();
  Window.dataController.addAllEventsIntoCalendar();
};