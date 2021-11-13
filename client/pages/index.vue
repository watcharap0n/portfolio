<template>

  <div>

    <div ref="Home" class="home-profile">
      <br><br><br><br>
      <Home/>
    </div>

    <div ref="About">
      <About/>
    </div>


    <div ref="Portfolio" class="port-profile">
      <Portfolio/>
    </div>

<!--    <div ref="Contact">-->
<!--      <Contact/>-->
<!--    </div>-->

  </div>

</template>

<script>
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Home from "../components/Home";

export default {
  components: {Portfolio, About, Home, Contact},
  props: ['scrollId'],
  data() {
    return {}
  },
  watch: {
    scrollId(val) {
      let element = this.$refs[val];
      console.log(element)
      let top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>

.port-profile{
  height: 800px;
  background: #deebff;
}

.home-profile {
  height: 500px;
  background: #deebff;
}
</style>