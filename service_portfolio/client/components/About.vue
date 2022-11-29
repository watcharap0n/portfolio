<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <br><br>

        <h2 style="margin-bottom: 20px">
          <v-icon color="primary">mdi-xml</v-icon>
          <strong>Programing Skills</strong></h2>
        <div
            style="color: grey; font-family: 'Roboto Condensed', sans-serif;"
            v-for="(v,k) in skills"
            :key="k"
        >
          <v-row>
            {{ v.language }}
            <v-progress-linear
                buffer-value="0"
                stream
                :value="v.power"
                :color="v.color"
                height="10"
            ></v-progress-linear>
          </v-row>
          <br>
        </div>

      </v-col>
      <v-col sm="6">
        <br><br>
        <h2><v-icon color="primary">mdi-palette</v-icon><strong>About Me</strong></h2>
        <div>
          <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">
            Hello, I'm a AI Machine Leaning & FullStack developer & IoT Engineer from Bangkok Thailand. I hold degree of
            Computer Engineer (IoT) I have always studied and developed myself. by working in both the Backend (Restful API) &
            Frontend Pattern Design MVC & RPA (Robotic Process Automation) & AI Machine Learning (Scikit Learn).
            <br>Ref:
            <a href="https://www.linkedin.com/in/watcharapon-weeraborirak/">LinkedIn</a>&nbsp;&
            <a
                href="https://github.com/watcharap0n">Github
            </a>
            &
            <a href="https://iot.sau.ac.th/project2020">IoT</a>
          </div>
          <br>
          <div style="color: grey">
            <div style="margin-bottom: 10px">Structure coding about me</div>
            <small>
              <strong>SSR/CSR: </strong> FastAPI, Flask, Node.js, Nuxt.js, Vue.js
            </small>
            <br>
            <small>
              <strong>Infrastructure: </strong> AWS (EC2), Firebase Hosting, Windows Server (IIS), Docker, K8s, Nginx
            </small>
            <br>
            <small>
              <strong>DBMS: </strong> MongoDB, Firebase, MySQL, SQLite
            </small>
            <br>
            <small>
              <strong>AL/ML: </strong> Scikit-learn, OpenCV, Google Could API, CMake
            </small>
            <br>
            <small>
              <strong>My favorites algorithm</strong> KNN, Naive bay, LogisticRegression, KMeans,
            </small>
            <br>
            <small>
              <strong>Additional: </strong> Vim, Typing 60 WPM
            </small>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        language: 'Python',
        color: '#FFEB3B',
        power: 84,
      },
      {
        language: 'Arduino',
        color: 'teal lighten-3',
        power: 80,
      },
      {
        language: 'Javascript, (Vue.js)',
        color: 'amber',
        power: 80
      },
      {
        language: 'Dart',
        color: 'primary',
        power: 45
      },
      {
        language: 'C',
        color: 'deep-purple lighten-3',
        power: 65
      },
      {
        language: 'C#',
        color: 'deep-purple lighten-2',
        power: 45
      },
      {
        language: 'C++',
        color: 'deep-purple lighten-1',
        power: 65
      },
      {
        language: 'JAVA',
        color: 'red darken-1',
        power: 60
      }
    ]
  }),
}
</script>