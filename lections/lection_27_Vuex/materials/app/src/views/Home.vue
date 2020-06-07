<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr/>
    <Another />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Another from '@/components/Another.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Another 
  },
  data() {
    return {
      foo: 123
    }
  }
}
</script>
