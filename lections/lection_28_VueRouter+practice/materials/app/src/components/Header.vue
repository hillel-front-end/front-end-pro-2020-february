<template>
  <header class="header-container">
  HEADER data from store:
    {{$store.state.foo}}
  </header>
</template>

<script>
export default {
  name: 'Header',
  created() {
    console.log(this.$store.state, 'this');
  }
}
</script>
