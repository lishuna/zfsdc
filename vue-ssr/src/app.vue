<template>
    <div class="main">
        <Foo></Foo>
        <Bar></Bar>
    </div>
</template>

<script>
import Bar from './Bar/bar.vue';
import Foo from './Foo/Foo.vue';

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
    },
    components:{
        Bar,Foo
    }
}
</script>
<style>
    .main{
        width: 100%;
    }
</style>