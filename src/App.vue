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
.app-container {
  display: flex;
  height: 100vh;
  font-family: "Segoe UI", sans-serif;
}
.main-content {
  flex: 1;
  padding: 20px;
  background: #f4f4f4;
  overflow-y: auto;
}
.sidebar-container{
  width: 260px;
  height: 100vh;
  background: #f4f4f4;
  padding: 20px 0 16px 16px;
}
</style>