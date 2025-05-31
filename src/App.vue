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
  height: 100vh;
  overflow: hidden;
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
  height: 95vh;
  background: #f4f4f4;
  padding: 15px 0 15px 15px;
}

.main-content {
  flex: 1;
  padding: 15px;
  background: #f4f4f4;
  height: 95vh;
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
