<template>
  <div class="top-states-card">
    <h2 class="title">Top states</h2>
    <div v-for="(state, index) in states" :key="index" class="state-bar">
      <div
        class="bar-fill"
        :style="{ width: state.value + '%' }"
      >
        <span class="state-name">{{ state.name }}</span>
        <span class="state-value">{{ state.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const states = [
  { name: 'NY', value: 100, label: '120K' },
  { name: 'MA', value: 67, label: '80K' },
  { name: 'NH', value: 58, label: '70K' },
  { name: 'OR', value: 42, label: '50K' },
]
</script>

<style scoped>
.top-states-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 1rem 1rem 0.5rem 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
  margin: 0rem 0rem 1.5rem 0rem;
}

.state-bar {
  margin-bottom: 0.75rem;
  padding-right: 1.2rem;
}

.bar-fill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: linear-gradient(to right, #fbc67b, #fff6e7);
  border-radius: 5px;
  font-weight: 600;
  color: #111;
}

.state-name {
  font-size: 0.75rem;
}

.state-value {
  font-size: 0.75rem;
}
</style>
