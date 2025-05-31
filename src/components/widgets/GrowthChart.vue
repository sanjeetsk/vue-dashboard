<template>
  <div class="growth-section">
    <div class="growth-card">
      <div class="header">
        <h2>Growth</h2>
        <select v-model="selectedPeriod" class="period-select">
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <canvas ref="growthCanvas"></canvas>
    </div>

    <div class="summary-cards">
      <div class="summary-card">
        <p class="label">Top month</p>
        <div class="value-container">
          <p class="value">November</p>
          <p class="subtext">2019</p>
        </div>
      </div>
      <div class="summary-card">
        <p class="label">Top year</p>
        <div class="value-container">
          <p class="value">2023</p>
          <p class="subtext one">96K sold so far</p>
        </div>
      </div>
      <div class="summary-card buyer">
        <p class="label">Top buyer</p>
        <div class="buyer-info">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="buyer" />
          <div class="buyer-data">
            <strong>Maggie Johnson</strong>
            <p>Oasis Organic Inc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'

Chart.register(LineElement, PointElement, LinearScale, CategoryScale)

const selectedPeriod = ref('yearly')
const growthCanvas = ref(null)

onMounted(() => {
  const ctx = growthCanvas.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        data: [9000, 15000, 35000, 50000, 20000, 30000, 60000, 95000],
        borderColor: '#00cc00',   // bright green
        backgroundColor: 'rgba(0, 204, 0, 0.1)',  // light green fill
        borderDash: [2, 2],       // dashed line
        fill: true,
        tension: 0,               // no smoothing → discrete/straight
        pointRadius: 0,            // no point dots
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100000,
          ticks: {
            callback: (value) => {
              const allowedTicks = [0, 10000, 20000, 50000, 100000]
              if (allowedTicks.includes(value)) {
                return value >= 1000 ? `${value / 1000}k` : value
              }
              return ''
            }
          },
          grid: {
            drawBorder: false,
            color: '#eee'
          }
        },
        x: {
          grid: {
            drawBorder: false,
            color: '#eee'
          }
        }
      }

    }
  })
})
</script>

<style scoped>
.growth-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.75rem;
}

.growth-card {
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
}

.header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
}

.period-select {
  padding: 0.5rem;
  border-radius: 8px;
  color: #555;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
}

.growth-card canvas {
  flex: 1;
}

.summary-cards {
  display: flex;
  gap: 0.75rem;
}

.summary-card {
  background: #fff;
  flex: 1;
  padding: 0.6rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.label {
  color: #888;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0.1rem 0.5rem 0.5rem .3rem;
}

.value-container {
  height: 100%;
  place-content: end;
  margin-left: 0.3rem;
}

.value {
  font-size: 1.4rem;
  font-weight: 600;
  color: #8c4f2b;
  margin: 0;
}

.subtext {
  font-size: 0.875rem;
  color: #c1975f;
  margin-top: 0.2rem;
}

.one {
  color: #222;
  font-size: 0.75rem;
}

.summary-card.buyer .buyer-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0.3rem;
}

.buyer-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.buyer-data strong {
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.7rem;
}

.buyer-data p {
  margin: 0;
  font-size: 0.5rem;
  color: #666;
}
</style>
