<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="page-header">
        <nav>
            <span class="spacer-1"><RouterLink to="/">Home</RouterLink></span>
            <span class="spacer-1"><RouterLink to="/about">About</RouterLink></span>
            <!--<span class="spacer-1"><RouterLink to="/practice">Practice</RouterLink></span>-->
        </nav>
    </div>
</template>

<style scoped>
.spacer-1{
  padding: 10px;
}

.page-header, 
.page-footer {
  height: 30px;
  flex-shrink: 0;
 line-height: 30px;
 padding: 0 8px
 }
</style>