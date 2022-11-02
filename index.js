let calendar; // カレンダーをグローバル変数とする。

document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById('calendar');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();

  const input = new Input();
  const inputArea = input.createInputOdo();
  const inputEl = document.getElementById("input");
  inputEl.appendChild(inputArea);
})