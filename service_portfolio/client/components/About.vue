<template>
  <v-container>
    <v-row style="margin-top: 100px; margin-bottom: 100px">
      <v-col sm="6" cols="12">
      </v-col>
      <v-col sm="6" cols="12">
        <h2 style="font-size: 60px; color: #906F3F" class="shadow-title">
          <strong>About Me!</strong>
        </h2>
        <div>
          <div style="color: grey; font-family: 'Roboto Condensed', sans-serif;">
            <p style="color: #E56400">Hello, I'm a FullStack developer & AI Engineer from Bangkok Thailand.</p>
            <p style="color: #493315">
              I hold degree of
              Computer Engineer (IoT) I have always studied and developed myself. by working in both the Backend
              (Restful
              API) &
              Frontend Pattern Design MVC & RPA (Robotic Process Automation) & AI Machine Learning (Scikit Learn).
            </p>
            <br>
          </div>
          <div style="color: grey">
            <div style="margin-bottom: 10px; color: #E56400">Tech stack details</div>
            <small>
              <strong>Web Development Technologies</strong>
            </small>
            <small style="color: #493315">
              Server-Side Rendering (SSR) & Client-Side Rendering (CSR): Utilization of FastAPI, Flask, and Node.js for
              backend development. Proficiency in Nuxt.js, Vue.js, and React.js for frontend design and
              interaction.
            </small>

            <br>
            <small>
              <strong>Infrastructure and Deployment:</strong>
            </small>
            <small style="color: #493315">
              Extensive experience with Amazon Web Services for cloud-based solutions, skilled in managing Windows
              Server environments using IIS. Proficient in containerization with Docker, along with web serving and
              reverse proxying with Nginx.
            </small>

            <br>
            <small>
              <strong>Database Management Systems (DBMS):</strong>
            </small>
            <small style="color: #493315">
              Versatile in handling various database systems including MongoDB, Firebase, MySQL, SQLite, and PostgreSQL
              with PostGIS extension for geographic information systems.
            </small>
            <br>
            <small>
              <strong>Artificial Intelligence and Machine Learning:</strong>
            </small>
            <small style="color: #493315">
              Competent in AI/ML technologies, using tools like Scikit-learn for machine learning algorithms, OpenCV for
              computer vision, and leveraging Google Cloud API. Familiar with the use of CMake for cross-platform
              software management.
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

<style>
.shadow-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>