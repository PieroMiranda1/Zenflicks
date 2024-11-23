<template>
  <pv-card class="event-card">
    <template #header>
      <div class="image-container">
        <img
            alt="event header"
            src="https://img.freepik.com/vector-gratis/cartel-realista-cine-cubo-iluminado-bebida-palomitas-maiz-entradas-carrete-gafas-3d-sobre-fondo-azul-ilustracion-vector-cintas_1284-77070.jpg"
            width="200px"
        />
      </div>
    </template>

    <template #title>
      <p1 class="title">{{ eventItem.title }}</p1>
    </template>

    <template #subtitle>
      <div style="width: fit-content; margin-left: auto; ">
        <router-link :to="`/event/${eventItem.eventId}`">
          <pv-button  label="INFO" class="w-full" style="background-color: black; border-color: black; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 15px;"/>
        </router-link>
      </div>
    </template>

    <template #content>
      <p class="m-0">
        {{eventItem.description}}
      </p>
    </template>
    <template #footer>

    </template>
  </pv-card>

</template>

<script >
export default {
  name: "event-item",
  props:{
    eventItem:{
      type:Object,
      required:true
    }
  },
  created(){

  }
}
</script>

<style scoped>
/* Estilos para la card */
.event-card {
  width: 25rem;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: scale(1.01);
}

/* Contenedor de la imagen */
.image-container {
  height: 140px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* Título */
.title {
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: start;
  color: #333;
}

/* Botón */
.button-container {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
}

.info-button {
  background-color: #000;
  color: #fff;
  border-color: #000;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
}

.info-button:hover {
  background-color: #333;
  border-color: #333;
  color: #fff;
}

/* Descripción */
.description {
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  text-align: justify;
  line-height: 1.5;
}
</style>