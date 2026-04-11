importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD9MQMh563p4ijm3QFztK2lVMPCbUpL4-M",
  authDomain: "shipping-site-83cdf.firebaseapp.com",
  projectId: "shipping-site-83cdf",
  storageBucket: "shipping-site-83cdf.firebasestorage.app",
  messagingSenderId: "93937311663",
  appId: "1:93937311663:web:f5ad812005e8f20566595a"
});

const messaging = firebase.messaging();
