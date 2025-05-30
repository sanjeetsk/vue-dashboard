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
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
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
  padding: 0.75rem 1rem;
  border-radius: 12px;
  transition: background 0.3s;
}

.customer-item.selected {
  background: #fff4db;
}

.avatar {
  width: 40px;
  height: 40px;
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
  font-size: 1.1rem;
}

.info p {
  color: #777;
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: 0.75rem;
  font-size: 0.8rem;
  cursor: pointer;
  color: #555;
}

.footer {
  text-align: left;
  margin-top: 2rem;
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
