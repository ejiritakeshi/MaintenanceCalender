class DataController {
  constructor() {
    this.currentIndex = 0;
    this.currentData = maintenanceData[0];
  }
  
  addAllEventsIntoCalendar() {
    for (const event of this.currentData.events) {
      this.addEventIntoCalendar(event);
    }    
  }

  addEventIntoCalendar(event) {
    Window.calendarController.addEvent(event);
  }

  addEvent(title, odo, cost) {
    const event = { title, odo, cost, id: randomNumber() }
    this.addEventIntoCalendar(event);
    this.currentData.events.push(event);
  }

  removeEvent(id) {
    const dataIndex = this.currentData.events.findIndex(event => event.id == id);
    this.currentData.events.splice(dataIndex, 1);
  }
}

const randomNumber = () => {
  return Math.floor(Math.random() * 1000000);
}

const maintenanceData = [
  { vehicle: "vehicle1", 
    events: [
      { start: "2022-10-02",
        title: "クラッチワイヤー調整",
        odo: 12232,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-09",
        title: "バッテリー充電",
        odo: 12289,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-10",
        title: "クラッチワイヤー調整",
        odo: 12310,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-15",
        title: "チェーン調整",
        odo: 12399,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-15",
        title: "エンジンオイル交換",
        odo: 12399,
        cost: 1550,
        id: randomNumber()
      },
      { start: "2022-10-23",
        title: "プラグ交換",
        odo: 12523,
        cost: 1320,
        id: randomNumber()
      },
      { start: "2022-10-30",
        title: "タイヤ空気圧調整",
        odo: 12585,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-31",
        title: "スプロケ交換",
        odo: 12585,
        cost: 1234,
        id: randomNumber()
      },
      { start: "2022-11-03",
        title: "ブレーキフルード交換",
        odo: 12623,
        cost: 1210,
        id: randomNumber()
      },
    ]
  },
  { vehicle: "vehicle2", 
    events: [
      { start: "2022-11-01",
        title: "車検",
        odo: 32768,
        cost: 131072,
        id: randomNumber()
      },
      { start: "2022-10-10",
        title: "バッテリー充電",
        odo: 30307,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-16",
        title: "タイヤ交換",
        odo: 30355,
        cost: 80800,
        id: randomNumber()
      },
      { start: "2022-10-19",
        title: "チェーン調整",
        odo: 30510,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-22",
        title: "エンジンオイル交換",
        odo: 30556,
        cost: 1250,
        id: randomNumber()
      },
      { start: "2022-10-23",
        title: "ブレーキフルード交換",
        odo: 30580,
        cost: 1020,
        id: randomNumber()
      },
      { start: "2022-10-30",
        title: "フロントフォークオイル交換",
        odo: 30593,
        cost: 1123,
        id: randomNumber()
      },
      { start: "2022-11-01",
        title: "オイルフィルター交換",
        odo: 32768,
        cost: 1332,
        id: randomNumber()
      },
      { start: "2022-11-03",
        title: "チェーン調整",
        odo: 32790,
        cost: 0,
        id: randomNumber()
      },
    ]
  },
];

// Window.DataController = DataController;