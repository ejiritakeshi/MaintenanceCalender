class Input {
  createInputDOM() {
    const testDiv = document.createElement("div");
    testDiv.innerText = "test";
    return testDiv;
  }

  createInputOdo() {
    const inputOdoEl = document.createElement("div");

    const input = document.createElement("input");
    input.rows = 1;
    input.cols = 30;
    input.placeholder = "オドメーター";
    inputOdoEl.append(input);

    const km = document.createElement("span");
    km.innerText = "km";
    inputOdoEl.append(km);

    return inputOdoEl;
  }
}

Window.Input = Input;