<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div class="background">
    <div class="background__images">
      <div class="image-1 image">
        <img src="./assets/dama.png" alt="dama">
      </div>
      <div class="image-2 image">
        <img src="./assets/logo.svg" alt="dama">
      </div>
      <div class="image-3 image">
        <img src="./assets/chel.svg" alt="dama">
      </div>
    </div>
    <div class="app-overlay">
      <Navbar></Navbar>
      <div class="app">
        <RouterView />
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  .app-overlay {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .app {
    // padding: 5px;
  }
}

.background {
    background: linear-gradient(213deg, #FFFEFB 41.62%, #DCBC82 78.61%);
    height: 100vh;
    z-index: 0;
    position: relative;

    .background__images {
      height: 100vh;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: flex-end;

      .image {
        // background-image: url("./assets/dama.png");
        background-size: cover;
        background-repeat: no-repeat;
        // border: 1px solid green;
        // height: 30vh;
      }
      .image-1 {
        // background-image: url("./assets/dama.png");
        display: none;
        @media (min-width: 980px) {
          display: block;
          flex: 1;
          img {
            display: block;
            object-fit: cover;
            max-width: 100%;
            max-height: 70vh;
          }
          
        }
        
      }
      .image-2 {
        // background-image: url("./assets/logo.svg");
        align-self: center;
        // flex-shrink: 25vh;
        img {
          display: block;
          object-fit: cover;
          max-width: 100%;
        }

        @media (min-width: 980px) {
          flex: 2;
          align-self: center;
          // flex-shrink: 25vh;
        }
      }
      .image-3 {
        // background-image: url("./assets/chel.svg");
        display: none;
        @media (min-width: 980px) {
          display: block;
          flex: 1;
          img {
            // display: block;
            object-fit:cover; 
            max-width: 100%;
            max-height: 70vh;
            padding-left: 50px;
          }
        }
      }
    }
  }

</style>
