<template>
  <div id="app">
    <div>
      <router-link to="/" class="indent">HOME</router-link>
      <router-link to="/about" class="indent">About</router-link>
      <router-link to="/contacts" class="indent">Contacts</router-link>
    </div>
    <router-view/>
  </div>
</template>


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

