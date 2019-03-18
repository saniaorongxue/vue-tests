<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Nav :navlist="navlist1"></Nav>
    <!--<Nav :navlist="navlist2" slot="s2"></Nav>-->
  </div>
</template>

<script>
import Nav from './Nav';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navlist1: [
        {
          name: 'jilon',
          path: 'xi`an'
        },
        {
          name: 'xiaxia',
          path: 'pingliang'
        }
      ],
      navlist2: [
        {
          name: 'jilon'
        },
        {
          name: 'xiaxia'
        }
      ]
    }
  },
  components: { Nav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
