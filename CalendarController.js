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

      // eventDidMount: (e) => {
      //   tippy(e.el, {
      //     // Tippy
      //     content: e.event.extendedProps.description,
      //   });
      // },
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

    this.calendar.select(event.start, event.end);

    event.setProp("borderColor", "#212B36");
    Window.input.setInputButtonTitle("変更！");
  }
  
  addEvent(event) {
    if (this.selectedEvent) {
      this.removeEvent();
    }

    const id = event.id;
    const title = event.title;
    const start = event.start ?? this.selectedDate?.start;
    const end = event.end ?? this.selectedDate?.end;
    const description = event.odo + "km\n" + event.cost + "円";
    const backgroundColor = colors[menuItems.indexOf(title)];
    const borderColor = "transparent";
    const newEvent = { id, title, start, end, description, backgroundColor, borderColor, allDay: true };
    this.calendar.addEvent(newEvent);

    event.start = start;
    event.end = end;
  }
  
  removeEvent() {
    Window.dataController.removeEvent(this.selectedEvent.id);
    this.selectedEvent.remove();
    this.selectedEvent = undefined;
    Window.input.setInputButtonTitle("入力！");
  }
  
  cancelEditing() {
    this.selectedEvent.setProp("borderColor", "transparent");
    this.selectedEvent = undefined;
    Window.input.setInputButtonTitle("入力！");
  }
}

// Window.CalendarController = CalendarController;