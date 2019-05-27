<template>
  <div id="app" class="w-full h-full">
    <div class="bg-image absolute" :style="dynamicBackgroundImage"/>
    <div class="container mx-auto py-auto w-full h-full overflow-visible">
      <div class="flex content-center items-center h-full">
        <card
          image-url="https://pbs.twimg.com/profile_images/1126107052244389889/TfLcEfVy_400x400.jpg"
        >
          <template slot="title">Romulo G Rodrigues</template>
          <p>Fullstack JS/ES7 Developer</p>
          <p>@ Link Soluções EIRELI</p>
          <template slot="actions">
            <pill
              class="rounded-full mb-1"
              color="blue"
              @click="open('https://www.linkedin.com/in/romulo-gabriel-rodrigues/', '_blank')"
            >
              <v-icon name="brands/linkedin-in"/>
            </pill>
            <pill class="rounded-full mb-1" color="green" @click="open('mailto:contato@romulogabriel.com')">
              <v-icon name="envelope-open"/>
            </pill>
            <pill
              class="rounded-full mb-1"
              color="blue"
              @click="open('https://twitter.com/yemolai', '_blank')"
            >
              <v-icon name="brands/twitter"/>
            </pill>
            <pill
              class="rounded-full mb-1"
              color="gray"
              @click="open('https://github.com/yemolai', '_blank')"
            >
              <v-icon name="brands/github"/>
            </pill>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card"
import Pill from "./components/Pill"
import VIcon from "vue-awesome/components/Icon"
import "vue-awesome/icons/brands/linkedin-in"
import "vue-awesome/icons/brands/github"
import "vue-awesome/icons/brands/twitter"
import "vue-awesome/icons/envelope-open.js"

export default {
  name: "App",
  components: {
    VIcon,
    Card,
    Pill
  },
  methods: {
    open: function(...args) {
      window.open(...args);
    }
  },
  data() {
    return {
      dynamicBackgroundImage: {
        background: 'url("https://source.unsplash.com/960x540/?tech,coding")'
      }
    }
  }
};
</script>

<style>
body, html {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > .container {
  height: calc(100% -16px) !important;
  margin-top: -16px;
  padding-left: 16px;
}

* {
  box-sizing: border-box;
}


.bg-image {
  overflow: hidden;
  /* Add the blur effect */
  filter: blur(8px) saturate(0.2);
  -webkit-filter: blur(8px) saturate(0.2);

  width: calc(100vw + 32px);
  height: calc(100% + 96px);

  margin-top: -32px;
  margin-left: -12px;
  padding: -16px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  z-index: -999;
}

/* Position text in the middle of the page/image */
.bg-content {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>
