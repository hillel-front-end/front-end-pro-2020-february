<template>
  <header class="another-container">
        <button @click="onClick">auth</button>
        <input type="text" v-model="value">
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
