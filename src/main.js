import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';

// 按需引入message需要单独处理
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);
app.use(router);
app.use(store).mount('#app');
