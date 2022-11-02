class Input {
  createInputDOM() {
    const inputDom = document.createElement("div");
    
    inputDom.append(this.createValueInput("オドメーター", "km"));
    inputDom.append(this.createValueInput("整備費用", "円"));
    inputDom.append(this.createMaintenanceMenu());
    inputDom.append(this.createButton("入力！"));
    inputDom.append(this.createButton("消去"));
    return inputDom;
  }

  // オドメーター、金額入力欄
  createValueInput(placeholder, unit) {
    const inputOdoEl = document.createElement("div");

    const input = document.createElement("input");
    input.id = placeholder;
    input.rows = 1;
    input.cols = 30;
    input.placeholder = placeholder;
    inputOdoEl.append(input);

    const unitLabel = document.createElement("span");
    unitLabel.innerText = unit;
    inputOdoEl.append(unitLabel);

    return inputOdoEl;
  }

  // 整備メニュー
  createMaintenanceMenu() {
    const maintenanceMenuEl = document.createElement("div");
    maintenanceMenuEl.className = "menu";

    const menuTitle = document.createElement("span");
    menuTitle.id = "menuTitle";
    menuTitle.innerText = "整備内容";
    maintenanceMenuEl.append(menuTitle);

    const maintenanceMenu = document.createElement("ul");
    maintenanceMenuEl.append(maintenanceMenu);

    maintenanceMenu.append(this.createMaintenanceItem("エンジンオイル交換"));
    maintenanceMenu.append(this.createMaintenanceItem("オイルフィルター交換"));
    maintenanceMenu.append(this.createMaintenanceItem("クラッチワイヤー調整"));
    maintenanceMenu.append(this.createMaintenanceItem("車検"));
    maintenanceMenu.append(this.createMaintenanceItem("スプロケ交換"));
    maintenanceMenu.append(this.createMaintenanceItem("タイヤ空気圧調整"));
    maintenanceMenu.append(this.createMaintenanceItem("タイヤ交換"));
    maintenanceMenu.append(this.createMaintenanceItem("チェーン調整"));
    maintenanceMenu.append(this.createMaintenanceItem("バッテリー充電"));
    maintenanceMenu.append(this.createMaintenanceItem("プラグ交換"));
    maintenanceMenu.append(this.createMaintenanceItem("ブレーキフルード交換"));
    maintenanceMenu.append(this.createMaintenanceItem("フロントフォークオイル交換"));

    return maintenanceMenuEl;
  }

  createMaintenanceItem(item) {
    const maintenanceItem = document.createElement("li");
    maintenanceItem.innerText = item;
    maintenanceItem.addEventListener('click', this.maintenanceItemClicked);

    return maintenanceItem;
  }

  maintenanceItemClicked() {
    const menuTitle = document.getElementById("menuTitle");
    menuTitle.innerText = this.innerText;
  }

  // ボタン
  createButton(buttonText) {
    const button = document.createElement("button");
    button.innerText = buttonText;

    let callback;
    switch (buttonText) {
      case "入力！":
        button.id = "InputButton";
        callback = this.inputButtonClicked;
        break;
      case "消去":
        button.id = "RemoveButton";
        callback = this.removeButtonClicked;
      default:
        break;
    }
    button.addEventListener('click', callback);

    const area = document.createElement("div");
    area.append(button);
    return area;
  }

  // ボタンクリック
  inputButtonClicked() {
    console.log("input button clicked");

    const odoEl = document.getElementById('オドメーター');
    const odoValue = odoEl.value;
    odoEl.value = "";

    const costEl = document.getElementById("整備費用");
    const costValue = costEl.value;
    costEl.value = "";

    const menuTitle = document.getElementById("menuTitle");
    const maintenance = menuTitle.innerText;
    menuTitle.innerText = "整備内容";

    Window.calendarController.addEvent(maintenance, odoValue + "km\n" + costValue + "円");
  }

  removeButtonClicked() {
    console.log("remove button");
    Window.calendarController.removeEvent();
  }

  // event表示
  displayEvent(event) {
    const menuTitle = document.getElementById("menuTitle");
    menuTitle.innerText = event.title;

    const description = event.extendedProps.description;
    const kmIndex = description.indexOf("km");
    const odometer = description.slice(0, kmIndex);
    const odoEl = document.getElementById("オドメーター");
    odoEl.value = odometer;

    const cost = description.slice(kmIndex + 3, -1);
    const costEl = document.getElementById("整備費用");
    costEl.value = cost;
  }
}

Window.Input = Input;