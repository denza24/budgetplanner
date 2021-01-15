var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Income', 'Expense', 'Saldo'],
        datasets: [{
            data: [1790.22, 1334.8, 395.42],
            backgroundColor: [
                '#63f0a9b0',
                '#FB4B4E',
                '#59546C'
                      ],           
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 1.5,
            hoverBorderColor: '#000'
        }]
    },
    options: {
       legend:{
           display:  false,
           position:'right',
           labels: {
            fontSize: 18,
            fontColor: 777
           }
           
       },
       scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
    }
});