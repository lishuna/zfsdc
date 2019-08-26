<template>
  <div class="wrapper">
      <template v-for="(item,index) in data">
          <slot :item="item"></slot>
      </template>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
    props:{
        data: Array
    },
    data(){
        return {
            title: '列表111'
        }
    },
    mounted(){
        console.log(this.data);
    } ,
    methods: {
        render(h,data){
           
        }
    },
    components: {
        
    }
}
</script>

<style>

</style>