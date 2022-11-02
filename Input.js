class Input {
  createInputDOM() {
    const inputDom = document.createElement("div");
    
    inputDom.append(this.createValueInput("オドメーター", "km"));
    inputDom.append(this.createValueInput("整備費用", "円"));
    inputDom.append(this.createMaintenanceMenu());
    inputDom.append(this.createButton("入力！"));
    inputDom.append(this.createButton("消去"));
    inputDom.append(this.createButton("キャンセル"));

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

    for (const item of menuItems) {
      maintenanceMenu.append(this.createMaintenanceItem(item));
    }

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
        break;
      case "キャンセル":
        button.id = "CancelButton";
        callback = this.cancelButtonClicked;
        break;
      default:
        break;
    }
    button.addEventListener('click', () => {
      callback();
      this.initializeInputForm();
    });

    const area = document.createElement("div");
    area.append(button);
    return area;
  }

  toggleInputButtonTitle() {
    const inputButton = document.getElementById("InputButton");
    const removeButton = document.getElementById("RemoveButton");
    const cancelButton = document.getElementById("CancelButton");

    if(inputButton.innerText === "入力！") {
      inputButton.innerText = "変更！";
      removeButton.className = "";
      cancelButton.className = "";
    } else {
      inputButton.innerText = "入力！";
      removeButton.className = "invisible";
      cancelButton.className = "invisible";
    }
  }

  // ボタンクリック
  inputButtonClicked() {
    const odoEl = document.getElementById('オドメーター');
    const odoValue = odoEl.value;

    const costEl = document.getElementById("整備費用");
    const costValue = costEl.value;

    const menuTitle = document.getElementById("menuTitle");
    const maintenance = menuTitle.innerText;
    
    Window.calendarController.addEvent(maintenance, odoValue, costValue);
  }
  
  removeButtonClicked() {
    console.log("remove button");
    Window.calendarController.removeEvent();
  }
  
  cancelButtonClicked() {
    console.log("cancel button");
    Window.calendarController.cancelEditing();
  }
  
  initializeInputForm() {
    const odoEl = document.getElementById('オドメーター');
    odoEl.value = "";
  
    const costEl = document.getElementById("整備費用");
    costEl.value = "";
  
    const menuTitle = document.getElementById("menuTitle");
    menuTitle.innerText = "整備内容";
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

const menuItems = [
  "エンジンオイル交換",
  "オイルフィルター交換",
  "クラッチワイヤー調整",
  "車検",
  "スプロケ交換",
  "タイヤ空気圧調整",
  "タイヤ交換",
  "チェーン調整",
  "バッテリー充電",
  "プラグ交換",
  "ブレーキフルード交換",
  "フロントフォークオイル交換"
];

Window.Input = Input;