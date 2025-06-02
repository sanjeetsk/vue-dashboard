<!-- src/components/widgets/Revenue.vue -->
<template>
  <div class="lostdeal-card">
    <div class="header">Lost deals</div>
    <div class="percentage">
      <span class="value">4%</span>
    </div>
    <p class="description">You closed 96 out of 100 deals</p>
    <div class="link">
      <a href="#">Lost deals →</a>
    </div>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.lostdeal-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.header {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 10px;
}

.percentage {
  display: flex;
  align-items: center;
  margin: 0;
}

.value {
  font-size: 32px;
  font-weight: 600;
  color: #111;
}

.description {
  font-size: 12px;
  color: #555;
  margin: 0;
}

.link {
  height: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.link a {
  font-size: 14px;
  color: #8a5c00;
  font-weight: 400;
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}

/* Tablet responsiveness */
@media (max-width: 1024px) {
  .lostdeal-card {
    padding: 20px;
  }

  .header {
    font-size: 1.1rem;
  }

  .value {
    font-size: 28px;
  }

  .description {
    font-size: 11px;
  }

  .link{
    margin-top: 1rem;
  }

  .link a {
    font-size: 13px;
  }
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .lostdeal-card {
    padding: 16px;
    border-radius: 12px;
  }

  .header {
    font-size: 1rem;
  }

  .value {
    font-size: 24px;
  }

  .description {
    font-size: 10px;
  }

  .link{
    margin-top: 1rem;
  }

  .link a {
    font-size: 12px;
  }
}

</style>
