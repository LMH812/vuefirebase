import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import $ from 'jquery';
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap'

import firebase from 'firebase/app';
import auth from 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAA5BhCNK-BOzFTKtlE4228UKps34knbO4",
    projectId: "vuefirebase-5602f",
    storageBucket: "vuefirebase-5602f.appspot.com",
    messagingSenderId: "951054366724",
    appId: "1:951054366724:web:453a081c755acae0d31d51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  window.firebase = firebase;

  const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //   console.log(user.uid);
      store.dispatch('setUser', user)
      createApp(App).use($).use(store).use(router).mount('#app')
      unsubscribe()
  })


