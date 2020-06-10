<template>
  <div class="auth">
     <label>
        Login:
        <input type="text" name="login" v-model="requestPayload.login">
     </label>

    <label>
        Password:
        <input type="text" name="password" v-model="requestPayload.password">
     </label>

     <button @click.prevent="signIn()">Sign in</button>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Auth',
  data() {
      return {
          requestPayload: {
              login: '',
              password: ''
          }
      }
  },
  computed: {
      ...mapGetters(['GET_IS_AUTH'])
  },
  methods: {
    signIn() {
      this.$store.dispatch()
    },
    ...mapActions(['asyncGetAuthFromApi'])
  },
  watch: {
    GET_IS_AUTH(isAuth) {
      if(isAuth) {
        this.$router.push('/home');
      }
    }
  },
}
</script>

<style lang="scss">
  .auth {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
