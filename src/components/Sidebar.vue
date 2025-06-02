<template>
  <div class="sidebar" :class="{ collapsed }">
    <!-- Top: Logo + Search -->
    <div class="logo">
      <span class="logo-icon">🍊</span>
      <span class="logo-text" v-if="!collapsed">OrangeFarm</span>
    </div>
    <div class="search-bar" v-if="!collapsed">
      <input type="text" placeholder="Search" />
    </div>

    <!-- Middle: Navigation & Bottom Fixed Section -->
    <div class="sidebar-content">
      <div class="nav">
        <div
          class="nav-item"
          :class="{ active: activeItem === 'Dashboard' }"
          @click="setActive('Dashboard')"
        >
          <LayoutDashboard class="icon" />
          <span class="text" v-if="!collapsed">Dashboard</span>
        </div>

        <div class="gap" />

        <div class="nav-item customers-row" @click="toggleCustomers">
          <div class="left">
            <Users class="icon" />
            <span class="text">Customers</span>
          </div>
          <ChevronDown class="chevron" :class="{ rotated: isCustomersOpen }" />
        </div>

        <div v-if="isCustomersOpen" class="sub-menu">
          <div class="sub-item">Current</div>
          <div class="sub-item">New</div>
          <div class="sub-item">Negotiating</div>
        </div>

        <div class="gap" />

        <div
          class="nav-item"
          :class="{ active: activeItem === 'All reports' }"
          @click="setActive('All reports')"
        >
          <ClipboardList class="icon" />
          <span class="text">All reports</span>
        </div>

        <div class="gap" />

        <div
          class="nav-item"
          :class="{ active: activeItem === 'Geography' }"
          @click="setActive('Geography')"
        >
          <Globe class="icon" />
          <span class="text">Geography</span>
        </div>

        <div class="gap" />

        <div
          class="nav-item"
          :class="{ active: activeItem === 'Conversations' }"
          @click="setActive('Conversations')"
        >
          <MessageCircle class="icon" />
          <span class="text">Conversations</span>
        </div>

        <div class="gap" />

        <div
          class="nav-item"
          :class="{ active: activeItem === 'Deals' }"
          @click="setActive('Deals')"
        >
          <Briefcase class="icon" />
          <span class="text">Deals</span>
        </div>

        <div class="gap" />

        <div
          class="nav-item"
          :class="{ active: activeItem === 'Export' }"
          @click="setActive('Export')"
        >
          <Database class="icon" />
          <span class="text">Export</span>
        </div>
      </div>

      <!-- Bottom Fixed Actions -->
      <div class="bottom-actions">
        <div class="user-info">
          <img src="https://i.pravatar.cc/40" alt="User" />
          <div class="user-details">
            <div class="name">Gustavo Xavier</div>
            <div class="badge">Admin</div>
          </div>
        </div>
        <div class="nav-item">
          <Settings class="icon" />
          <span class="text">Settings</span>
        </div>
        <div class="nav-item logout">
          <LogOut class="icon" />
          <span class="text">Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Globe,
  MessageCircle,
  Briefcase,
  Database,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-vue-next'
import { ref } from 'vue'

const activeItem = ref('Dashboard')
const isCustomersOpen = ref(false)

function setActive(item) {
  activeItem.value = item
}
function toggleCustomers() {
  isCustomersOpen.value = !isCustomersOpen.value
}

</script>

<style scoped>
.sidebar {
  width: 260px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 80px;
  padding: 60px 8px 16px;
}


.logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 22px;
  margin-right: 8px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
}

.search-bar input {
  width: 90%;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid #ddd;
  background-color: #fff;
  font-size: 14px;
  outline: none;
  margin-bottom: 24px;
}

.nav {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

/* Scrollbar hidden (but scrollable) */
.nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin-bottom: 4px;
  background-color: #fff;
}

.nav-item .icon {
  width: 20px;
  margin-right: 10px;
  color: inherit;
}

.nav-item:hover {
  background-color: #fff6e5;
}

.nav-item:hover .icon {
  color: #f59e0b;
}

.nav-item:hover .text {
  color: #000;
}

.nav-item.active {
  background-color: #fff;
}

.nav-item.active .icon {
  color: #f59e0b;
}

.nav-item.active .text {
  color: #555;
}

.nav-item.active:hover {
  background-color: #fff6e5;
}

.nav-item.active:hover .icon {
  color: #f59e0b;
}

.nav-item.active:hover .text {
  color: #000;
}

.customers-row {
  justify-content: space-between;
}

.customers-row .left {
  display: flex;
  align-items: center;
}

.chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.sub-menu {
  background-color: #fff6e5;
  padding: 7px 40px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.sub-item {
  padding: 6px 0;
  font-size: 13px;
  color: #555;
  cursor: pointer;
}

.sub-item:hover {
  color: #f59e0b;
}

.bottom-actions {
  padding-top: 1.2rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  margin-bottom: 12px;
}

.user-info img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details .name {
  font-weight: 600;
  color: #333;
  font-size: 0.8rem;
}

.badge {
  background-color: #ffecb3;
  color: #b76e00;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 4px;
  display: inline-block;
}

.logout {
  color: #e53935;
}

.logout:hover {
  color: #555;
}

/* Responsive: small height scroll fix */
@media (max-width: 768px) {
  .sidebar {
    width: 260px;
  }
  
  .sidebar.collapsed {
    width: 0;
    padding: 60px 0 16px;
    overflow: hidden;
  }
}
</style>
