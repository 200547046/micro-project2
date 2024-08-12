import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ContactPage from './views/ContactPage.vue';



// Define the routes for the application
const routes = [
  { path: '/', component: HomePage }, // Route for the home page
  { path: '/contact', component: ContactPage } // Route for the contact page
];

// Create a new Vue Router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});


// Create and mount the Vue application
const app = createApp(App);
// Use the router instance with the Vue application
app.use(router);

// Mount the application to the DOM element with id 'app'
app.mount('#app');