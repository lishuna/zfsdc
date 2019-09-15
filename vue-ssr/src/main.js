import Vue from 'vue';
import App from './app.vue'

export function createApp(context){
    const vm = new Vue({
        render: h=>h(App)
    });
    return vm;
}


