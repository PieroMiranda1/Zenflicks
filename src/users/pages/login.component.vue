<script>
import ToolbarContent from "../components/toolbar-content.component.vue";
import { UserApiService } from "../services/user-api.service.js";

export default {
  name: "login",
  components: { ToolbarContent },
  data() {
    return {
      username: "",
      password: "",
      user: null,
      userApiService: new UserApiService(),
      loginError: "", // Para manejar errores de login
    };
  },
  methods: {
    onSubmit() {
      this.userApiService.authenticateUser(this.username, this.password)
          .then(user => {
            this.user = user;
            this.loginError = "";

            console.log("User authenticated: ", user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.$router.push("/mood");
            console.log("Mood page");
          })
          .catch(error => {
            this.loginError = "Invalid username or password"; // Muestra el error en el UI
          });
    }
  }
}
</script>

<template>
  <toolbar-content></toolbar-content>

  <div class="flex justify-content-center container mt-7">
    <pv-card class="justify-content-start border-round-3xl w-26rem align-items-center h-fit bg-primary-reverse border-1">
      <template #title>
        <div class="pt-5 pb-3 text-4xl text-center">Log in</div>
      </template>

      <template #content>
        <div class="form grid text-2xl">
          <div class="field col">
            <div class="field row">Username</div>
            <div class="field row">
              <pv-input-text v-model="username" class="w-18rem bg-primary-reverse" type="text" placeholder="username"></pv-input-text>
            </div>
            <div class="field row">
              <div class="field row">Password</div>
              <div class="field row">
                <pv-input-text v-model="password" type="password" class="w-18rem bg-primary-reverse" placeholder="password"/>
              </div>
            </div>
          </div>
        </div>

        <div v-if="loginError" class="error-message">
          {{ loginError }}
        </div>

        <div style="display: flex; justify-content: center;">
          <pv-button class="login-button" @click="onSubmit">
            Login
          </pv-button>
        </div>

        <div class="flex justify-content-center">
          <p>Forgot the password?</p>
        </div>
        <div class="flex justify-content-center">
          <p>Do not have an account? <router-link to="/register">Sign Up</router-link></p>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.login-button {
  background-color: #8D2A34;
  border-color: #242424;
  border-width: 2px;
  min-width: 100px;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>