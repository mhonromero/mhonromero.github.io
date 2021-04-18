<template>
<div class="container" id="app">
    <div class="col-lg-12">
      <b-jumbotron
        header="Agile Software Development"
        lead="Values and Principles"
      >
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Values" active>
              <Values/>
            </b-tab>
            <b-tab title="Principles">
              <Principles/>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import Values from './components/Values.vue'
import Principles from './components/Principles.vue'

export default {
  name: 'app',
  components:{
    Values,
    Principles
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
