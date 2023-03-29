<script setup>
import HelloWorld from './HelloWorld.vue'
import {reactive} from 'vue'

const Data = reactive({
    id: 1,
    text: 'learn vuejs 3',
    completed: false
}) 

</script>
<template>
    <div>
        <div>
            <HelloWorld msg="Welcome in Vue3" />
            <div id="todo">{{Data.text}}</div>
        </div>
    </div>
</template>