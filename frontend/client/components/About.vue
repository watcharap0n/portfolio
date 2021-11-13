<template>
  <v-container>
    <v-row>
      <v-col cols="6">
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
      <v-col cols="6">
        <br><br>
        <h2><v-icon color="primary">mdi-palette</v-icon><strong>About Me</strong></h2>
        <div>
          <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">
            Hello, I'm a AI Machine Leaning & FullStack developer & IoT Engineer from Bangkok Thailand. I hold degree of
            Computer Engineer (IoT) I have always studied and developed myself. by working in both the Backend &
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
              <strong>Framework: </strong> FastAPI, Flask, Vue.js, Node.js
            </small>
            <br>
            <small>
              <strong>AL/ML: </strong> PyTorch, DLIB, OpenCV, Google Could API Scikit-learn
            </small>
            <br>
            <small>
              <strong>Data Science/Stack: </strong> matplotlib, pandas, numpy, UCI, Data studio
            </small>
            <br>
            <small>
              <strong>DBMS: </strong> MongoDB, Firebase, NETPIE, MySQL, SQLite
            </small>
            <br>
            <small>
              <strong>Virtual Machine: </strong> Heroku, AWS (EC2), Firebase Hosting, Docker, Windows Server 2019,
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
        power: 50
      },
      {
        language: 'C',
        color: 'deep-purple lighten-3',
        power: 67
      },
      {
        language: 'C#',
        color: 'deep-purple lighten-2',
        power: 45
      },
      {
        language: 'C++',
        color: 'deep-purple lighten-1',
        power: 68
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