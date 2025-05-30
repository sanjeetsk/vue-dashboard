<template>
    <div class="sidebar">
        <!-- Logo -->
        <div class="logo">
            <span class="logo-icon">🍊</span>
            <span class="logo-text">OrangeFarm</span>
        </div>

        <!-- Search Bar -->
        <div class="search-bar">
            <input type="text" placeholder="Search" />
        </div>

        <!-- Navigation -->
        <div class="nav">
            <div class="nav-item" :class="{ active: activeItem === 'Dashboard' }" @click="setActive('Dashboard')">
                <span class="icon">📊</span>
                Dashboard
            </div>

            <div class="nav-item customers" :class="{ active: activeItem === 'Customers' || isCustomersOpen }"
                @click="toggleCustomers">
                <span class="icon">👥</span>
                Customers
                <span class="arrow">{{ isCustomersOpen ? '▾' : '▸' }}</span>
            </div>

            <div v-if="isCustomersOpen" class="sub-menu">
                <div class="sub-item">Current</div>
                <div class="sub-item">New</div>
                <div class="sub-item">Negotiating</div>
            </div>

            <div class="nav-item" :class="{ active: activeItem === 'All reports' }" @click="setActive('All reports')">
                <span class="icon">📄</span>
                All reports
            </div>

            <div class="nav-item" :class="{ active: activeItem === 'Geography' }" @click="setActive('Geography')">
                <span class="icon">🌍</span>
                Geography
            </div>

            <div class="nav-item" :class="{ active: activeItem === 'Conversations' }"
                @click="setActive('Conversations')">
                <span class="icon">💬</span>
                Conversations
            </div>

            <div class="nav-item" :class="{ active: activeItem === 'Deals' }" @click="setActive('Deals')">
                <span class="icon">💼</span>
                Deals
            </div>

            <div class="nav-item" :class="{ active: activeItem === 'Export' }" @click="setActive('Export')">
                <span class="icon">📤</span>
                Export
            </div>
        </div>

        <!-- Bottom -->
        <div class="bottom-actions">
            <div class="user-info">
                <img src="https://i.pravatar.cc/40" alt="User" />
                <div class="user-details">
                    <div class="name">Gustavo Xavier</div>
                    <div class="badge">Admin</div>
                </div>
            </div>
            <div class="nav-item">
                <span class="icon">⚙️</span>
                Settings
            </div>
            <div class="nav-item logout">
                <span class="icon">🔓</span>
                Logout
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            activeItem: "Dashboard",
            isCustomersOpen: true, // open by default like in the screenshot
        };
    },
    methods: {
        setActive(item) {
            this.activeItem = item;
        },
        toggleCustomers() {
            this.isCustomersOpen = !this.isCustomersOpen;
        },
    },
};
</script>

<style scoped>
.sidebar {
    width: 260px;
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
    width: 100%;
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
}

.nav-item {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-bottom: 4px;
}

.nav-item .icon {
    width: 20px;
    margin-right: 10px;
}

.nav-item.active,
.nav-item:hover {
    background-color: #fff6e5;
    color: #f59e0b;
    /* orange-500 */
}

.customers {
    justify-content: space-between;
}

.arrow {
    font-size: 12px;
}

.sub-menu {
    background-color: #fff6e5;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 8px;
    margin-left: 8px;
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
    border-top: 1px solid #eee;
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

.logout {
    color: #e53935;
}

.logout:hover {
    color: #555;
}
</style>
