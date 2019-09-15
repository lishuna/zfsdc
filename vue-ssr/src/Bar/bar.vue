<template>
    <div class="bar" @click="show">
        {{content}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            content: 'Bar is show'
        }
    },
    methods:{
        show(){
            alert('bar show');
        }
    }
}
</script>
<style>
    .bar{
        height: 200px;
        width: 100%;
        background: green;
    }
</style>