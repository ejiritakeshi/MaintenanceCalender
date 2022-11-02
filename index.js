let calendar; // カレンダーをグローバル変数とする。

document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById("calendar");
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    // 日本語化
    locale: "ja",
    // buttonText: {
    //   prev: "<",
    //   next: ">",
    //   prevYear: "<<",
    //   nextYear: ">>",
    //   today: "今日",
    //   month: "月",
    //   week: "週",
    //   day: "日",
    //   list: "一覧",
    // },
  });
  calendar.render();
});

console.log("main.js!!");

const events = [
  {
    id: "a",
    start: "2022-11-03",
    end: "",
    title: "文化の日",
    description: "祝日",
    backgroundColor: "red",
    borderColor: "red",
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
  const calendar = new FullCalendar.Calendar(elem, {
    // initialView: "timeGridMonth",
    // initialDate: "2022-11-02",
    events: events,
    dateClick: (e) => {
      console.log("dateClick:", e);
    },
    eventClick: (e) => {
      console.log("eventClick:", e.event.title);
    },
    eventDidMount: (e) => {
      tippy(e.el, {
        // Tippy
        content: e.event.extendedProps.description,
      });
    },
  });
  calendar.render();
};
