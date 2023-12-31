<template>
  <v-container style="font-family: 'Nunito', sans-serif;">
    <v-row style="margin-top: 180px; margin-bottom: 180px">
      <v-col sm="6">
        <h2 style="font-size: 40px" class="shadow-title">Watcharapon Weeraborirak</h2>
        <div style="color: grey; font-family: 'Roboto Condensed', sans-serif; letter-spacing: 8px">
          Fullstack Developer & AI Engineer
        </div>
        <br>
        <v-btn color="#705125" outlined rounded>
          <v-icon>mdi-pencil</v-icon>
          View Portfolio
        </v-btn>
        &nbsp;
        <v-btn color="#705125" rounded href="/Resume-eng.pdf" download="" class="text-decoration-none" dark>
          <v-icon>mdi-download</v-icon>
          Download Resume
        </v-btn>
        <div>
          <v-btn
              v-for="(v,k) in profiles"
              :key="k"
              icon
              fab
              class="text-decoration-none mx-4"
              target="_blank"
              :href="v.href"
          >
            <v-icon color="#705125" size="24px">{{ v.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col sm="6">
<!--        <v-img style="margin-top: -50px" id="image-profile" :src="require(`~/assets/images/Picture2.png`)"-->
<!--               max-height="480" class="mx-16"></v-img>-->

      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      profiles: [
        {
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/watcharapon-weeraborirak'
        },
        {
          icon: 'mdi-facebook',
          href: 'https://www.facebook.com/watcharapon.egn'
        },
        {
          icon: 'mdi-github',
          href: 'https://github.com/watcharap0n'
        },
        {
          icon: 'mdi-youtube',
          href: 'https://www.youtube.com/channel/UC_FWUbq4dPoXRBEpCfKQyDw'
        }
      ]
    }
  }
}
</script>

<style>

#image-profile {
  margin-left: 180px;
  margin-top: -90px;
}
.shadow-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
</style>