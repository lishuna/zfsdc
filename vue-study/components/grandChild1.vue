<template>
    <div>
        孙子1：{{value}}
        <button @click="subChange">点击修改</button>
        <grandChild2 :value="value"></grandChild2>
    </div>
</template>
<script>
import grandChild2  from './grandChild2';

export default {
    name: 'grandChild1',
    props: {
        value: {
           type: String,
            default: 'xxx' 
        }
    },
    methods:{
        subChange(){
            console.log(this.$parent);
            this.$parent.$emit('input','标题4');
        }
    },
    components: {
        grandChild2
    }
}
</script>
<style>

</style> 