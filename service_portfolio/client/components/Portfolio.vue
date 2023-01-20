<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <br><br>
        <h2 style="margin-bottom: 20px">
          <v-icon color="primary">mdi-emoticon-cool</v-icon>
          <strong>Work histories & My projects</strong></h2>
        <div style="font-family: 'Roboto Condensed', sans-serif;">
          <v-divider></v-divider>

          <strong>
            Artificial Intelligence Developer @ Mango Consultant Co.,Ltd
          </strong>
          <div style="margin-left: 10px">
            <div style="color: grey; margin-top: 10px">Between August 2020 to August 2022 (2 year)</div>
            <div style="color: grey">
              555 Rasa Tower 1, Unit 2304-1, 23rd Floor, Phaholyothin Rd, Chatuchak,
              Chatuchak, Bangkok 10900
            </div>
          </div>

          <br>

          <strong>Job Description</strong>: ERP Software and project planning system
          <div style="margin-top: 10px; margin-left: 10px">
            <p>- System CRM (Platform Chatbot) Build chatbot my self, collect feedback customers from
              platform (Facebook, LINE) and potential analyzed segmentation
              customers spam detection (Naive Bayes)</p>
            <p>- Face recognition system (CMake, DLIB) detect workers
              by taking pictures and processing them in a DLIB model
            </p>
          </div>
          <v-divider></v-divider>

          <strong>
            Full Stack Developer @ THAICOM PUBLIC COMPANY LIMITED
          </strong>

          <div style="margin-top: 10px; margin-left: 10px">
            <div style="color: grey">Between August 2022 to Present</div>
            <div style="color: grey">
              349 SJ Infinite 1 Business Complex, 28th Floor Vibhavadi Rangsit Rd, Chatuchak,
              Chatuchak, Bangkok 10900
            </div>
          </div>

          <br>

          <strong>Job Description</strong>: Digital signature as a service
          <div style="margin-top: 10px; margin-left: 10px">
            <p>
              - Digital signature we provide b2b as a services such as both E-Timestamp and E-Signature, My
              responsibilities are develop and design backend, frontend and vulnerability service according to best
              practice
            </p>
          </div>
          <v-divider></v-divider>

          <p>
            - <strong>Software development methodologies </strong> : I'm strong programing langauge base python both web
            framework or machine framework according to pattern OOP, MVC,
            PEP-8 and javascript framework vue, nuxt and
            Deployment design service with nginx k8s, docker container on AWS EC2, google cloud firebase
          </p>

        </div>
        <br>


      </v-col>
      <v-col sm="6">
        <br><br>
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
          src: require('~/assets/images/flow_chatbot.png')
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
}

</script>

