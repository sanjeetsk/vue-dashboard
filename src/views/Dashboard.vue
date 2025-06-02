<template>
  <div class="dashboard">
    <!-- Top widgets row -->
    <div class="top-widgets">
      <Revenues />
      <LostDeal />
      <Quartergoal />
    </div>

    <!-- Customers and Growth section -->
    <div class="middle-section">
      <CustomersList />
      <GrowthChart />
    </div>

    <!-- Bottom row: Chats + Top States + New Deals -->
    <div class="bottom-widgets">
      <div class="widget-card"><Chats /></div>
      <div class="widget-card"><TopStates /></div>
      <div class="widget-card"><NewDeals /></div>
    </div>
  </div>
</template>

<script setup>
import Revenues from '../components/widgets/Revenues.vue'
import LostDeal from '../components/widgets/LostDeal.vue'
import Quartergoal from '../components/widgets/Quartergoal.vue'
import CustomersList from '../components/widgets/CustomersList.vue'
import GrowthChart from '../components/widgets/GrowthChart.vue'
import Chats from '../components/widgets/Chats.vue'
import TopStates from '../components/widgets/TopStates.vue'
import NewDeals from '../components/widgets/NewDeals.vue'
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
}

/* Top row of widgets */
.top-widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.top-widgets > * {
  flex: 1;
  min-width: 0;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Middle section: Customers + Growth */
.middle-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

/* Bottom widgets row styled as per Figma */
.bottom-widgets {
  display: grid;
  grid-template-columns: 1fr 1fr 1.3fr;
  gap: 0.75rem;
}

/* Card styling for bottom widgets */
.widget-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Responsive layouts */
@media (max-width: 1200px) {
  .bottom-widgets {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .top-widgets {
    grid-template-columns: 1fr;
  }
  
  .middle-section {
    grid-template-columns: 1fr;
  }
  
  .bottom-widgets {
    grid-template-columns: 1fr;
  }
}

</style>
