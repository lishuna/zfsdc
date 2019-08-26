<template>
    <div>
        <div>父节点：{{title}}</div>
        <!-- 父子组件传值方法： -->
        <!-- 1. 这里有个下面语法糖写法v-model 子组件里通过$emit('input')传出值 -->
        <!-- <child1 :value="title" @input="change"></child1> -->
        <!-- 2.sync是为了实现prop双向绑定，需要子组件通过$emit('update:对应传入prop名',xxx)去更新父组件的值 
        https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6 -->
        <!-- <child1 :title.sync="title"></child1> -->
        <!-- 父组件和子孙组件传值可以在孙组件里使用this.$parent.emit('input') -->
        <child1 :value="title" @input="change" :title="title"></child1>
        <button @click="change">父级修改</button>
        
    </div>
</template>
<script>
import child1 from './child1';

export default {
    name: 'parent',
    data(){
        return {
            title: '标题1'
        }
    },
    mounted(){

    },
    methods: {
        change(val){
            this.title='标题6';
            this.$boardcast('input',this.title)
        }
    },
    components: {
        child1
    }
}
</script>
<style>

</style> 