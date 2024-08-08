<template>
  <v-container>
    <v-row class="my-12">
      <v-col sm="6" cols="12">
        <h2 class="shadow-title text-6xl text-brown-dark">
          <strong>My Career Path</strong>
        </h2>
        <br>
        <div class="font-roboto-condensed">
          <span class="text-orange text-xl font-bold">
            AI Engineer at THAICOM PLC (Formerly Full-Stack Developer)
          </span>
          <small class="block text-grey mt-2 ml-2">
            August 2022 - Present
          </small>
          <small class="block text-grey ml-2">
            349 SJ Infinite 1 Business Complex, 28th Floor Vibhavadi Rangsit Rd, Chatuchak, Bangkok 10900
          </small>
          <br>
          <div class="text-brown-light mt-4 ml-4">
            <strong>Key Achievements:</strong>
            <p>- AI Engineer</p>
            <p>- Managed geospatial data and deployed AI models using AWS</p>
            <v-btn color="#705125" dark rounded @click="showMoreThaicom">
              <v-icon left>
                mdi-emoticon-cool
              </v-icon>
              More Details</v-btn>
          </div>

          <v-divider class="my-6"></v-divider>

          <span class="text-orange text-xl font-bold">
            AI Developer at Mango Consultant Co., Ltd
          </span>
          <small class="block text-grey mt-2 ml-2">
            August 2020 - August 2022
          </small>
          <small class="block text-grey ml-2">
            555 Rasa Tower 1, Unit 2304-1, 23rd Floor, Phaholyothin Rd, Chatuchak, Bangkok 10900
          </small>
          <br>
          <div class="text-brown-light mt-4 ml-4">
            <strong>Key Achievements:</strong>
            <p>- Developed Face Recognition System and RPA for marketing</p>
            <p>- Created microservice architecture for LINE Developer system</p>
            <v-btn color="#705125" dark rounded @click="showMoreMango">
              <v-icon left>
                mdi-emoticon-cool
              </v-icon>
              More Details
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col sm="6" cols="12">
        <br><br>
        <h2 class="mb-4">
          <v-icon color="primary">mdi-emoticon-cool</v-icon>
          <strong>Portfolio</strong>
        </h2>
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
            <div class="display-3"></div>
          </v-carousel-item>
        </v-carousel>

        <br>
        <div class="text-grey font-roboto-condensed">
          <div class="mb-4"><strong>Download PDF</strong></div>
          <v-row class="ml-1">
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

    <v-dialog v-model="dialogThaicom" max-width="600px">
      <v-card>
        <v-card-title class="headline">Thaicom Details</v-card-title>
        <v-card-text>
          <p><strong>Data Ingestion and Storage:</strong> Orchestrated the acquisition, cleaning, and structuring of geospatial data formats, including .tif, .geojson, and .mbtiles. Implemented efficient storage solutions using RDS PostgreSQL (PostGIS) for vector data and S3 or STAC for raster data.</p>
          <p><strong>AI and Data Model Deployment:</strong> Deployed several critical models, such as disaster models (for droughts and floods) using AWS CloudFormation and CDK for infrastructure management. Managed ETL processes using Glue Jobs and PySpark, handling data preprocessing and postprocessing efficiently.</p>
          <p><strong>API Gateway Integration:</strong> Engineered custom microservices for data ingestion and model deployment using various AWS services. These solutions were integrated with API Gateway, significantly streamlining data access for various applications and stakeholders.</p>
          <p><strong>Collaboration and Professional Growth:</strong> Collaborated closely with the modeling team to define input and output data requirements and optimize deployment schedules. Enhanced expertise in AWS technologies and data management, contributing significantly to project success at Thaicom.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialogThaicom = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogMango" max-width="600px">
      <v-card>
        <v-card-title class="headline">Mango Consultant Details</v-card-title>
        <v-card-text>
          <p><strong>Face Recognition System:</strong> Collaborated on a system for worker identification using image processing techniques with CMake and DLIB.</p>
          <p><strong>RPA System for Marketing:</strong> Designed and developed a Robotic Process Automation system to streamline marketing processes by efficiently retrieving and processing data from a 100,000-record database housed in the DBD Data Warehouse.</p>
          <p><strong>LINE Developer System Microservices Architecture:</strong> Created a microservice architecture that allows users to request quotations via the LINE Messaging API.</p>
          <p>Contributed to CRM, face recognition, RPA, and microservices projects, enhancing my proficiency in delivering innovative solutions.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialogMango = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialogThaicom: false,
      dialogMango: false,
      items: [
        { src: require('~/assets/images/cert2.jpg') },
        { src: require('~/assets/images/cert3.jpg') },
        { src: require('~/assets/images/cert4.jpg') },
        { src: require('~/assets/images/bitec3.jpg') },
        { src: require('~/assets/images/bitec2.jpg') },
        { src: require('~/assets/images/port2.jpg') },
        { src: require('~/assets/images/port1.jpg') },
        { src: require('~/assets/images/port7.jpg') },
        { src: require('~/assets/images/new6.png') },
        { src: require('~/assets/images/port4.jpg') },
        { src: require('~/assets/images/new7.png') },
        { src: require('~/assets/images/new8.png') },
        { src: require('~/assets/images/ocr.png') },
        { src: require('~/assets/images/flow_chatbot.png') },
        { src: require('~/assets/images/new3.png') },
        { src: require('~/assets/images/new1.png') },
        { src: require('~/assets/images/new5.png') },
      ],
    }
  },
  methods: {
    showMoreThaicom() {
      this.dialogThaicom = true;
    },
    showMoreMango() {
      this.dialogMango = true;
    },
  },
}
</script>

<style>
.shadow-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.text-brown-dark {
  color: #906F3F;
}
.text-brown-light {
  color: #493315;
}
.text-orange {
  color: #E56400;
}
.text-grey {
  color: grey;
}
.font-roboto-condensed {
  font-family: 'Roboto Condensed', sans-serif;
}
.my-12 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
