<template>
  <v-container>
    <v-row style="margin-top: 50px; margin-bottom: 50px">
      <v-col sm="6" cols="12">
        <h2 style="font-size: 50px; color: #906F3F" class="shadow-title">
          <strong>My career path</strong>
        </h2>
        <br>
        <div style="font-family: 'Roboto Condensed', sans-serif;">

          <span style="color: #E56400">
            AI Developer @Mango Consultant Co.,Ltd
          </span>

          <small style="margin-left: 10px">
            <div style="color: grey;">Between August 2020 to August 2022 (2 year)</div>
            <div style="color: grey">
              555 Rasa Tower 1, Unit 2304-1, 23rd Floor, Phaholyothin Rd, Chatuchak,
              Chatuchak, Bangkok 10900
            </div>
          </small>
          <br>

          <div>
            <small>
              <strong>Job Description:</strong>
            </small>
            <small>
              ERP Software and project planning system
            </small>
          </div>

          <small style="margin-top: 10px; margin-left: 10px; color: #493315">
            <span>
              - Collaborated on a Face Recognition System using CMake and DLIB for worker identification through image processing.
            </span>
            <br>
            <span>
              - Developed an RPA system for marketing, streamlining processes by retrieving and processing data from a database with 100,000 records stored in the DBD Data Warehouse.
            </span>
            <br>
            <span>
              - Designed a microservice architecture for a LINE Developer system, enabling users to request quotations (PO) using the LINE Messaging API.
            </span>
            <br>
            <span>
              - This role enriched my expertise in diverse technologies, from Fullstack development to AI solutions. I actively contributed to CRM, face recognition, RPA, and microservices projects, enhancing my proficiency in delivering innovative solutions.
            </span>
          </small>
          <v-divider></v-divider>

          <br>

          <span style="color: #E56400">
            Fullstack developer & AI Engineer @THAICOM PLC
          </span>

          <small style="margin-top: 10px; margin-left: 10px">
            <div style="color: grey">Between August 2022 to Present</div>
            <div style="color: grey">
              349 SJ Infinite 1 Business Complex, 28th Floor Vibhavadi Rangsit Rd, Chatuchak,
              Chatuchak, Bangkok 10900
            </div>
          </small>

          <br>

          <div>
            <small>
              <strong>Job Description:</strong>
            </small>
            <small>
              Satellite and space technology
            </small>
          </div>

          <small style="margin-top: 10px; margin-left: 10px; color: #493315">
            <span>
              - Data Management: Handling the acquisition, cleansing, and storage of geospatial data in various formats.
              Automated Data Retrieval: Implementing cron jobs and AWS Lambda for automated data transfer to storage systems.
              STAC Management: Leading the integration of data into STAC servers for efficient organization and retrieval.
              Data Categorization: Organizing data into collections based on specific criteria for ease of use.
              API Integration: Developing solutions for data extraction and presentation via API Gateway endpoints.
            </span>
          </small>

        </div>
        <br>


      </v-col>
      <v-col sm="6" cols="12">
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
                color="#E56400"
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
                color="#E56400"
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
          <div style="margin-bottom: 20px"><strong>Download PDF</strong></div>
          <v-row style="margin-left: 5px">
            <v-btn dark class="text-decoration-none" color="#E56400" x-small rounded href="/face_rec.pdf" download="">
              <v-icon x-small>mdi-download</v-icon>
              Face Recognition
            </v-btn>
            &nbsp;
            <v-btn dark class="text-decoration-none" color="#E56400" x-small rounded href="/chatbot.pdf" download="">
              <v-icon x-small>mdi-download</v-icon>
              ChatBot
            </v-btn>
            &nbsp;
            <v-btn dark class="text-decoration-none" color="#E56400" x-small rounded href="/rpa.pdf" download="">
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

<style>
.shadow-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>

