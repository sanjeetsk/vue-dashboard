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
      <div class="summary-card small">
        <p class="label">Top month</p>
        <div class="value-container move-down">
          <p class="value">November</p>
          <p class="subtext">2019</p>
        </div>
      </div>
      <div class="summary-card small">
        <p class="label">Top year</p>
        <div class="value-container move-down">
          <p class="value">2023</p>
          <p class="subtext one">96K sold so far</p>
        </div>
      </div>
      <div class="summary-card buyer small">
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
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip
} from 'chart.js'

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)

const selectedPeriod = ref('yearly')
const growthCanvas = ref(null)

onMounted(() => {
  const ctx = growthCanvas.value.getContext('2d')

  const gradient = ctx.createLinearGradient(0, 0, 0, 200)
  gradient.addColorStop(0, 'rgba(76, 175, 80, 0.4)')
  gradient.addColorStop(1, 'rgba(76, 175, 80, 0.05)')

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [{
        data: [9000, 15000, 35000, 50000, 20000, 30000, 60000, 95000],
        borderColor: '#19C37D',
        backgroundColor: gradient,
        borderWidth: 1,
        fill: true,
        tension: 0,
        pointRadius: 0,
        borderDash: [2, 2]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 0
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          callbacks: {
            label: ctx => `${ctx.raw.toLocaleString()} units`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100000,
          ticks: {
            stepSize: 20000,
            callback: value => `${value / 1000}k`,
            color: '#999',
            font: {
              size: 11
            }
          },
          grid: {
            drawBorder: false,
            color: '#eee'
          }
        },
        x: {
          ticks: {
            color: '#999',
            font: {
              size: 11
            }
          },
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
  gap: 0.75rem;
}

.growth-card {
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 270px;
  overflow: hidden;
  box-sizing: border-box;
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
  width: 100% !important;
  height: 100% !important;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
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
  justify-content: space-between;
}

.summary-card.small {
  min-height: 80px;
  padding: 0.5rem 0.6rem;
}

.label {
  color: #888;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0.1rem 0.5rem 0.5rem 0.3rem;
}

.value-container {
  margin-left: 0.3rem;
}

.value-container.move-down {
  margin-top: 1.2rem;
}

.value {
  font-size: 1.2rem;
  font-weight: 600;
  color: #8c4f2b;
  margin: 0;
}

.subtext {
  font-size: 0.8rem;
  color: #eb9728;
  font-weight: 600;
  margin-top: 0;
}

.one {
  color: #222;
  font-size: 0.65rem;
}

.summary-card.buyer .buyer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.2rem 0.3rem 0 0.3rem;
}

.buyer-info img {
  width: 36px;
  height: 36px;
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
  font-size: 0.4rem;
  color: #666;
}
</style>
