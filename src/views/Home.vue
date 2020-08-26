<template>
  <div class="home">
    TESTE HOME
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NavbarComponent from "@/components/Navbar.vue";

@Component({
  components: {
    HelloWorld,
    NavbarComponent
  }
})
export default class Home extends Vue {}
</script>
