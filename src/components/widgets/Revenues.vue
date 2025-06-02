<!-- src/components/widgets/Revenue.vue -->
<template>
  <div class="revenues-card">
    <div class="header">Revenues</div>
    <div class="percentage">
      <span class="value">15%</span>
      <span class="arrow">↗</span>
    </div>
    <p class="description">Increase compared to last week</p>
    <div class="link">
      <a href="#">Revenues report →</a>
    </div>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.revenues-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
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

.arrow {
  color: #22c55e;
  font-size: 20px;
  margin-left: 6px;
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

/* Responsive styles: tablet and below */
@media (max-width: 1024px) {
  .revenues-card {
    padding: 20px;
  }

  .header {
    font-size: 1.1rem;
  }

  .value {
    font-size: 28px;
  }

  .arrow {
    font-size: 18px;
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
