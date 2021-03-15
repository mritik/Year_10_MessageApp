<!-- Use Below when Web Hosted -->
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup

importScripts('/__/firebase/8.3.0/firebase-app.js');
importScripts('/__/firebase/8.3.0/firebase-messaging.js');
<!--importScripts('/__/firebase/init.js');-->

/** 
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');
*/

  var firebaseConfig = {
    apiKey: "AIzaSyDTMXdl2eWuhP1JtLKDpukSZf0RZICNPyU",
    authDomain: "messageapptest-cbcb0.firebaseapp.com",
    projectId: "messageapptest-cbcb0",
    storageBucket: "messageapptest-cbcb0.appspot.com",
    messagingSenderId: "863538545040",
    appId: "1:863538545040:web:21f106ad9dc0932bedf315",
    measurementId: "G-GDQY5K0HCC"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BAUyIUXgF9C-uobGgRAVfj6jvHE-z3pnGR1UEjVOLDG3yWC8XICt6NYK8O42dm9AqtnC8SFnL5OMmiHiB4PqgDw');
console.log('[firebase-messaging-sw.js] Registered for background message handling');

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});