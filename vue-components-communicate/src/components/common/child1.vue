<template>
  <div id='child1'>
    {{msg}} {{msg2}}
    <button @click="fn">按钮1</button> {{a}}
       {{b}}
       <button
         @click="addCount"
         >+</button>{{count}}
  </div>
</template>

<script>
export default {
    name:'App',
    props:['msg','msg2','fn','a','b','count','addCount'],
    methods:{
        add(){
            // this.count++
            // this.$emit("addCount")
        }
    }
}
</script>

<style scoped>

</style>
