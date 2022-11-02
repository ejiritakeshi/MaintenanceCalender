class CalendarController {
  constructor() {
    this.configurationObject = {
      selectable: true,

      select: function (selectedDate) {
        Window.calendarController.setDate(selectedDate)
      },

      dateClick: (e) => {
        console.log("dateClick:", e);
      },

      eventClick: (e) => {
        Window.input.displayEvent(e.event);
      },

      eventDidMount: (e) => {
        tippy(e.el, {
          // Tippy
          content: e.event.extendedProps.description,
        });
      },
    }
  }

  setCalendar(calendar) {
    this.calendar = calendar;
  }

  setDate(date) {
    this.selectedDate = {
      start: date.start,
      end: date.end
    }
  }

  addEvent(title, description) {
    this.calendar.addEvent({
      title: title,
      start: this.selectedDate.start,
      end: this.selectedDate.end,
      description: description,
      // backgroundColor: "rgb(0, 255, 0)",
      // borderColor: "red",
      allDay: true
    })

  }
}

Window.CalendarController = CalendarController;

  // eventClick: function (eventName) {
  //   // console.dir(event); オブジェクトの中身をチェック。
  //   const title = prompt("予定を更新してください:");
  //   if (title && title != "") {
  //     eventName.title = title;
  //     //イベント（予定）の修正
  //     $("#calendar").fullCalendar("updateEvent", eventName);
  //   } else {
  //     //イベント（予定）の削除  idを指定して削除。
  //     $("#calendar").fullCalendar("removeEvents", eventName);
  //   }
  // },
