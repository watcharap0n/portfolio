<template>

  <div>

    <div ref="Home">
      <v-card color="#deebff" flat class="overflow-hidden">
        <br><br><br><br>
        <Home/>
      </v-card>
    </div>

    <div ref="About">
      <v-card flat class="overflow-auto">
        <About/>
        <br><br><br>
      </v-card>
    </div>


    <div ref="Portfolio">
      <v-card color="#deebff" flat class="overflow-auto">
        <Portfolio/>
        <br><br><br>
      </v-card>
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
      console.log(val)
      let element = this.$refs[val];
      console.log(element)
      let top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>

<style scoped>

.port-profile {
  height: 800px;
  background: #deebff;
}

.home-profile {
  height: 500px;
  background: #deebff;
}
</style>