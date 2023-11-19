const colors = {
    pink: {
        default: "rgba(249, 118, 157, 1)",
        half: "rgba(249, 118, 157, 0.5)",
        quarter: "rgba(249, 118, 157, 0.25)",
        zero: "rgba(0, 0, 0, 0)"
    },
    blue: {
        default: "rgba(150, 167, 255, 1)",
        half: "rgba(150, 167, 255, 0.5)",
        quarter: "rgba(150, 167, 255, 0.25)",
        zero: "rgba(0, 0, 0, 0)"
    },
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(0, 0, 0, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };
  
  const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 509.8, 58.6, 59.6, 59.2];
  const weight2 = [81.0, 61.2, 60.1, 62.4, 200.9, 61.2, 60.8, 159.6, 60.6, 60.2];

  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10"
  ];
  
  const ctx = document.getElementById("canvass").getContext("2d");
  ctx.canvas.height = 100;
  
  gradient = ctx.createLinearGradient(0, 150, 0, 300);
  gradient.addColorStop(0, colors.pink.half);
  gradient.addColorStop(0.35, colors.pink.quarter);
  gradient.addColorStop(1, colors.pink.zero);
  
  gradient2 = ctx.createLinearGradient(0, 150, 0, 300);
  gradient2.addColorStop(0, colors.blue.half);
  gradient2.addColorStop(0.35, colors.blue.quarter);
  gradient2.addColorStop(1, colors.pink.zero);

  const options = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          fill: true,
          backgroundColor: gradient,
          pointBackgroundColor: colors.pink.default,
          borderColor: colors.pink.default,
          data: weight,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 0
        },
        {
            fill: true,
            backgroundColor: gradient2,
            pointBackgroundColor: colors.blue.default,
            borderColor: colors.blue.default,
            data: weight2,
            lineTension: 0.2,
            borderWidth: 2,
            pointRadius: 0
          }
      ]
    },
    options: {
      layout: {
        padding: 10
      },
      responsive: true,
      legend: {
        display: false
      },
  
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              padding: 10,
              autoSkip: false,
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Weight in KG",
              padding: 10
            },
            gridLines: {
              display: true,
              color: colors.indigo.quarter,
              drawBorder: false
            },
            ticks: {
            //   max: Math.max(Math.max(...weight), Math.max(...weight2)),
            //   min: Math.min(Math.min(...weight), Math.min(...weight2)),
              padding: 19
            }
          }
        ]
      }
    }
  };

Chart.defaults.global.defaultFontColor = colors.indigo.default;
Chart.defaults.global.defaultFontFamily = "Andale Mono";  

var myChart = new Chart(ctx, options);

if(document.getElementById("uploadBox").value != "") {
  console.log('print')
}

