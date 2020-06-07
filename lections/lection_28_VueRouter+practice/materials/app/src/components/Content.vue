<template>
  <header class="content-container">
    Content data from store:
    {{$store.state.foo}}

    <div v-if="login">
      Welcome user name: {{ login}}
    </div>
  </header>
</template>

<script>
export default {
  name: 'Content',
  computed: {
    login() {
      return this.$store.state.login;
    }
  }
}
</script>
