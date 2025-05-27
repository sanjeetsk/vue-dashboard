<template>
  <div class="sidebar">
    <!-- Logo -->
    <div class="logo">
      <span class="logo-icon">🍊</span>
      <span class="logo-text">OrangeFarm</span>
    </div>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
    </div>

    <!-- Navigation Items -->
    <div class="nav-section">
      <div class="nav-item"><span>📊</span> Dashboard</div>
      <div class="nav-item"><span>👥</span> Customers</div>
      <div class="nav-item"><span>📄</span> All reports</div>
      <div class="nav-item"><span>🌍</span> Geography</div>
      <div class="nav-item"><span>💬</span> Conversations</div>
      <div class="nav-item"><span>💼</span> Deals</div>
      <div class="nav-item"><span>📤</span> Export</div>
      <div class="nav-spacer"></div>
    </div>

    <!-- Bottom User Info -->
    <div class="bottom-section">
      <div class="user-info">
        <img src="https://i.pravatar.cc/40" alt="User" />
        <div class="user-details">
          <div class="name">Gustavo Xavier</div>
          <div class="badge">Admin</div>
        </div>
      </div>
      <div class="actions">
        <div class="action-item"><span>⚙️</span> Settings</div>
        <div class="action-item logout"><span>🔓</span> Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.logo-icon {
  font-size: 24px;
}

/* Search Bar */
.search-bar {
  margin-bottom: 16px;
}

.search-bar input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
}

/* Navigation */
.nav-section {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  scrollbar-width: none;
}

.nav-section::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 12px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: #333;
}

.nav-item:hover {
  background-color: #f5f5f5;
}

.nav-spacer {
  height: 24px;
}

/* Bottom Section */
.bottom-section {
  padding-top: 12px;
}

/* User Info */
.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-details .name {
  font-weight: 600;
}

.badge {
  background-color: #ffecb3;
  color: #b77b00;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 4px;
  display: inline-block;
}

/* Actions */
.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.action-item:hover {
  color: #555;
}

.logout {
  color: #e53935;
}
</style>
