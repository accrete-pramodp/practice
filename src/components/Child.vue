<template>
    <div>
        <b>Child page</b>
        <br>
        {{title}}
        <button @click="sendToParent">click here</button>
    </div>
</template>

<script setup>
const Data = defineProps({
    title: {
        type: String,
        default: 'No Data Available'
    }
})

const emitData = defineEmits(['changedText'])

const sendToParent = () => {
    emitData('changedText', 'New text will appear')
}


</script>
