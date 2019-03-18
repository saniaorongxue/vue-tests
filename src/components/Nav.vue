<template>
    <div class="Nav">
       <ul>
           <li v-for="(item, index) in navlist">
             <slot><span>{{item.name}}</span></slot>
             <slot><span>{{item.path}}</span></slot>
           </li>
       </ul>
      
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props: ['navlist'],
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
    .Nav {

    }
</style>
