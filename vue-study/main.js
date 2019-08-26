
import Vue from 'vue';
import App from './App.vue';

// 向上传递 从子孙组件派发事件给父级 
Vue.prototype.$dispatch = function(eventName,val){
    let parent = this.$parent;
    while(parent){
        parent.$emit(eventName,val);
        parent = parent.$parent;
    }
}
// 向下通知
Vue.prototype.$boardcast = function(eventName,val){
    const boardcast = (children)=>{
        children.forEach((child)=>{
            child.$emit(eventName,val);
            if(child.$children){
                boardcast(child.$children);
            }
        })
    }
   boardcast(this.$children); 
}
/* eslint-disable */
const vm = new Vue({
    el: '#app',
    render: h=>h(App)
});