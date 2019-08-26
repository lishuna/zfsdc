<template>
  <div class="wrapper">
    hello word
    <parent></parent>
    <List :data="['香蕉','苹果','橙子']">
      <!-- 普通插槽是在父组件中执行 -->
      <!-- 子组件中执行的是 作用域插槽 -->
      <template v-slot="{item}">
        <li>{{item}}</li>
      </template>
    </List>
  </div>
</template>

<script>
import parent from './components/parent';
import List from './components/render/List.vue';

export default {
  name: 'App',
  data() {
    return {
      title: '列表111'
    }
  },
  methods: {
    render(h, data) {

    }
  },
  components: {
    parent,
    List
  }
}
</script>

<style>
</style>