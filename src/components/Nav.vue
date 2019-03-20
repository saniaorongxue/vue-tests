<template>
    <div class="Nav">
      <ul>
        <slot name="item" v-for="item in items" :text="item.text">默认值</slot>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props: ['items'],
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
