class ChartController {
  constructor() {
    const labels = [];
    for (let i = 1; i <= 12; i++) {
      labels.push(i + "月");
    }
    this.labels = labels;

    const chartBase = document.getElementById("chartBase");
    chartBase.addEventListener("click", this.hideChart);
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
    chartBase.append(canvas);
    
    new Chart(canvas, config);
  }
  
  hideChart() {
    const chartBase = document.getElementById("chartBase");
    chartBase.className = "chartBase";

    const canvas = document.getElementById("chart");
    chartBase.removeChild(canvas);
  }

  showOdoChart() {
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

    this.showChart(data, "走行距離");
  }

  showCostChart() {
    const datasource = Window.dataController.currentData.events;
    const data = [];
    for (const event of datasource) {
      const date = typeof event.start === "object" ? event.start : new Date(event.start + "T00:00:00+09:00");
      const month = date.getMonth();
      data[month] = (data[month] ?? 0) + (Number(event.cost) ?? 0);
    }
    this.showChart(data, "整備費用");
  }

  test() {

  const data = {
    labels: this.labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('chart'),
    config
  );
  }
}