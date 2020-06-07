<template>
  <div class="hello">
    <BaseApp>
       <template v-slot:header>
          <Header />
       </template>

       <template v-slot:content>
          <Content />
       </template>

      <template v-slot:footer>
        <Footer />
      </template>
    </BaseApp>

    <hr /> 
    

    <input type="text" v-model="login">

    <button @click="changeDataFromStore()">
      change
    </button>
  </div>
</template>

<script>
import BaseApp from './BaseApp';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName: 'Valera',
      lastName: 'Ternavsky',
      login: ''
    }
  },
  methods: {
    go() {
      console.log(this.fullName, 'fullName');
      this.fullName = 'Pety Petrov';
    },
    changeFullName() {
      this.firstName = 'Pety';
      this.lastName = 'Petrov';
    },
    changeDataFromStore() {
      this.$store.commit('changeFoo', this.login);
    }
  },
  components: {
    BaseApp: BaseApp,
    Header: Header,
    Content: Content,
    Footer: Footer
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },

      set(newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
