<template>
  <div class="new-deals-card">
    <h2 class="title">New deals</h2>
    <div class="deal-list">
      <div v-for="(deal, index) in deals" :key="index" class="deal-item">
        <span class="plus-icon">＋</span>
        <span>{{ deal }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const deals = [
  'Fruit2Go',
  "Marshall's MKT",
  'CCNT',
  'Joana Mini-market',
  'Little Brazil Vegan',
  'Target',
  'Organic Place',
  "Morello's"
]
</script>

<style scoped>
.new-deals-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 0 1rem;
}

.title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 1.5rem;
}

.deal-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.deal-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff7e6;
  border-radius: 12px;
  padding: 0.9rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: #734a00;
  white-space: nowrap;
}

.plus-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border: 1.5px solid #f5a623;
  border-radius: 30%;
  font-size: 0.75rem;
  color: #f5a623;
  line-height: 1;
}
</style>
