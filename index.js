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

const ctx2 = document.getElementById("canvas_bar").getContext("2d");
ctx2.canvas.height = 100;

gradient = ctx2.createLinearGradient(0, 150, 0, 300);
gradient.addColorStop(0, colors.pink.half);
gradient.addColorStop(0.35, colors.pink.quarter);
gradient.addColorStop(1, colors.pink.zero);

const options2 = {
  type: "horizontalBar",
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
      }]
  },
  options: {
    layout: {
      padding: 10
    },
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      mode: 'index',
      axis: 'y'
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

var myBarChart = new Chart(ctx2, options2);

const ctx3 = document.getElementById("canvas_hor_bar").getContext("2d");
ctx3.canvas.height = 100;

gradient = ctx3.createLinearGradient(0, 150, 0, 300);
gradient.addColorStop(0, colors.pink.half);
gradient.addColorStop(0.35, colors.pink.quarter);
gradient.addColorStop(1, colors.pink.zero);

const options3 = {
  type: "bar",
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
      }]
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

var myHorBarChart = new Chart(ctx3, options3);

const ctx4 = document.getElementById("canvas_pie").getContext("2d");
ctx4.canvas.height = 100;

gradient = ctx4.createLinearGradient(0, 150, 0, 300);
gradient.addColorStop(0, colors.pink.half);
gradient.addColorStop(0.35, colors.pink.quarter);
gradient.addColorStop(1, colors.pink.zero);

const options4 = {
  type: "pie",
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
      }]
  },
  options: {
    layout: {
      padding: 10
    },
    responsive: true,
    legend: {
      display: true
    },
  }
};

Chart.defaults.global.defaultFontColor = colors.indigo.default;
Chart.defaults.global.defaultFontFamily = "Andale Mono";  

var myPieChart = new Chart(ctx4, options4);

const ctx5 = document.getElementById("canvas_donut").getContext("2d");
ctx5.canvas.height = 100;

gradient = ctx5.createLinearGradient(0, 150, 0, 300);
gradient.addColorStop(0, colors.pink.half);
gradient.addColorStop(0.35, colors.pink.quarter);
gradient.addColorStop(1, colors.pink.zero);

const options5 = {
  type: "doughnut",
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
      }]
  },
  options: {
    layout: {
      padding: 10
    },
    responsive: true,
    legend: {
      display: true
    },
  }
};

Chart.defaults.global.defaultFontColor = colors.indigo.default;
Chart.defaults.global.defaultFontFamily = "Andale Mono";  

var myDonutChart = new Chart(ctx5, options5);

const ctx6 = document.getElementById("canvas_radar").getContext("2d");
ctx6.canvas.height = 100;

gradient = ctx6.createLinearGradient(0, 150, 0, 300);
gradient.addColorStop(0, colors.pink.half);
gradient.addColorStop(0.35, colors.pink.quarter);
gradient.addColorStop(1, colors.pink.zero);

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const options6 = {
  type: 'radar',
  data: data,
  options: {
    legend: {
      display: false
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

Chart.defaults.global.defaultFontColor = colors.indigo.default;
Chart.defaults.global.defaultFontFamily = "Andale Mono";  

var myDonutChart = new Chart(ctx6, options6);

const cursor = document.querySelector("#cursor");

let mouse = { x: -100, y: -100 }; // place it outside
let pos = { x: 0, y: 0 };
const speed = 0.1;

const updateCoordinates = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener("mousemove", updateCoordinates);

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform =
    "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
};

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((curosrModifier) => {
  curosrModifier.addEventListener("mouseenter", function () {
    const attribute = this.getAttribute("cursor-class");
    cursor.classList.add(attribute);
  });

  curosrModifier.addEventListener("mouseleave", function () {
    const attribute = this.getAttribute("cursor-class");
    cursor.classList.remove(attribute);
  });
});

const swup = new Swup({
  containers: ["#swup"]
});
