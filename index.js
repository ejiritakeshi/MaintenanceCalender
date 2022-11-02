let calendar; // カレンダーをグローバル変数とする。

document.addEventListener("DOMContentLoaded", () => {
  // const calendarEl = document.getElementById("calendar");
  // calendar = new FullCalendar.Calendar(calendarEl, {
  //   initialView: "dayGridMonth",
  //   businessHours: true,
  //   editable: true,
  //   // 日本語化
  //   locale: "ja",
  //   // buttonText: {
  //   //   prev: "<",
  //   //   next: ">",
  //   //   prevYear: "<<",
  //   //   nextYear: ">>",
  //   //   today: "今日",
  //   //   month: "月",
  //   //   week: "週",
  //   //   day: "日",
  //   //   list: "一覧",
  //   // },
  // });
  // calendar.render();
  
  const input = new Input();
  const inputArea = input.createInputDOM();
  const inputEl = document.getElementById("input");
  inputEl.appendChild(inputArea);
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
    // 日付をクリック、または範囲を選択したイベント
    selectable: true,
    select: function (info) {
      //alert("selected " + info.startStr + " to " + info.endStr);

      // 入力ダイアログ
      const eventName = prompt("整備内容入力して下さい");

      if (eventName) {
        // イベントの追加
        calendar.addEvent({
          title: eventName,
          start: info.start,
          end: info.end,
          allDay: true,
        });
      }
    },
    eventClick: function (eventName) {
      // console.dir(event); オブジェクトの中身をチェック。
      const title = prompt("予定を更新してください:");
      if (title && title != "") {
        eventName.title = title;
        //イベント（予定）の修正
        $("#calendar").fullCalendar("updateEvent", eventName);
      } else {
        //イベント（予定）の削除  idを指定して削除。
        $("#calendar").fullCalendar("removeEvents", eventName.id);
      }
    },
  });
  calendar.render();
};
