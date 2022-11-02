let calendar; // カレンダーをグローバル変数とする。

document.addEventListener("DOMContentLoaded", () => {
    const calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
})