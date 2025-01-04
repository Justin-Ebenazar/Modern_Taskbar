// script.js

// Get elements
const clockElement = document.getElementById('clock');
const wifiIcon = document.getElementById('wifi-icon');
const volumeIcon = document.getElementById('volume-icon');
const notificationCount = document.getElementById('notification-count');

// Update the time every second
setInterval(() => {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}, 1000);

// Notification Counter (increase count on click)
let notifications = 0;
notificationCount.addEventListener('click', () => {
    notifications++;
    notificationCount.textContent = `Notifications: ${notifications}`;
});

// Toggle Wi-Fi icon state
wifiIcon.addEventListener('click', () => {
    const isConnected = wifiIcon.classList.contains('connected');
    if (isConnected) {
        wifiIcon.classList.remove('connected');
        alert('Wi-Fi disconnected!');
    } else {
        wifiIcon.classList.add('connected');
        alert('Wi-Fi connected!');
    }
});

// Toggle Volume icon state
volumeIcon.addEventListener('click', () => {
    const isMuted = volumeIcon.classList.contains('muted');
    if (isMuted) {
        volumeIcon.classList.remove('muted');
        alert('Volume unmuted!');
    } else {
        volumeIcon.classList.add('muted');
        alert('Volume muted!');
    }
});
