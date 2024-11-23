<script>
import Login from "./users/pages/login.component.vue";
import Register from "./users/pages/register.component.vue";
import Mood from "./users/pages/mood.component.vue";
import MainPage from "./public/pages/main-page.component.vue";

export default {
  name: "App",
  components: {MainPage, Mood, Register, Login},

}
</script>

<template>

  <router-view></router-view>
</template>

<style scoped>

</style>
