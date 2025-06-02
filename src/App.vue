<template>
  <div class="app-container" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
    <div class="sidebar-container">
      <Sidebar :collapsed="isSidebarCollapsed" />
    </div>
    <div class="main-content">
      <button class="toggle-sidebar" @click="toggleSidebar">
        <span class="hamburger" :class="{ 'is-active': !isSidebarCollapsed }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
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
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;
}

.app-container {
  display: flex;
  overflow: hidden;
  height: 100vh;
}

.sidebar-container {
  position: relative;
  display: flex;
  width: 260px;
  height: 95vh;
  background: #f4f4f4;
  padding: 15px 0 15px 15px;
  transition: width 0.3s ease;
}

.toggle-sidebar {
  display: none;
  position: fixed;
  left: 15px;
  top: 15px;
  z-index: 1000;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.hamburger.is-active{
  transform: translateX(210px);
}

.main-content {
  flex: 1;
  padding: 15px;
  background: #f4f4f4;
  height: 95vh;
  overflow-y: scroll;
  scrollbar-width: none;
  transition: margin-left 0.3s ease;
}

/* Responsive styles */
@media (max-width: 1220px) {
  .toggle-sidebar {
    display: block;
  }
  
  .sidebar-container {
    width: 260px;
    position: fixed;
    height: 87vh;
    border-radius: 15px;
    z-index: 999;
    transform: translateX(0);
    transition: transform 0.3s ease;
    background: white;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }

  .sidebar-collapsed .sidebar-container {
    transform: translateX(-280px);
  }

  .main-content {
    margin-left: 0;
    width: 100%;
    padding-top: 60px;
    height: 84vh;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 60px 10px 10px;
  }
}
</style>
