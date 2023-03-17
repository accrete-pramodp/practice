<script setup>
import {reactive, computed, watch} from 'vue'

const homeData = reactive({
  mainText: 'This is my Home Page',
  counter: 0
})

const increaseCounter = count => {
  homeData.counter += count;
}

watch(() => homeData.counter, (newVal, oldVal) => {
    console.log('new value is: ' + newVal);
    console.log('old value was: ' + oldVal);
  })

const decreaseCounter = count => {
  homeData.counter -= count;
}

const getOddOrEven = computed(() => {
  if(homeData.counter % 2 === 0) {
    return 'even'
  }
  return 'odd'
})

</script>

<template>
  <div class="home">
    <h1>{{homeData.mainText}}</h1>
    <div>
      <button class="spacer-2" @click="decreaseCounter(2)">--</button>
      <button class="spacer-2" @click="decreaseCounter(1)">-</button>
      <span class="spacer-2">{{homeData.counter}}</span>      
      <button class="spacer-2" @click="increaseCounter(1)">+</button>
      <button class="spacer-2" @click="increaseCounter(2)">++</button>
    </div>
    <h2>Above value is {{getOddOrEven}}</h2>
  </div>
</template>

<style scoped>
.spacer-2{
  padding: 5px;
  margin-left: 10px;
  font-size: 30px;
}

</style>
