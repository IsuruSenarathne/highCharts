
console.log('jQ loaded SSSS')
$("#btn").click(function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://localhost:5000/data_list');
    myRequest.onload = function () {
      var loadedData = JSON.parse(myRequest.responseText);
      console.log(loadedData)
      var cats = [];
      var wood = [];
      var food = [];
      var gold = [];
      loadedData.forEach(element => {
        cats.push(element.Name);
        wood.push(element.WOOD);
        food.push(element.FOOD);
        gold.push(element.GOLD);
      });
        console.log(cats)
        console.log(wood);
        console.log(food);  
      renderChart(cats, wood, food, gold);
    };
    myRequest.send();
    
});

function renderChart(cats, wood, food, gold) {
  console.log("charts are rendering !!");

  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Stacked column chart'
    },
    xAxis: {
  
      categories: cats
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
        }
      }
    },
    series: [{
      name: 'WOOD',
      data: wood
    }, {
      name: 'FOOD',
      data: food
    }, {
      name: 'GOLD',
      data: gold
    }]
  });
};
