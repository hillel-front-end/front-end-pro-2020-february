<template>
  <div class="home">
    HOME component
    
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
  },
  methods: {
    goToNextPage() {
      console.log(this.$router.push('/contacts'), 'router');
      console.log(this.$route, 'route');
    }
  },
  created() {
    // setTimeout(() => {
    //   this.$router.push('/contacts');
    // }, 3000)
  }
}
</script>
