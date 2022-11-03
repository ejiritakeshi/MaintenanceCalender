class HeaderController {
  createHeader() {
    const headerDom = document.querySelector(".header");

    const titleEl = document.createElement("h1");
    titleEl.innerText = "Maintenance Calendar";
    headerDom.append(titleEl);

    
    return headerDom;
  }
}