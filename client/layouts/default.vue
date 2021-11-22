<template>
  <div>
    <v-app style="font-family: 'Ubuntu', sans-serif;">
      <v-card flat class="overflow-hidden">
        <v-app-bar
            absolute
            color="white"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
        >

          <v-app-bar-title>
            <v-icon
                color="primary"
            >
              mdi-alpha-p-box
            </v-icon>
            <strong>
              PORTFOLIO
            </strong>

            <br>
            <small>Development</small>
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn v-for="(v, k) in navBars"
                 :key="k"
                 text
                 color="primary"
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
  </div>
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