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
      { start: "2022-06-02",
        end: "2022-06-03",
        title: "オイルフィルター交換",
        odo: 7022,
        cost: 2105,
        id: randomNumber()
      },
      { start: "2022-06-21",
        end: "2022-06-22",
        title: "バッテリー充電",
        odo: 7890,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-07-06",
        end: "2022-07-07",
        title: "チェーン調整",
        odo: 7910,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-07-26",
        end: "2022-07-27",
        title: "バッテリー充電",
        odo: 8290,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-06",
        end: "2022-08-07",
        title: "チェーン調整",
        odo: 8800,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-08",
        end: "2022-08-09",
        title: "バッテリー充電",
        odo: 8890,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-12",
        end: "2022-08-13",
        title: "プラグ交換",
        odo: 9228,
        cost: 1230,
        id: randomNumber()
      },
      { start: "2022-08-14",
        end: "2022-08-15",
        title: "タイヤ空気圧調整",
        odo: 9790,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-18",
        end: "2022-08-19",
        title: "バッテリー充電",
        odo: 9876,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-25",
        end: "2022-08-26",
        title: "エンジンオイル交換",
        odo: 9923,
        cost: 1332,
        id: randomNumber()
      },
      { start: "2022-09-03",
        end: "2022-09-04",
        title: "クラッチワイヤー調整",
        odo: 10100,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-11",
        end: "2022-09-12",
        title: "バッテリー充電",
        odo: 10560,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-12",
        end: "2022-09-13",
        title: "クラッチワイヤー調整",
        odo: 10588,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-29",
        end: "2022-09-30",
        title: "オイルフィルター交換",
        odo: 11256,
        cost: 1200,
        id: randomNumber()
      },
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
      { start: "2022-06-02",
        end: "2022-06-03",
        title: "オイルフィルター交換",
        odo: 23722,
        cost: 2105,
        id: randomNumber()
      },
      { start: "2022-06-21",
        end: "2022-06-22",
        title: "バッテリー充電",
        odo: 26111,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-07-06",
        end: "2022-07-07",
        title: "チェーン調整",
        odo: 26510,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-07-26",
        end: "2022-07-27",
        title: "バッテリー充電",
        odo: 26901,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-05",
        end: "2022-08-06",
        title: "バッテリー充電",
        odo: 27030,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-09",
        end: "2022-08-10",
        title: "タイヤ空気圧調整",
        odo: 27033,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-11",
        end: "2022-08-12",
        title: "チェーン調整",
        odo: 27310,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-16",
        end: "2022-08-17",
        title: "オイルフィルター交換",
        odo: 27666,
        cost: 1550,
        id: randomNumber()
      },
      { start: "2022-08-20",
        end: "2022-08-21",
        title: "スプロケ交換",
        odo: 27780,
        cost: 2120,
        id: randomNumber()
      },
      { start: "2022-08-22",
        end: "2022-08-23",
        title: "バッテリー充電",
        odo: 27810,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-08-28",
        end: "2022-08-29",
        title: "プラグ交換",
        odo: 27955,
        cost: 2100,
        id: randomNumber()
      },
      { start: "2022-08-29",
        end: "2022-08-30",
        title: "チェーン調整",
        odo: 28910,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-10",
        end: "2022-09-11",
        title: "バッテリー充電",
        odo: 29300,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-16",
        end: "2022-09-17",
        title: "タイヤ空気圧調整",
        odo: 29355,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-19",
        end: "2022-09-20",
        title: "チェーン調整",
        odo: 29510,
        cost: 0,
        id: randomNumber()
      },
      { start: "2022-09-22",
        end: "2022-09-23",
        title: "オイルフィルター交換",
        odo: 29726,
        cost: 1050,
        id: randomNumber()
      },
      { start: "2022-09-29",
        end: "2022-09-30",
        title: "スプロケ交換",
        odo: 30280,
        cost: 1820,
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
        title: "Frフォークオイル交換",
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
      { start: "2022-11-01",
        end: "2022-11-02",
        title: "車検",
        odo: 32768,
        cost: 131072,
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
