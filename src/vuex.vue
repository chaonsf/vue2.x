<template>
    <div id="app">
      <h1>Hello Vuex</h1>
      <p>
        <button @click="$store.commit('jia',10)">+</button>
        <span>{{$store.state.count}}-{{count}}</span>
        <button @click="jian">-</button>
      </p>

    </div>
</template>
<script>
  import { mapState,mapMutations,mapGetters } from "vuex"
  export default{
  name:"app",
  computed:{
    ...mapState([
        "count"
    ]),
      ...mapGetters([
        "count"
      ])
     },
    methods:{
      ...mapMutations([
         "jia",
        "jian"
      ])
    }
  }
  /*这样的话就可以直接用count代替$store.state.count,方法也是一样*/
  </script>
