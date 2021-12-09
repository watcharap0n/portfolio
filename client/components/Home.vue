<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <br><br>
        <h2><strong>Watcharapon Weeraborirak </strong></h2>
        <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">A I &nbsp; D E V E L O P E R &nbsp; A N D
          &nbsp; F U L L S T A C K &nbsp; D E V E L O P E R
        </div>
        <br>
        <v-btn color="primary" outlined rounded>
          <v-icon>mdi-pencil</v-icon>
          View Portfolio
        </v-btn>
        &nbsp;
        <v-btn color="primary" rounded href="/Resume-eng.pdf" download="" class="text-decoration-none">
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
            <v-icon color="primary" size="24px">{{ v.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col  sm="6">
        <v-img style="margin-top: -50px" id="image-profile" :src="require(`~/assets/images/Picture1.png`)"  max-height="480" max-width="440" class="mx-16"></v-img>

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

</style>