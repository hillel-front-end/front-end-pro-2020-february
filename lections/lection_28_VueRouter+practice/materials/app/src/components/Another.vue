<template>
  <header class="another-container">

  </header>
</template>

<script>
export default {
  name: 'Another',
  data() {
     return {
          value: ''
     }
  },
  methods: {
      onClick() {
          this.$store.commit('changeLogin', this.value);
      }
  }
}
</script>
