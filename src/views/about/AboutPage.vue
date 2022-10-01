<template lang="pug">
h1 ABOUT PAGE
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AboutPage",
    computed: {
        username() {
            console.log(this.$route.params.username);
            return this.$route.params.username
        }
    }
})
</script>

<style lang="scss" scoped>
h1 {
    color: black !important;
}
</style>