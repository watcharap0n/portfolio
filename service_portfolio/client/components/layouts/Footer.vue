<template>
  <v-footer
      padless
  >
    <v-card
        flat
        tile
        class="text-center"
        color="#EFE5D8"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
            :href="icon.link"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0 black--text">
        Appreciation for Your Visit:
        Thank you for exploring my portfolio. Your interest and time are greatly valued. I am constantly seeking new
        challenges, collaborations, and opportunities to grow. Whether you have a project in mind, need a consultation,
        or simply wish to share insights, I am just an email or call away.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        <strong>
          copyright &copy; 2021 built @watcharapon. all rights reserved
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/watcharapon.egn'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/watcharapon-weeraborirak'
      },
      {
        icon: 'mdi-github',
        link: 'https://github.com/watcharap0n'
      },
      {
        icon: 'mdi-youtube',
        link: 'https://www.youtube.com/channel/UC_FWUbq4dPoXRBEpCfKQyDw'
      },
    ],
  }),
}
</script>

<style>
.background-image-portfolio {
  background-image: url('/images/contact.png');
  background-repeat: no-repeat;
  background-size: cover;
//background: rgb(255, 255, 255); //background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(151, 29, 19, 1) 100%, rgba(0, 212, 255, 1) 100%);
}
</style>