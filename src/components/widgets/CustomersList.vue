<template>
  <div class="customer-card">
    <div class="header">
      <h2>Customers</h2>
      <select v-model="sortOrder" class="sort-select">
        <option value="newest">Sort by Newest</option>
        <option value="oldest">Sort by Oldest</option>
      </select>
    </div>

    <div class="customer-list">
      <div v-for="(customer, index) in sortedCustomers" :key="index"
        :class="['customer-item', { selected: customer.name === 'Maggie Johnson' }]">
        <img :src="customer.image" class="avatar" />
        <div class="info">
          <strong>{{ customer.name }}</strong>
          <p>{{ customer.company }}</p>
        </div>

        <!-- Show icons only for Maggie Johnson -->
        <div v-if="customer.name === 'Maggie Johnson'" class="actions">
          <span>💬</span>
          <span>⭐</span>
          <span>✏️</span>
          <span class="divider"></span>
          <span>⋮</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <a href="#">All customers →</a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sortOrder = ref('newest')

const customers = ref([
  {
    name: 'Chris Friedkly',
    company: 'Supermarket Villanova',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    name: 'Maggie Johnson',
    company: 'Oasis Organic Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Gael Harry',
    company: 'New York Finest Fruits',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Jenna Sullivan',
    company: 'Farm Fresh Co.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg', // You can change the image as needed
  },
])

const sortedCustomers = computed(() => {
  return sortOrder.value === 'oldest'
    ? [...customers.value].reverse()
    : customers.value
})
</script>

<style scoped>
.customer-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem 1.5rem 1.5rem 0.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  padding-left: 1rem;
}

.header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
}

.sort-select {
  padding: 0.5rem;
  border-radius: 8px;
  color: #555;
  font-size: 0.8rem;
  cursor: pointer;
  border: none;
}

.customer-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.customer-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;  /* apply consistent horizontal padding to ALL items */
  border-radius: 12px;
  transition: background 0.3s;
}

.customer-item.selected {
  background: #fff4db;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.info {
  flex: 1;
  line-height: 0.9vh;
}

.info strong {
  display: block;
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.info p {
  color: #333;
  font-size: 0.7rem;
}

.actions {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: #5c3d00; /* deep brown like in the image */
  align-items: center;
}

.actions span {
  display: flex;
  align-items: center;
}

.divider{
  width: 1px;
  height: 20px;
  background-color: #e3d5ba; /* soft beige vertical line */
  margin: 0 0.5rem;
}

.footer {
  text-align: left;
  margin: 3rem 0 0 0rem;
  padding-left: 1rem;
}

.footer a {
  font-size: 14px;
  color: #8a5c00;
  font-weight: 400;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
