<script setup>
import {reactive} from 'vue'
import { useRouter, useRoute } from 'vue-router'

    const pageData = reactive({
        bcn: ''
    })

    const router = useRouter()
    const route = useRoute()

    const checkBcn = () => {
        if(pageData.bcn === '1234') {
            router.push({
                path: '/about'
            })
        } else {
            alert('Insert Proper Business Contact Number');
        }
    }
</script>

<template> 
    <div>        
        <div class="card spacer-1">
            <div class="card-header text-bg-success ">
                Please select a business contact Id:
            </div>
            <div class="card-body">
                <div>
                <span class="card-text">Business Contact Number </span>
                <span><input type="text" v-model="pageData.bcn"></span>
                </div>
                <div class="btn btn-success btn-spacer" @click="checkBcn">ok</div>
            </div>
        </div>
    </div>   
</template>

<style scoped>
.search-area {
    margin-left: 100px;
    width: 100%;
}
.btn-spacer {
    margin-top: 10px;
    margin-left: 150px;
}
.spacer-1{
  margin-left: 100px;
  margin-top: 150px;
}
</style>