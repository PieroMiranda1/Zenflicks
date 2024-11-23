<script>
import ToolbarContent from "../components/toolbar-content.component.vue";

export default {
  name: "mood" ,
  components: { ToolbarContent},
  data(){
    return {
      feelings: [
        {name:'Relajado', value:'relajado'},
        {name: 'Ansioso', value: 'ansioso'},
        {value: 'Cansado', name: 'cansado'},
        {value: 'Motivado', name: 'motivado'}
      ],
      objectives: [
        {name: 'Relajarme', value: 'relajarme'},
        {name: 'Desconectar', value: 'desconectar'},
        {name: 'Inspirarme', value: 'inspirarme'},
        {name: 'Aprender', value: 'aprender'}
      ],
      categories: [
        {name: 'Comedia', value: 'comedia'},
        {name: 'Drama', value: 'drama'},
        {name: 'Fantasia', value: 'fantasia'},
        {name: 'Aventura', value: 'aventura'}
      ],

      feeling: null,
      objective: null,
      category: null,
    }
  },
  methods: {
    onSubmit(){
      const currentMoods = {
        feeling: this.feeling.value,
        objective: this.objective.value,
        category: this.category.value
      }

      console.log("Current mood values: ",currentMoods);
      localStorage.setItem("currentMoods", JSON.stringify(currentMoods));
      this.$router.push("/home");
      console.log("Home page")

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
          Estado de animo
        </div>
      </template>
      <template #content>
        <form class="register-form">
          <div class="field col flex flex-column align-items-center">
            <label for="type">¿Cómo te sientes hoy?</label>
            <pv-select v-model="feeling" :options="feelings" optionLabel="name" class="bg-primary-reverse w-full" placeholder="selecciona una emocion"></pv-select>
          </div>

          <div class="field col flex flex-column align-items-center">
            <label for="type">¿Cuáles son tus objetivos el dia de hoy?</label>
            <pv-select v-model="objective" :options="objectives" optionLabel="name" class="bg-primary-reverse w-full" placeholder="selecciona un objetivo"></pv-select>
          </div>

          <div class="field col flex flex-column align-items-center">
            <label for="type">¿Alguna categoría en especial?</label>
            <pv-select v-model="category" :options="categories" optionLabel="name" class="bg-primary-reverse w-full" placeholder="selecciona una categoria"></pv-select>
          </div>

          <div class="flex justify-content-center">
            <pv-button class="option-button" @click="onSubmit">
              Continuar
            </pv-button>
          </div>

        </form>
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