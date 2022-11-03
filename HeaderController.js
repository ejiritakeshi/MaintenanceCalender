class HeaderController {
  createHeader() {
    const headerDom = document.querySelector(".header");

    const titleEl = document.createElement("h1");
    titleEl.innerText = "Maintenance Calendar";
    headerDom.append(titleEl);

    const userArea = document.createElement("div");
    headerDom.append(userArea);

    const usernameEl = document.createElement("h3");
    const username = localStorage.getItem("username");
    usernameEl.innerText = "こんにちは、" + username + "さん";
    userArea.append(usernameEl);

    const vehicleEl = document.createElement("div");
    vehicleEl.innerText = "test vehicle";
    userArea.append(vehicleEl);

    return headerDom;
  }
}