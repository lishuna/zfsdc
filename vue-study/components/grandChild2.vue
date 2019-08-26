<template>
    <div>
        孙子2：{{value}}
        <button @click="subChange">点击修改</button>
    </div>
</template>
<script>
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
            this.$dispatch('input','标题5');
        }
    }
}
</script>
<style>

</style> 