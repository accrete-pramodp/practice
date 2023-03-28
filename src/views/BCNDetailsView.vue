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
        branch: 'Banayan Park',
        email: 'test2233@test.com',
        aggrmentNo: 1234,
        Manager: 'test1234'
    },
    {
        id: 2,
        title: 'Business contract Number',
        number: 6789,
        branch: 'Olympus',
        email: 'test6789@test.com',
        aggrmentNo: 1234,
        Manager: 'test1234'
    },
    {
        id: 3,
        title: 'Business contract Number',
        number: 6677,
        branch: 'Sahyadri Park',
        email: 'test6677@test.com',
        aggrmentNo: 1234,
        Manager: 'test1234'
    },
    {
        id: 4,
        title: 'Business contract Number',
        number: 9999,
        branch: 'Olympus',
        email: 'test9999@test.com',
        aggrmentNo: 5678,
        Manager: 'test5678'
    },
    {
        id: 5,
        title: 'Business contract Number',
        number: 1010,
        branch: 'Quadra-II',
        email: 'test1010@test.com',
        aggrmentNo: 5678,
        Manager: 'test5678'
    },
];

const custData = reactive({
    id: 1,
    title: 'Business contract Number',
    number: 2233,
    aggrmentNo: 1234,
    branch: 'Banayan Park',
    email: 'test2233@test.com',
    aggrmentNo: 1234,
    Manager: 'test1234'
})
const getDetails = list => {
    custData.id = list.id,
    custData.title = list.title,
    custData.number = list.number,
    custData.aggrmentNo = list.aggrmentNo
    custData.branch = list.branch,
    custData.email = list.email,
    custData.aggrmentNo = list.aggrmentNo,
    custData.Manager = list.Manager
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
                    <li v-for="list in lists" :key="list.id" @click="getDetails(list)">
                        <span>{{list.title}}</span>
                        <span style="float:right">{{list.number}}</span>
                    </li>
                    
                </ul>
            </div>
        </div>
        <!--<div class="flextwo"><BCNDetails :detailsFor="custData.id" /></div> --> 
        <div class="flextwo">
            <RenderToIFrame style="border:2px solid green;">
                <BCNDetails :detailsFor="custData" />
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
