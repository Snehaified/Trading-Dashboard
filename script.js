// Get context for the chart
const ctx = document.getElementById('myChart').getContext('2d');
let stockChart;

// Stock Data for different companies



// function displayData(data) {
//     // Display sentiment data
//     const sentimentDiv = document.getElementById('sentiment');
//     sentimentDiv.innerHTML = `
//         <h2>Sentiment Analysis</h2>
//         <p>Bullish: ${data.sentiment.bullish}%</p>
//         <p>Bearish: ${data.sentiment.bearish}%</p>
//         <p>Neutral: ${data.sentiment.neutral}%</p>
//     `;

//     // Display actionable suggestions (this is now handled separately)
//     const suggestionsDiv = document.getElementById('suggestions');
//     suggestionsDiv.innerHTML = '<h2>Actionable Suggestions</h2>' + data.actionableSuggestions.map(suggestion => `<p>${suggestion}</p>`).join('');

//     // Display summary
//     const summaryDiv = document.getElementById('summary');
//     summaryDiv.innerHTML = '<h2>Summary</h2>' + data.summary.map(item => `<p>${item}</p>`).join('');
// }

const stockData = {
    Apple: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [{
            label: 'Apple Inc Stock',
            data: [145, 150, 148, 151, 155, 152],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    },
    Tesla: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [{
            label: 'Tesla Inc Stock',
            data: [750, 755, 760, 765, 770, 775],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    },
    Amazon: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [{
            label: 'Amazon Stock',
            data: [3000, 3010, 3020, 3030, 3040, 3050],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    },
    Microsoft: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [{
            label: 'Microsoft Stock',
            data: [230, 235, 240, 245, 250, 255],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8,
        }]
    }
};

// Function to load the chart
function loadChart(company) {
    if (stockChart) {
        stockChart.destroy(); // Clear the previous chart before drawing a new one
    }

    const selectedData = stockData[company];

    stockChart = new Chart(ctx, {
        type: 'line',
        data: selectedData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Time' } },
                y: { title: { display: true, text: 'Price' } }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
}

// Load the default chart on page load (Apple Inc.)
window.onload = function () {
    loadChart('Apple');
};
function toggleActive(button) {
    let buttons = document.querySelectorAll('.sidebar .button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
