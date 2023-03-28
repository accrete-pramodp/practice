<script setup>
const props = defineProps(["detailsFor"]);
</script>

<template>
  <div>
    <table border="0" width="50%" class="main">
        <tr v-for="(detail, index) in detailsFor" :key="detail.id">
            <td>{{index}}</td>
            <td>{{ detail }}</td>
        </tr>
    </table>
    
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  font-size: 4px;
  color: green;
}
</style>