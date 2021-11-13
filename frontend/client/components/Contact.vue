<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <br><br>
      </v-col>
      <v-col cols="6">
        <br><br>
        <h2>
          <v-icon color="primary">mdi-account-box</v-icon>
          <strong>Contact Me</strong></h2>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              required
          ></v-text-field>

          <v-text-field
              v-model="company"
              :rules="nameRules"
              label="Company"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              :rules="nameRules"
              label="Email"
              required
          ></v-text-field>

          <v-text-field
              v-model="tel"
              :rules="nameRules"
              label="Tel"
              required
          ></v-text-field>

          <v-textarea
              name="input-7-1"
              label="Additional"
              v-model="other"
          ></v-textarea>

          <v-spacer></v-spacer>
          <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="initSubmit"
          >
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <br><br>
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
    }
  },
  methods: {
    initSubmit() {
      let v = this.$refs.form.validate()
      if (v){
        console.log(v)
      }
    }
  }
}

</script>

