<template>
  <div class="chat-card">
    <div>
      <h2 class="chat-title">Chats</h2>
      <p class="chat-subtext">2 unread messages</p>

      <div class="chat-avatars">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          :class="['chat-avatar-wrapper', { 'unread-bg': chat.unread }]"
        >
          <img :src="chat.avatar" :alt="chat.name" class="chat-avatar" />
          <span v-if="chat.unread" class="unread-indicator"></span>
        </div>
      </div>
    </div>

    <router-link to="/conversations" class="all-messages-link">
      All messages →
    </router-link>
  </div>
</template>

<script setup>

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register the components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
  Tooltip,
  Legend
)


const chats = [
  {
    name: 'Maggie Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    unread: true,
  },
  {
    name: 'Mark Henry',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    unread: true,
  },
  {
    name: 'James Smith',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    unread: false,
  },
  {
    name: 'Anna Gray',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    unread: false,
  },
];
</script>

<style scoped>
.chat-card {
  background: #fff;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.chat-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111;
  margin: 0;
}

.chat-subtext {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.chat-avatars {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.chat-avatar-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 15%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unread-bg {
  background: #fef6ec;
}

.chat-avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}

.unread-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 5px;
  height: 5px;
  background: #ef4444;
  border: 2px solid #fff;
  border-radius: 50%;
}

.all-messages-link {
  margin-top: 1.2rem;
  font-size: 14px;
  color: #8a5c00;
  font-weight: 400;
  text-decoration: none;
  transition: text-decoration 0.2s;
}

.all-messages-link:hover {
  text-decoration: underline;
}
</style>
