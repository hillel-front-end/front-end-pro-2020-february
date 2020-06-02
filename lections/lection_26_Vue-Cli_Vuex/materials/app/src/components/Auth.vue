<template>
  <div id="auth">
        <button @click="goTo">{{btnName}}</button>
  </div>
</template>

<script>

export default {
  name: 'Auth',
  data() {
    return {
      btnName: 'This is Auth'
    }
  },
  methods: {
      goTo() {
          console.log('go-to');
      }
  }
}
</script>

<style lang="scss">

</style>
