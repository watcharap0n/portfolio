<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <br><br>
        <h2 style="margin-bottom: 20px">
          <v-icon color="primary">mdi-emoticon-cool</v-icon>
          <strong>Work history & My project</strong></h2>
        <div style="font-family: 'Roboto Condensed', sans-serif;">
          <strong> Artificial Intelligence Developer (Research & Developer)
          </strong>
          <p>Mango Consultant Co.,Ltd</p>
          <div style="color: grey">Between August 2020 to Present (1 year 5 months)</div>
          <div style="color: grey">
            555 Rasa Tower 1, Unit 2304-1, 23rd Floor, Phaholyothin Rd, Chatuchak,
            Chatuchak, Bangkok 10900
          </div>
          <br>
          Job Description: ERP Software and project planning system
          <p>- System CRM (Chatbot) collect feedback, customers from
            platform (Facebook, LINE) and potential analyzed (Segmentation
            Customers) spam detection (Naive Bayes)</p>
          <p>- Face recognition system (CMake, DLIB) detect workers
            by taking pictures and processing them in a DLIB model
          </p>
          <p>
            - The RPA system simplifies the marketing process. Retrieve 100,000 people list from DBD Data warehouse
          </p>
          <p>
            - System for requesting quotations (PO) via LINE Developer (LINEOA), which has a microservice architecture.
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
}

</script>

