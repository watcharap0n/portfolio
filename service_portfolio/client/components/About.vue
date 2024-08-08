<template>
  <v-container>
    <v-row class="my-12">
      <v-col sm="6" cols="12">
        <v-img
          class="mx-16 mt-6"
          id="image-profile"
          :src="require(`~/assets/images/about.png`)"
          max-height="600"
        ></v-img>
      </v-col>
      <v-col sm="6" cols="12">
        <h2 class="shadow-title text-6xl text-brown-dark">
          <strong>About Me!</strong>
        </h2>
        <div class="text-grey font-roboto-condensed">
          <p class="text-orange" style="font-size: 1.2rem; font-weight: 600;">Hello! I’m an AI Engineer and Full-Stack Developer based in Bangkok, Thailand</p>
          <p class="text-brown-light">
            With a solid background in AWS service integration and a Bachelor’s degree in Computer Engineering from Southeast Asia University, my professional journey has equipped me with robust expertise in both AI engineering and full-stack development.
          </p>
          <br>
          <h3 class="text-orange mb-2">What I Do</h3>
          <p class="text-brown-light">
            Currently, I’m focused on expanding my skills in Full Stack Development and DevOps. I am proficient in source control systems like GitHub, GitLab, and Bitbucket, and my technical toolkit includes:
          </p>
          <br>
          <h3 class="text-orange mb-2">Tech Stacks</h3>
          <small>
            <strong>SSR/CSR:</strong> FastAPI, Flask, Node.js, Nuxt.js, Next.js
          </small>
          <br>
          <small>
            <strong>CI/CD:</strong> CodePipeline, GitLab CI, GitHub Actions
          </small>
          <br>
          <small>
            <strong>DBMS:</strong> MongoDB, SQL, PostgreSQL
          </small>
          <br>
          <small>
            <strong>Cloud Infrastructure:</strong> AWS (Strong), Google Cloud, Windows Server (IIS)
          </small>
          <br>
          <small>
            <strong>Skills:</strong> Advanced proficiency in Vim and a typing speed averaging 60 WPM
          </small>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
      { language: 'Python', color: '#FFEB3B', power: 84 },
      { language: 'Arduino', color: 'teal lighten-3', power: 80 },
      { language: 'Javascript (Vue.js)', color: 'amber', power: 80 },
      { language: 'Dart', color: 'primary', power: 45 },
      { language: 'C', color: 'deep-purple lighten-3', power: 65 },
      { language: 'C#', color: 'deep-purple lighten-2', power: 45 },
      { language: 'C++', color: 'deep-purple lighten-1', power: 65 },
      { language: 'Java', color: 'red darken-1', power: 60 }
    ]
  }),
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
  margin-top: 100px;
  margin-bottom: 100px;
}
.mt-6 {
  margin-top: 50px;
}
</style>
