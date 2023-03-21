<script setup>
import RenderToIFrame from "../components/RenderToIFrame";
import BCNDetails from '../components/BCNDetails.vue'
import { ref, reactive } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

const lists = [
    {
        id: 1,
        title: 'Business contract Number',
        number: 2233,
        aggrmentNo: 1234
    },
    {
        id: 2,
        title: 'Business contract Number',
        number: 6789,
        aggrmentNo: 1234
    },
    {
        id: 3,
        title: 'Business contract Number',
        number: 6677,
        aggrmentNo: 1234
    },
    {
        id: 3,
        title: 'Business contract Number',
        number: 9999,
        aggrmentNo: 5678
    },
    {
        id: 3,
        title: 'Business contract Number',
        number: 1010,
        aggrmentNo: 5678
    },
];

const custData = reactive({
    id: 1234
})
const getDetails = id => {
    custData.id = id
}

</script>

<template>
    <div class="home">
        <div class="flexone">
            <div class="card spacer-1" v-if="route.query.q === '1234'">
                <div class="card-header ">
                    Please select a business contact Id:
                </div>
                <div class="card-body">
                    <div>
                    <span class="card-text">Business Contact Number </span>
                    <span>
                        <select>
                            <option>Test1</option>
                            <option>Test2</option>
                        </select>
                    </span>
                    </div>                    
                </div>
            </div>
            <div>
                <ul style="cursor:pointer">
                    <li v-for="list in lists" :key="list.id" @click="getDetails(list.number)">
                        <span>{{list.title}}</span>
                        <span style="float:right">{{list.number}}</span>
                    </li>
                    
                </ul>
            </div>
        </div>
        <!--<div class="flextwo"><BCNDetails :detailsFor="custData.id" /></div> --> 
        <div class="flextwo">
            <RenderToIFrame>
                <BCNDetails :detailsFor="custData.id" />
                <!--<div>I am in iframe</div>-->
            </RenderToIFrame>
        </div>      
    </div>
</template>

<style scoped>
.home {
    width:100%;
    display: flex;
    flex-direction: row;
}
.home div {
    border: left 1px solid black;
}
.flexone {
    flex: 1
}
.flextwo {
    flex: 2
}

iframe {
  border-left: 1px solid grey;
  resize: both;
  overflow: auto;
  width: 100%;
  height: 100%;
}
</style>
