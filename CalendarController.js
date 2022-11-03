class CalendarController {
  constructor() {
    this.configurationObject = {
      selectable: true,
      unselectAuto: false,

      select: function (selectedDate) {
        Window.calendarController.setDate(selectedDate)
      },

      // dateClick: (e) => {
      //   console.log("dateClick:", e);

      // },

      eventClick: (e) => {
        Window.input.displayEvent(e.event);
        Window.calendarController.setEvent(e.event);
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
  
  setEvent(event) {
    this.selectedEvent?.setProp("borderColor", "transparent");
    this.selectedEvent = event;

    event.setProp("borderColor", "#212B36");
    Window.input.toggleInputButtonTitle();
  }
  
  addEvent(title, odo, cost, color, start = this.selectedDate?.start, end = this.selectedDate?.end) {
    console.log(color);
    this.calendar.addEvent({
      title: title,
      start: start,
      end: end,
      description: odo + "km\n" + cost + "円",
      backgroundColor: color,
      borderColor: "transparent",
      allDay: true
    })

    if (this.selectedEvent) {
      this.removeEvent();
    }
  }
  
  removeEvent() {
    this.selectedEvent.remove();
    this.selectedEvent = undefined;
    Window.input.toggleInputButtonTitle();
  }
  
  cancelEditing() {
    this.selectedEvent.setProp("borderColor", "transparent");
    this.selectedEvent = undefined;
    Window.input.toggleInputButtonTitle();
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
