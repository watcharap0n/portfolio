<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <br><br>

        <h2>
          <v-icon color="primary">mdi-palette</v-icon>
          <strong>Training history/Achievements</strong></h2>

        <v-timeline>
          <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
          >
            <template v-slot:opposite>
            <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
            ></span>
            </template>
            <div class="py-4">
              <h6 :class="`font-weight-light mb-4 ${year.color}--text`" v-text="year.topic">
              </h6>
              <div v-text="year.desc">

              </div>
            </div>
          </v-timeline-item>
        </v-timeline>


      </v-col>
      <v-col sm="6">
        <br><br>
        <h2>
          <v-icon color="primary">mdi-account-box</v-icon>
          <strong>Honors / Contact Me</strong></h2>
        <br>
        <strong>The development project before the completion has been done IoT Automated Brine Monitoring and
          Control</strong>
        <br>
        <br>
        <p>
          - Competition project of the exhibition contest information technology of the 19 (The NSC) have a certificate
          through the finals. <a href="https://drive.google.com/file/d/1kv2uU6HgIV-hyeEldoSLtDwPROAfqBDd/view">Ref</a>
        </p>
        <p>
          - BITEC contest, National Research Office participated in research Innovative invention received a
          certificate. <a href="https://drive.google.com/file/d/1bT2ZpPy5Rw93xjzNO9CDGNmq9F3G9Gxv/view">Ref</a>

          details can be found at <a href="https://iot.sau.ac.th/project2020"> LINK </a>
          Referral
        </p>

        <p>
          - AWS Technical Essentials by Amazon Web Service (AWS) <a href="https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=1HKKmDsCZ0ycbH0YfP30Cg2"></a>
        </p>

        <p>
          - AWS Cloud Practitioner Essentials Day by Amazon Web Service (AWS) <a href="https://www.aws.training/Transcript/CompletionCertificateHtml?transcriptid=M-Taw3rP80agreSoe-xUDQ2"></a>
        </p>

        <p>
          - BSI Training Academy by BSI <a href="https://drive.google.com/file/d/1uqGYEM08uMic5T58h9FqmYIt2rRSVokV/view?usp=share_link">Ref</a>
        </p>

        <p>
          - Voxy Proficiency Achievement Certificate - Intermediate <a href="https://app.voxy.com/certificates/proficiency-test/6377720f81dc4d1bb4f0642e/">Ref</a>
        </p>
        
        Advisor
        <div> - Prof. Dr. Nut Otanasup Email: nuto@sau.ac.th</div>
        <div>- Asst. Verapong Kanjanakul Tel: 089-893-4146</div>
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
                  :loading="spin"
                  @click="initSubmit"
              >
                Submit
              </v-btn>
            </v-form>
          </v-container>
        </v-card>

      </v-col>
    </v-row>
    <br><br>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          topic: 'Institute of National Electronics and Computer Technology\n' +
              'Center (NECTEC)',
          color: 'amber',
          year: 'March 2019 to March 2019',
          desc: 'Of course Camp electronics technology IoT (there are also two other diplomas).'
        },
        {
          topic: 'National Science and Technology Agency',
          color: 'cyan',
          year: 'August 2019 - March 2020',
          desc: 'Great Commission of the 19th Information Technology Contest of Thailand,\n' +
              'As a project developer who passed the final,\n' +
              'Competitive software development of the 22,\n' +
              'IoT Automated Brine Detection and Control Project.'
        },
        {
          topic: 'National Research Office Inventor \'s Day 2020',
          color: 'green',
          year: 'February 2020 to February 2020',
          desc: 'Participated in presenting research results, inventions and innovations, Automatic monitoring and control system IoT.'
        },
        {
          topic: 'Institute President of Southeast Asia University',
          color: 'pink',
          year: 'March 2020 to March 2020',
          desc: 'SAU English Test Course.'
        },
      ],
      spin: false,
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
    }
  },
  methods: {
    initSubmit() {
      let v = this.$refs.form.validate()
      if (v) {
        this.spin = true
        let data = {
          name: this.name,
          company: this.company,
          email: this.email,
          tel: this.tel,
          other: this.other
        }
        this.apiLINE(data)
      }
    },
    apiLINE(data) {
      const path = 'https://smart-home-wera.herokuapp.com/callback/portfolio/contact'
      this.$axios.post(path, data)
          .then((res) => {
            this.$swal.fire(
                'Thank you.',
                'I will contact you back.',
                'success'
            )
            this.spin = false
            this.$refs.form.reset()
                .catch((err) => {
                  this.$swal.fire(
                      'Something is wrong!',
                      'Please Contact Tel: 094-149-9661',
                      'error'
                  )
                  this.spin = false
                  console.error(err)
                  this.$refs.form.reset()
                })
          })
    }
  }
}

</script>

