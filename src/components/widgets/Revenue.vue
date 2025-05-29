<!-- src/components/widgets/Revenue.vue -->
<template>
  <div class="lostdeal-card">
    <div class="header">LostDeal</div>
    <div class="percentage">
      <span class="value">4%</span>
      <span class="arrow">↑</span>
    </div>
    <p class="description">II get rate out96 out of 100</p>
    <a href="#" class="link">Lost deals →</a>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.lostdeal-card {
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  font-family: 'Inter', sans-serif;
}
.header {
  font-size: 18px;
  font-weight: 600;
  color: #111;
}
.percentage {
  display: flex;
  align-items: center;
  margin: 8px 0;
}
.value {
  font-size: 32px;
  font-weight: bold;
  color: #111;
}
.arrow {
  color: green;
  font-size: 20px;
  margin-left: 8px;
}
.description {
  font-size: 14px;
  color: #666;
}
.link {
  display: inline-block;
  margin-top: 12px;
  font-size: 14px;
  color: orange;
  text-decoration: none;
}
</style>
