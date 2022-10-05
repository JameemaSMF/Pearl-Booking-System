import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/**
* Chart
*/
export default class Charts {
  constructor() {
    console.log('loading charts');

    async function getData() {
      try {
        const response = await fetch('/wp-content/themes/dxdy/json/test.json');
        const jsonData = await response.json();
        return jsonData;
      } catch (err) {
        console.error(err);
      }
    }

    getData().then((jsonData) => {
      const labels = jsonData.map(element => {
        return (element.year);
      });

      const dataset = jsonData.map(element => {
        return (element.stats);
      });

      const avgPrice = jsonData.map(element => {
        return (element.stats.ap);
      });

      const avgLeastExp = jsonData.map(element => {
        return (element.stats.ale);
      });

      const priceMostSold = jsonData.map(element => {
        return (element.stats.psb);
      });

      const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById('legend');
        let listContainer = legendContainer.querySelector('ul');
      
        if (!listContainer) {
          listContainer = document.createElement('ul');
          listContainer.style.display = 'flex';
          listContainer.style.flexDirection = 'row';
          listContainer.style.margin = 0;
          listContainer.style.padding = 0;
      
          legendContainer.appendChild(listContainer);
        }
      
        return listContainer;
      };
      
      const htmlLegendPlugin = {
        id: 'htmlLegend',
        afterUpdate(chart, args, options) {
          const ul = getOrCreateLegendList(chart, options.containerID);
      
          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
      
          // Reuse the built-in legendItems generator
          const items = chart.options.plugins.legend.labels.generateLabels(chart);
      
          items.forEach(item => {
            const li = document.createElement('li');
            li.style.alignItems = 'center';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.flexDirection = 'row';
            li.style.marginLeft = '10px';
      
            li.onclick = () => {
              const { type } = chart.config;
              if (type === 'pie' || type === 'doughnut') {
                // Pie and doughnut charts only have a single dataset and visibility is per item
                chart.toggleDataVisibility(item.index);
              } else {
                chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
              }
              chart.update();
            };
      
            // Color box
            const boxSpan = document.createElement('span');
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = `${item.lineWidth}px`;
            boxSpan.style.display = 'inline-block';
            boxSpan.style.height = '4px';
            boxSpan.style.marginRight = '20px';
            boxSpan.style.width = '20px';
      
            // Text
            const textContainer = document.createElement('p');
            textContainer.style.color = item.fontColor;
            textContainer.style.margin = 0;
            textContainer.style.padding = 0;
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
      
            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);
      
            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
          });
        },
      };

      const data = {
        labels,
        datasets: [
          {
            label: 'Average Price',
            backgroundColor: 'rgb(167, 183, 221)',
            borderColor: 'rgb(167, 183, 221)',
            data: avgPrice,
          },
          {
            label: 'Average least expensive',
            backgroundColor: 'rgb(89, 130, 195)',
            borderColor: 'rgb(89, 130, 195)',
            data: avgLeastExp,
          },
          {
            label: 'Price for most sold brand',
            backgroundColor: 'rgb(47, 47, 47)',
            borderColor: 'rgb(47, 47, 47)',
            data: priceMostSold,
          },
        ],
      };
      
      const config = {
        type: 'line',
        data,
        options: {
          scales: {
            y: {
              ticks: {
                callback: (label) => `$ ${label}`,
                min: 0,
                stepSize: 5,
                stepValue: 6,
                font: {
                  size: 14,
                  weight: 'bold',
                },
                color: 'rgba(74, 74, 74, 1)',
              },
            },
            x: {
              ticks: {
                font: {
                  size: 20,
                  weight: 'bold',
                },
                color: 'rgba(74, 74, 74, 1)',
              },
            },
          },
          elements: {
            point: {
              borderWidth: 0,
              radius: 0,
            },
          },
          plugins: {
            tooltip: {
              enabled: false,
            },
            // legend: {
            //   display: true,
            //   position: 'bottom',
            // },
            htmlLegend: {
              // ID of the container to put the legend in
              containerID: 'legend-container',
            },
            legend: {
              display: false,
            },
          },
          events: [],
        },
        plugins: [htmlLegendPlugin],
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config,
      );
    });
  }
}
