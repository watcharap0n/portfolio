<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <h2 style="margin-bottom: 20px">
          <v-icon color="primary">mdi-emoticon-cool</v-icon>
          <strong>Contact Me</strong></h2>
        <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">
          Portfolio from the time of study to the present, by giving a preliminary example. You can find details on both
          LinkedIn & Github & Website :<a href="https://iot.sau.ac.th/project2020">
          https://iot.sau.ac.th/project2020 </a>
          and you can leave your contact information below.
        </div>
        <br>
        <v-card>
          <v-container>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  dense
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
              ></v-text-field>

              <v-text-field
                  dense
                  v-model="company"
                  :rules="nameRules"
                  label="Company"
                  required
              ></v-text-field>

              <v-text-field
                  dense
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
              ></v-text-field>

              <v-text-field
                  dense
                  v-model="tel"
                  :rules="nameRules"
                  label="Tel"
                  required
              ></v-text-field>

              <v-textarea
                  dense
                  name="input-7-1"
                  label="Additional"
                  v-model="other"
              ></v-textarea>

              <v-spacer></v-spacer>
              <v-btn
                  small
                  :disabled="!valid"
                  color="primary"
                  class="mr-4"
                  @click="initSubmit"
              >
                Submit
              </v-btn>
            </v-form>
          </v-container>
        </v-card>

      </v-col>
      <v-col sm="6">
        <h2 style="margin-bottom: 20px">
          <v-icon color="primary">mdi-emoticon-cool</v-icon>
          <strong>PortFolio</strong></h2>
        <v-carousel
            cycle
            height="500"
            class="overflow-y-auto"
            hide-delimiter-background
            show-arrows-on-hover
        >
          <template v-slot:prev="{ on, attrs }">
            <v-btn
                x-small
                rounded
                color="primary"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-arrow-left</v-icon>
              Previous slide
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn
                x-small
                rounded
                color="primary"
                v-bind="attrs"
                v-on="on"
            >
              Next slide
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
          >
            <div class="display-3">
            </div>
          </v-carousel-item>
        </v-carousel>

        <br>
        <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">
          <div style="margin-bottom: 20px"><strong>Download pdf.</strong></div>
          <v-row style="margin-left: 5px">
            <v-btn class="text-decoration-none" color="info" x-small rounded href="/face_rec.pdf" download="">
              <v-icon x-small>mdi-download</v-icon>
              Face Recognition
            </v-btn>
            &nbsp;
            <v-btn class="text-decoration-none" color="info" x-small rounded href="/chatbot.pdf" download="">
              <v-icon x-small>mdi-download</v-icon>
              ChatBot
            </v-btn>
            &nbsp;
            <v-btn class="text-decoration-none" color="info" x-small rounded href="/rpa.pdf" download="">
              <v-icon x-small>mdi-download</v-icon>
              RPA
            </v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
      company: '',
      email: '',
      tel: '',
      other: '',
      nameRules: [
        v => !!v || 'is required!',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      items: [
        {
          src: require('~/assets/images/cert2.jpg')
        },
        {
          src: require('~/assets/images/cert3.jpg')
        },
        {
          src: require('~/assets/images/cert4.jpg')
        },
        {
          src: require('~/assets/images/bitec3.jpg')
        },
        {
          src: require('~/assets/images/bitec2.jpg')
        },
        {
          src: require('~/assets/images/bitec1.jpg')
        },
        {
          src: require('~/assets/images/port13.png')
        },
        {
          src: require('~/assets/images/port2.jpg')
        },
        {
          src: require('~/assets/images/port1.jpg')
        },
        {
          src: require('~/assets/images/port7.jpg')
        },
        {
          src: require('~/assets/images/new6.png')
        },
        {
          src: require('~/assets/images/port4.jpg')
        },
        {
          src: require('~/assets/images/new7.png')
        },
        {
          src: require('~/assets/images/new8.png')
        },
        {
          src: require('~/assets/images/ocr.png')
        },
        {
          src: require('~/assets/images/new2.png')
        },
        {
          src: require('~/assets/images/new3.png')
        },
        {
          src: require('~/assets/images/new1.png')
        },
        {
          src: require('~/assets/images/new5.png')
        },
      ],
    }
  },
  methods: {
    initSubmit() {
      let v = this.$refs.form.validate()
      if (v) {
        console.log(v)
        this.$swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
      }
    }
  }
}

</script>

