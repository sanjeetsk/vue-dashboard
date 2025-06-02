<template>
  <div class="app-container" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
    <div class="sidebar-container">
      <button class="toggle-sidebar" @click="toggleSidebar">
        <span v-if="isSidebarCollapsed" class="icon">☰</span>
        <span v-else class="icon">✕</span>
      </button>
      <Sidebar :collapsed="isSidebarCollapsed" />
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'

const isSidebarCollapsed = ref(window.innerWidth <= 768)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;
  height: 100vh;
}

.sidebar-container {
  position: relative;
  display: flex;
  transition: width 0.3s ease;
  background: #f4f4f4;
  padding: 15px 0;
}

.toggle-sidebar {
  display: none;
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 100;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.toggle-sidebar .icon {
  font-size: 24px;
  color: #333;
}

.main-content {
  flex: 1;
  padding: 15px;
  background: #f4f4f4;
  height: 100vh;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .toggle-sidebar {
    display: block;
  }
  
  .sidebar-container {
    width: 260px;
    position: fixed;
    height: 100vh;
    z-index: 1000;
    transform: translateX(0);
    transition: transform 0.3s ease;
    background: white;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }

  .sidebar-collapsed .sidebar-container {
    transform: translateX(-260px);
  }

  .main-content {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 10px;
  }
}
</style>