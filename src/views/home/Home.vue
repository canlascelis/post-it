<template lang="pug">
section.home
    .container
        h1.title {{name}} - {{age}}
        p {{checkMinority() ? 'You are minor' : 'You are adult'}}
        button.btn.btn-warning(@click="changeAge(17)") Change Age
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage',
    data() {
        return {
            name: 'Jeres',
            age: 25 as number | string
        }
    },
    computer: {
        username() {
            console.log(this.$route.params.username);
            return this.$route.params.username
        }
    },
    methods: {
        changeAge(age: number | string){
            this.age = age;
        },
        checkMinority(){
            if(this.age < 18) {
                return true
            } else {
                return false
            }
        }
    },

})
</script>

<style lang="scss" scoped>
@use './home.scss';
</style>