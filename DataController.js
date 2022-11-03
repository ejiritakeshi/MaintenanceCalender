class DataController {
  constructor() {
    this.currentIndex = 0;
    this.currentData = maintenanceData[0];

    console.log(colors);

    for (const event of this.currentData.events) {
      this.addEventIntoCalendar(event);
    }
  }

  addEventIntoCalendar(event) {
    Window.calendarController.addEvent(
      event.title,
      event.odo,
      event.cost,
      colors[menuItems.indexOf(event.title)],
      event.start
    )
  }
}

const maintenanceData = [
  { vehicle: "vehicle1", 
    events: [
      { start: "2022-10-02",
        title: "クラッチワイヤー調整",
        odo: 12232,
        cost: 0,
      },
      { start: "2022-10-09",
        title: "バッテリー充電",
        odo: 12289,
        cost: 0,
      },
      { start: "2022-10-10",
        title: "クラッチワイヤー調整",
        odo: 12310,
        cost: 0,
      },
      { start: "2022-10-15",
        title: "チェーン調整",
        odo: 12399,
        cost: 0,
      },
      { start: "2022-10-15",
        title: "エンジンオイル交換",
        odo: 12399,
        cost: 1550,
      },
      { start: "2022-10-23",
        title: "プラグ交換",
        odo: 12523,
        cost: 1320,
      },
      { start: "2022-10-30",
        title: "タイヤ空気圧調整",
        odo: 12585,
        cost: 0,
      },
      { start: "2022-10-31",
        title: "スプロケ交換",
        odo: 12585,
        cost: 1234,
      },
      { start: "2022-11-03",
        title: "ブレーキフルード交換",
        odo: 12623,
        cost: 1210,
      },
    ]
  },
];

Window.DataController = DataController;