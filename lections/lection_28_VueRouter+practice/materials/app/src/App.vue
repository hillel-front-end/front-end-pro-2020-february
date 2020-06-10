<template>
  <div id="app">
    <router-view/>
    <Registration />
  </div>
</template>

<script>
  import Registration from '@/components/Registration';
  export default  {
    components: {
      Registration
    },
  }

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.indent {
  margin-right: 10px;
}

.router-link-exact-active {
  border-bottom: 1px solid red;
  padding: 10px;
  display: inline-block;
}
</style>

