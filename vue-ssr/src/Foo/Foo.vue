<template>
    <div class="foo" @click="show">
        {{content}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            content: 'Foo is show'
        }
    },
    methods:{
        show(){
            alert('foo show');
        }
    }
}
</script>
<style>
    .foo{
        height: 200px;
        width: 100%;
        background: red;
    }
</style>