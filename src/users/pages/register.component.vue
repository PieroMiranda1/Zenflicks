<script>
import ToolbarContent from "../components/toolbar-content.component.vue";
import {Citizen} from "../model/citizen/citizen.entity.js";
import {UserApiService} from "../services/user-api.service.js";

export default {
  name: "register",
  components: { ToolbarContent},
  data(){
    return {
      userApiService : new UserApiService(),
      name:'',
      lastName: '',
      userName: '',
      birthDate: '',
      phone: '',
      type: '',
      email: '',
      password: '',
      membership: '',
      types: [
        { name: 'Citizen', value: 'citizen'},
        { name: 'Creator', value: 'creator'},
      ],
      memberships: [
        { name: 'Standard', value: 'standard'},
        { name: 'Premium', value: 'premium'},
        { name: 'Platinum', value: 'platinum'},
      ]
    }
  },
  methods: {
    onSubmit(){
      const citizenUser = new Citizen(this.name, this.lastName,
          this.userName, this.birthDate, this.phone, this.type.value,
          this.email, this.password, this.membership.value);

      this.userApiService.createUser(citizenUser)
          .then(response => {
            console.log("Usuario registrado: ", response.data);
          });

    }
  }
}
</script>

<template>
  <toolbar-content></toolbar-content>

  <div class="flex justify-content-center container mt-5">
    <pv-card class= "border-round-3xl bg-primary-reverse border-1">
      <template #title >
        <div class=" pt-5 pb-3 text-4xl text-center">
          Registration
        </div>
      </template>
      <template #content>

        <form class="register-form">

          <div class="formgrid grid">
            <div class="field col">
              <label for="name">Name</label>
              <pv-input-text v-model="name" id="name" type="text" class="w-full bg-primary-reverse" placeholder="name">
              </pv-input-text>
            </div>
            <div class="field col">
              <label for="lastname">Lastname</label>
              <pv-input-text v-model="lastName" id="lastname" type="text" class="w-full bg-primary-reverse" placeholder="lastname">
              </pv-input-text>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label for="username">Username</label>
              <pv-input-text v-model="userName" id="username" type="text" class="w-full bg-primary-reverse" placeholder="username">
              </pv-input-text>
            </div>
            <div class="field col">
              <label for="birthday">Birthday</label>
              <pv-datepicker v-model="birthDate" class="w-full bg-primary-reverse"></pv-datepicker>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label for="phone">Phone</label>
              <pv-input-text v-model="phone" id="phone" type="text" class="w-full bg-primary-reverse" placeholder="phone number">
              </pv-input-text>
            </div>
            <div class="field col">
              <label for="type">User Type</label>
              <pv-select v-model="type" :options="types" optionLabel="name"  class="bg-primary-reverse w-full" placeholder="select a user type"></pv-select>
            </div>
          </div>

          <div class="formgrid grid">
            <div class="field col">
              <label for="email">Email</label>
              <pv-input-text v-model="email" id="email" type="text" class="w-full bg-primary-reverse" placeholder="email">
              </pv-input-text>
            </div>
            <div class="field col">
              <label for="password">Password</label>
              <pv-input-text v-model="password" id="password" type="password" class="w-full bg-primary-reverse" placeholder="password">
              </pv-input-text>
            </div>
          </div>


          <div class="field col flex flex-column align-items-center">
            <label for="type">Membership</label>
            <pv-select v-model="membership" :options="memberships" optionLabel="name"  class="bg-primary-reverse w-5" placeholder="select a membership"></pv-select>
          </div>

          <div class="flex justify-content-center">
            <pv-button class="option-button" @click="onSubmit">
              Sign Up
            </pv-button>
          </div>
        </form>

        <div class="flex justify-content-center mt-3">
          <router-link to="/login">
            <pv-button class="option-button">
              Go back
            </pv-button>
          </router-link>
        </div>

      </template>
    </pv-card>

  </div>
</template>

<style scoped>
.option-button{
  background-color: #8D2A34;
  border-color: #242424;

}

</style>