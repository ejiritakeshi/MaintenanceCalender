class DataController {
  constructor() {
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

  changeVehicleTo(vehicle) {
    const index = maintenanceData.findIndex(data => data.vehicle === vehicle);
    this.currentData = maintenanceData[index];

    Window.calendarController.removeAll();
    this.addAllEventsIntoCalendar();
  }
}

const randomNumber = () => {
  return Math.floor(Math.random() * 1000000);
}

const maintenanceData = [
  { vehicle: "HONDA CBR600RR", 
    events: [
      { start: "2022-10-02",
        end: "2022-10-03",
        title: "クラッチワイヤー調整",
        odo: 12232,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-09",
        end: "2022-10-10",
        title: "バッテリー充電",
        odo: 12289,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-10",
        end: "2022-10-11",
        title: "クラッチワイヤー調整",
        odo: 12310,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-15",
        end: "2022-10-16",
        title: "チェーン調整",
        odo: 12399,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-15",
        end: "2022-10-16",
        title: "エンジンオイル交換",
        odo: 12399,
        cost: 1550,
        id: randomNumber()
      },
      { start: "2022-10-23",
        end: "2022-10-24",
        title: "プラグ交換",
        odo: 12523,
        cost: 1320,
        id: randomNumber()
      },
      { start: "2022-10-30",
        end: "2022-10-31",
        title: "タイヤ空気圧調整",
        odo: 12585,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-31",
        end: "2022-11-01",
        title: "スプロケ交換",
        odo: 12585,
        cost: 1234,
        id: randomNumber()
      },
      { start: "2022-11-03",
        end: "2022-11-04",
        title: "ブレーキフルード交換",
        odo: 12623,
        cost: 1210,
        id: randomNumber()
      },
    ]
  },
  { vehicle: "Moto Guzzi V7", 
    events: [
      { start: "2022-11-01",
        end: "2022-11-02",
        title: "車検",
        odo: 32768,
        cost: 131072,
        id: randomNumber()
      },
      { start: "2022-10-10",
        end: "2022-10-11",
        title: "バッテリー充電",
        odo: 30307,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-16",
        end: "2022-10-17",
        title: "タイヤ交換",
        odo: 30355,
        cost: 80800,
        id: randomNumber()
      },
      { start: "2022-10-19",
        end: "2022-10-20",
        title: "チェーン調整",
        odo: 30510,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-10-22",
        end: "2022-10-23",
        title: "エンジンオイル交換",
        odo: 30556,
        cost: 1250,
        id: randomNumber()
      },
      { start: "2022-10-23",
        end: "2022-10-24",
        title: "ブレーキフルード交換",
        odo: 30580,
        cost: 1020,
        id: randomNumber()
      },
      { start: "2022-10-30",
        end: "2022-10-31",
        title: "フロントフォークオイル交換",
        odo: 30593,
        cost: 1123,
        id: randomNumber()
      },
      { start: "2022-11-01",
        end: "2022-11-02",
        title: "オイルフィルター交換",
        odo: 32768,
        cost: 1332,
        id: randomNumber()
      },
      { start: "2022-11-03",
        end: "2022-11-04",
        title: "チェーン調整",
        odo: 32790,
        cost: 0,
        id: randomNumber()
      },
    ]
  },
];
