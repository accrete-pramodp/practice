<template>
    <div>
        <ul style="cursor:pointer">
            <li v-for="list in lists" :key="list.id" @click="getId(list.id)">{{list.title}}</li>
        </ul>
    </div>
</template>

<script setup>
const lists = [
    {
        id: 1,
        title: 'Account1'
    },
    {
        id: 2,
        title: 'Account2'
    },
    {
        id: 3,
        title: 'Account3'
    },
];

const emit = defineEmits(['updateData'])

const getId = id => {
    emit('updateData', id)
}
</script>