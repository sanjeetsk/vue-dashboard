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
      <div
        v-for="(customer, index) in sortedCustomers"
        :key="index"
        :class="['customer-item', { selected: customer.name === 'Maggie Johnson' }]"
      >
        <img :src="customer.image" class="avatar" />
        <div class="info">
          <strong>{{ customer.name }}</strong>
          <p>{{ customer.company }}</p>
        </div>

        <!-- Show icons only for Maggie Johnson -->
        <div v-if="customer.name === 'Maggie Johnson'" class="actions">
          <MessageCircle class="icon" />
          <Star class="icon" />
          <Pencil class="icon" />
          <span class="divider"></span>
          <MoreVertical class="icon" />
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
import {
  MessageCircle,
  Star,
  Pencil,
  MoreVertical,
} from 'lucide-vue-next'

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
    company: 'Walmart',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
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
  padding: 0.75rem 1rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.info strong {
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.1;
}

.info p {
  color: #333;
  font-size: 0.7rem;
  line-height: 1;
  margin: 0;
}

.actions {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  color: #5c3d00;
  align-items: center;
}

.icon {
  width: 16px;
  height: 16px;
}

.divider {
  width: 1px;
  height: 20px;
  background-color: #c9b496;
  margin: 0 0.5rem;
}

.footer {
  text-align: left; 
  padding-left: 1rem;
  margin-top: 1.7rem;
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
