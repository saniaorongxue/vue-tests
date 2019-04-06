<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="parent">
      <p>父组件</p>
      <Nav>
        <template slot="item" :items="items">
          <li>{{ items.text }}</li>
        </template>
      </Nav>
      <button @click="gotoTree">TREE</button>
    </div>
    <!--<Nav :navlist="navlist2" slot="s2"></Nav>-->
  </div>
</template>

<script>
import Nav from './Nav';
export default {
  name: 'hello',
  data () {
    return {
      items:[
        {id:1,text:'第1段'},
        {id:2,text:'第2段'},
        {id:3,text:'第3段'},
      ],
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
  components: { Nav },
  methods: {
    gotoTree() {
      this.$router.push({
        name: 'tree'
      })
    }
  }
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
