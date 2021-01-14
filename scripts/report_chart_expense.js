var ctx = document.getElementById('exp-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Groceries', 'Bills', 'Transport', 'Health', 'Family'],
        datasets: [{
            data: [346,231, 82.22,150, 444],
            backgroundColor: [
                '#c2e812',
                '#91F5AD',
                '#8B9EB7',
                '#745296',
                '#632A50'
                      ],           
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 1.5,
            hoverBorderColor: '#000'
        }]
    },
    options: {
       legend:{
           display:  true,
           position:'right',
           labels: {
            fontSize: 16,
            fontColor: 777
           }
           
       }
       
    }
});