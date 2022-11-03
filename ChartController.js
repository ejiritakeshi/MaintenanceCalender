class ChartController {
  constructor() {
    const labels = [];
    for (let i = 1; i <= 12; i++) {
      labels.push(i + "月");
    }
    this.labels = labels;

    const chartBase = document.getElementById("chartBase");
    chartBase.addEventListener("click", this.hideChart);

    const chartButton = document.createElement("button");
    chartButton.id = "ChartButton";
    chartButton.innerText = "集計！";
    chartButton.addEventListener("click", () => {
      this.showOdoChart(this);
    });
    const body = document.body;
    body.append(chartButton);
  }
  
  showChart(data, kind) {
    const dataset = { 
      labels: this.labels,
      datasets: [{
        label: kind,
        backgroundColor: "#67C150",
        borderColor: "#67C150",
        data,
      }]
    };
    const config = { type: "bar", data: dataset, options: {}, };
    const chartBase = document.getElementById("chartBase");
    chartBase.className = "loginBase";
    
    const canvas = document.createElement("canvas");
    canvas.id = "chart";
    canvas.addEventListener("click", () => {
      setTimeout(() => {
        this.changeChart(this);
      }, 0);
    })
    chartBase.append(canvas);
    
    new Chart(canvas, config);
  }

  changeChart(chartC) {
    if (chartC.showing === "cost") {
      chartC.showOdoChart(chartC);
    } else {
      chartC.showCostChart(chartC);
    }
  }
  
  hideChart() {
    const chartBase = document.getElementById("chartBase");
    chartBase.className = "chartBase";

    const canvas = document.getElementById("chart");
    chartBase.removeChild(canvas);
  }

  showOdoChart(chartC) {
    const datasource = Window.dataController.currentData.events;
    if (datasource.length < 2) { return }

    const sorted = datasource.sort((a, b) => (Number(a.odo) ?? 0) - (Number(b.odo) ?? 0));
    let prevOdo = sorted[0].odo;
    const odoMonth = [];
    for (const event of sorted.slice(1)) {
      const date = typeof event.start === "object" ? event.start : new Date(event.start + "T00:00:00+09:00");
      const month = date.getMonth();
      odoMonth[month] = Math.max(odoMonth[month] ?? 0, Number(event.odo) ?? 0);
    }
    const data = odoMonth.map(maxOdo => {
      if (!maxOdo) { return 0 }

      const distance = maxOdo - prevOdo;
      prevOdo = maxOdo;
      return distance;
    })

    chartC.showChart(data, "走行距離");
    chartC.showing = "distance";
  }

  showCostChart(chartC) {
    const datasource = Window.dataController.currentData.events;
    const data = [];
    for (const event of datasource) {
      const date = typeof event.start === "object" ? event.start : new Date(event.start + "T00:00:00+09:00");
      const month = date.getMonth();
      data[month] = (data[month] ?? 0) + (Number(event.cost) ?? 0);
    }
    chartC.showChart(data, "整備費用");
    chartC.showing = "cost";
  }
}