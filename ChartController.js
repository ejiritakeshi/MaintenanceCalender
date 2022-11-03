class ChartController {
  constructor() {
    const labels = [];
    for (let i = 1; i <= 12; i++) {
      labels.push(i + "月");
    }
    this.labels = labels;
  }

  test() {

  const data = {
    labels: labels,
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