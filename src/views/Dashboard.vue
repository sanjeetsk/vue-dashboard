<!-- src/views/Dashboard.vue -->
<template>
  <div class="dashboard">
    <Revenue />
    <LostDeal />
  </div>
</template>

<script setup>
import Revenue from '../components/widgets/Revenue.vue'
import LostDeal from '../components/widgets/LostDeal.vue'
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: flex;
  gap: 1rem;
}
</style>
