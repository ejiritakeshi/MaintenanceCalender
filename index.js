document.addEventListener("DOMContentLoaded", () => {
  const input = new Input();
  const inputArea = input.createInputDOM();
  const inputEl = document.getElementById("input");
  inputEl.appendChild(inputArea);
  Window.input = input;
});

const events = [
  {
    id: "a",
    start: "2022-11-03",
    end: "",
    title: "文化の日",
    description: "祝日",
    backgroundColor: "#f5a505",
    borderColor: "#f5a505",
    editable: true,
  },
  {
    id: "b",
    start: "2022-11-23",
    end: "",
    title: "勤労感謝の日",
    description: "祝日",
    backgroundColor: "green",
    borderColor: "green",
    editable: true,
  },
];

window.onload = (e) => {
  // Calendar
  const elem = document.getElementById("calendar");
  const calendarController = new CalendarController();
  const calendar = new FullCalendar.Calendar(elem, calendarController.configurationObject);
  calendar.render();

  calendarController.setCalendar(calendar);
  Window.calendarController = calendarController;

  Window.dataController = new DataController();
  Window.dataController.addAllEventsIntoCalendar();

  const m = moment(); //現在の時刻が入る
  const output = m.format("YYYY-MM-DD");

};