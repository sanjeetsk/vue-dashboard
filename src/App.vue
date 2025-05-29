<template>
  <div class="app-container">
    <div class="sidebar-container">
      <Sidebar />
    </div>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.app-container {
  display: flex;
  height: 100vh;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;
}

.sidebar-container {
  display: flex;
  width: 260px;
  height: 100vh;
  background: #f4f4f4;
  padding: 20px 0 16px 16px;
  overflow: visible;
}

.main-content {
  flex: 1;
  padding: 20px;
  background: #f4f4f4;
  overflow-y: auto;
}
</style>
