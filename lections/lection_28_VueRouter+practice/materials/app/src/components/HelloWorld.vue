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

    <button @click="syncChangeDataFromStore()">
      sync change
    </button>
    
    <button @click="asyncChangeDataFromStore()" :disabled="getIsDisabled">
      async change 
    </button>
  </div>
</template>

<script>
import BaseApp from './BaseApp';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {mapActions, mapGetters, mapMutations} from 'vuex';


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
    syncChangeDataFromStore() {
      // this.$store.commit('changeFoo', this.login);
      this.changeFoo(this.login);
    },
    asyncChangeDataFromStore() {
      // this.$store.dispatch('asyncChangeFoo',  this.login);
      this.asyncChangeFoo(this.login);
    },
    ...mapActions(['asyncChangeFoo']),
    ...mapMutations(['changeFoo'])
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
    },
    ...mapGetters(['getIsDisabled', 'getFoo'])
  },
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
