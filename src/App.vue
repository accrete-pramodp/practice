<script setup>
import MainMenu from './components/MainMenu.vue'
import MainPage from './components/MainPage.vue'
</script>

<template>
  <div class="page-wrapper">
    
    <MainMenu />
    <div class="page-content">
    <MainPage />
    </div>

    <!--<div class="page-content">
      <aside class="left-column">
        <div class="left-column-header"> 
          <div class="search-input-wrapper">
            <input type="text" placeholder="Search" />
          </div>
          <div class="search-button-wrapper">
            <button type="button" >Button</button>
          </div>
        </div>
        <div class="left-column-content">
          <ul>
            <li>Search results</li>
            <li>Search results</li>
          </ul>
        </div>
      </aside>

      <main class="right-column">
        <RouterView />
      </main>
    </div>-->

    <div class="page-footer">Footer</div>
  </div>
</template>

<style scoped>
html, body {
height: 100%;
width: 100%;
overflow: hidden;
padding: 0;
margin:0
}

ul {
margin: 0;
padding:0;
list-style: none;
}

.page-wrapper {
  display: flex; 
  flex-direction: column;
  border: solid 1px #222;
}

.page-content {
  border-top: solid 1px #222;
  border-bottom: solid 1px #222;
  flex-grow: 1;
  display: flex;
  height: 500px;
}

.right-column {
 width: 75%;
 flex-grow: 1;
 border-left: solid 1px #222;
 padding: 8px 16px
}

.left-column {
 width: 25%;
 flex-shrink:0;
 display: flex; 
 flex-direction: column;
}


.left-column-header {
  height: 40px;
  flex-shrink:0;
  align-items: center;
  border-bottom: solid 1px #222;
  display: flex;
}

.left-column-header div {
  flex-grow: 1;
  padding: 4px 8px
}

.left-column-content {
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  padding: 0 8px
}
</style>
