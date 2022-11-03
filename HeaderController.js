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

    const vehiclesEl = document.createElement("div");
    vehiclesEl.className = "menu";
    userArea.append(vehiclesEl);

    const selectedVehicle = document.createElement("span");
    selectedVehicle.id = "selectedVehicle";
    vehiclesEl.append(selectedVehicle);

    const vehicleMenu = document.createElement("ul");
    vehicleMenu.id = "vehicleMenu";
    vehiclesEl.append(vehicleMenu);

    return headerDom;
  }

  setMenu() {
    const vehicles = maintenanceData.map(element => element.vehicle);
    const vehicleMenu = document.getElementById("vehicleMenu");
    for (const vehicle of vehicles) {
      const item = document.createElement("li");
      item.innerText = vehicle;
      item.addEventListener('click', this.select);
      vehicleMenu.append(item);
    }

    const vehicleEl = document.getElementById("selectedVehicle");
    vehicleEl.innerText = vehicles[0];
  }

  select() {
    const vehicleEl = document.getElementById("selectedVehicle");
    const vehicle = this.innerText;
    vehicleEl.innerText = vehicle;

    Window.dataController.changeVehicleTo(vehicle);
  }
}