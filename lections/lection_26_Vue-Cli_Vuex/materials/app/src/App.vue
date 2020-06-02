<template>
  <div id="app">
    <span class="title">{{foo}}</span>

    <app-auth />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Auth from './components/Auth';

export default {
  name: 'App',
  components: {
    HelloWorld,
    appAuth: Auth
  },
  data() {
    return {
      foo: 1236666
    }
  }
}
</script>

<style lang="scss">
.title {
  font-size: 40px;
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
