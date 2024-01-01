<template>
  <v-app>
    <v-card flat class="overflow-hidden">
      <v-app-bar
          absolute
          color="transparent"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
      >

        <v-avatar style="margin-right: 10px">
          <img :src="require('~/assets/images/kanelogo.png')">
        </v-avatar>

        <v-spacer></v-spacer>

        <v-btn v-for="(v, k) in navBars"
               :key="k"
               text
               color="#705125"
               @click="scrollNav(v)"
        >
          {{ v }}

        </v-btn>

      </v-app-bar>

      <v-responsive
          id="scrolling-techniques-7"
      >

        <Index :scrollId="scrollId"/>

      </v-responsive>


    </v-card>

    <Footer/>


  </v-app>
</template>

<script>
import Index from "../pages/index";
import Footer from "../components/layouts/Footer";

export default {
  components: {Footer, Index},
  data: () => ({
    scrollId: '',
    navBars: ['Home', 'About', 'Portfolio', 'Contact']
  }),
  methods: {
    scrollNav(val) {
      this.scrollId = val
    }
  }
}

</script>

<style scoped>


</style>