<template>
    <div>
        儿子1：{{value}}{{title}}
        <button @click="subChange">点击修改</button>
        <grandChild1 :value="value"></grandChild1>
    </div>
</template>
<script>
import grandChild1 from './grandChild1';

export default {
    name: 'child1',
    props: {
        title: {
            type: String,
            default: 'xxx'
        },
        value: {
           type: String,
            default: 'xxx' 
        }
    },
    methods:{
        subChange(){
            // this.$emit('input','标题3');
            // this.$emit('update:title','标题3');
            console.log(this.$parent);
            this.$parent.change('标题4');
        }
    },
    components: {
        grandChild1
    }
}
</script>
<style>

</style> 