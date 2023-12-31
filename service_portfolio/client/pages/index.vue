<template>

  <div>
    <div ref="Home" class="background-image-home">
      <Home/>
    </div>

    <div ref="About" class="background-image-about" v-if="$vuetify.breakpoint.smAndUp">
      <About/>
    </div>


    <div ref="Portfolio" class="background-image-portfolio">
      <Portfolio/>
    </div>

    <div ref="Contact">
      <Contact/>
    </div>

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
      element.scrollIntoView({behavior: "smooth"})
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

.background-image-home {
  background-image: url('/images/home.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
//background: rgb(255, 255, 255); //background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(151, 29, 19, 1) 100%, rgba(0, 212, 255, 1) 100%);
}

.background-image-about {
  background-image: url('/images/about.png');
  background-repeat: no-repeat;
  background-size: cover;
//background: rgb(255, 255, 255); //background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(151, 29, 19, 1) 100%, rgba(0, 212, 255, 1) 100%);
}

.background-image-portfolio {
  background-image: url('/images/portfolio.png');
  background-repeat: no-repeat;
  background-size: cover;
//background: rgb(255, 255, 255); //background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(151, 29, 19, 1) 100%, rgba(0, 212, 255, 1) 100%);
}
</style>