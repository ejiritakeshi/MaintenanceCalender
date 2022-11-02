class Input {
  createInputDOM() {
    const inputDom = document.createElement("div");
    
    inputDom.append(this.createValueInput("オドメーター", "km"));
    inputDom.append(this.createValueInput("整備費用", "円"));
    inputDom.append(this.createMaintenanceMenu())
    inputDom.append(this.createInputButton());
    return inputDom;
  }

  // オドメーター、金額入力欄
  createValueInput(placeholder, unit) {
    const inputOdoEl = document.createElement("div");

    const input = document.createElement("input");
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
    menuTitle.innerText = "整備内容"
    maintenanceMenuEl.append(menuTitle);

    const maintenanceMenu = document.createElement("ul");
    maintenanceMenuEl.append(maintenanceMenu);

    maintenanceMenu.append(this.createMaintenanceItem("整備１"));
    maintenanceMenu.append(this.createMaintenanceItem("整備２"));
    maintenanceMenu.append(this.createMaintenanceItem("整備３"));

    return maintenanceMenuEl;
  }

  createMaintenanceItem(item) {
    const maintenanceItem = document.createElement("li");
    maintenanceItem.innerText = item;

    return maintenanceItem;
  }

  // 入力ボタン
  createInputButton() {
    const button = document.createElement("button");
    button.id = "InputButton"
    button.innerText = "入力！"
    button.addEventListener('click', () => {
      console.log(Window.calendar);
      Window.calendar.calendar.addEvent({
          title: 'The Title', 
          start: Window.calendar.selectedDateStart,
          end: Window.calendar.selectedDateEnd,
          allDay: true
        });
    })
    return button
  }
}

Window.Input = Input;