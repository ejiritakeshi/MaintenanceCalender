class LoginController {
  createLoginScreen() {
    this.loginClicked();
    return;


    const loginBase = document.createElement("div");
    loginBase.className = "loginBase";
    document.body.append(loginBase);

    const loginArea = document.createElement("div");
    loginArea.className = "loginArea";
    loginBase.append(loginArea);
    
    const message = document.createElement("h1");
    message.innerText = "Maintenance Calendarに\nログイン";
    loginArea.append(message);
  
    const inputForm = document.createElement("input");
    inputForm.className = "loginInput";
    inputForm.rows = 1;
    inputForm.cols = 33;
    inputForm.placeholder = "電話番号/メールアドレス/ユーザー名";
    loginArea.append(inputForm);
  
    const loginButton = document.createElement("button");
    loginButton.className = "loginButton";
    loginButton.innerText = "ログイン";
    loginButton.addEventListener("click", this.loginClicked);
    loginArea.append(loginButton);
  }

  loginClicked() {
    // フォームに入力されていなければ終了
//     const inputForm = document.getElementsByClassName("loginInput")[0];
//     const loginName = inputForm.value;
//     if (loginName === "") {
//      return;
//     }
//     // ユーザー名を保存する。
//     localStorage.setItem("username", loginName);

    // // ログイン画面を消す。
    // const loginBase = document.querySelector(".loginBase");
    // document.body.removeChild(loginBase);

    // ログイン後の画面を表示する。
    // Header
    const header = new HeaderController();
    header.createHeader();

    // Input
    const input = new Input();
    const inputArea = input.createInputDOM();
    const inputEl = document.getElementById("input");
    inputEl.appendChild(inputArea);
    Window.input = input;

    // Calendar
    const elem = document.getElementById("calendar");
    const calendarController = new CalendarController();
    const calendar = new FullCalendar.Calendar(elem, calendarController.configurationObject);
    calendar.render();
  
    // Controller
    calendarController.setCalendar(calendar);
    Window.calendarController = calendarController;
  
    Window.dataController = new DataController();
    Window.dataController.addAllEventsIntoCalendar();

    header.setMenu();




    const chartC = new ChartController();
    chartC.test();
  }
}