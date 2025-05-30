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
  box-sizing: border-box;
}

.app-container {
  display: flex;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;
}

.sidebar-container {
  display: flex;
  width: 260px;
  background: #f4f4f4;
  padding: 15px 0 15px 15px;
}

.main-content {
  flex: 1;
  padding: 15px;
  background: #f4f4f4;
  height: 100%;
}
</style>
