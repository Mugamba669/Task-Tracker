<template>
<div class="container">
   <router-view></router-view>
  <Footer/>
</div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
   name:'App',
   components:{
     Footer,
   }

}
</script>

<style scoped>
    .container {
      display: flex;
      flex-direction: column;
        width:100%;
        height:100%;
        position:fixed;
        align-items:center;
        justify-content:center;
        }

</style>
