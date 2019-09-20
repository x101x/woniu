<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <hr />
    <p>{{date}}</p>
    <hr />
    <p>{{money}}</p>
    <button @click="makeMoneyAction">zhangqian</button>

  </div>
</template>

<script>
import store from "@/store/index.js";
import { mapState,mapMutations,mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "hello vuex"
    };
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
    }
    
  ,
  // computed: {
  //   // date() {
  //   //   return this.$store.state.date;
  //   // }
  // }
  computed:
   {
    ...mapState(['date','money']),
    // count(){
    //   return this.$store.getters.count
    // }
    ...mapGetters(['count']),
    
  },
    // mapState(['date']),
  // computed:mapState({
  //   date:state=>state.date
  // }),
  store
};
</script>

<style scoped>
</style>
