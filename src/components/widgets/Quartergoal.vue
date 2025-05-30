<template>
  <div class="quarter-goal-card">
    <h2 class="title">Quarter goal</h2>
    <apexchart
      width="100%"
      height="220"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    />
    <div class="footer">
      <a href="#" class="link">All goals →</a>
    </div>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'

const series = [84]

const chartOptions = {
  chart: {
    type: 'radialBar',
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: '60%',
      },
      track: {
        background: '#fcefd8',
        strokeWidth: '100%',
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          offsetY: 10,
          fontSize: '28px',
          fontWeight: 600,
          color: '#000',
          formatter: (val) => `${val}%`,
        },
      },
    },
  },
  fill: {
    colors: ['#fbc252'],
  },
  stroke: {
    lineCap: 'round',
  },
}
</script>

<script>
export default {
  components: {
    apexchart: VueApexCharts,
  },
}
</script>

<style scoped>
.quarter-goal-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
  margin: 0;
}

.footer {
  margin-top: 1rem;
}

.link {
  color: #8a5c00;
  font-weight: 400;
  text-decoration: none;
  font-size: 14px;
}

a:hover {
  text-decoration: underline;
}
</style>
