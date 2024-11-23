<script>


import {EventApiService} from "../services/event-api.service.js";
import EventInfo from "../components/event-info.component.vue";
import {EventEntity} from "../model/event/event.entity.js";

export default {
  name: "EventPage",
  components: {EventInfo},
  data() {
    return {
      event:[],
      eventApiService: new EventApiService(),
    }
  },
  methods: {
    buildEventFromResponsiveData(events){
      return events.map(event =>
          new EventEntity(
              event.eventId,
              event.contentId,
              event.title,
              event.description,
              event.date,
              event.address,
              event.creatorId,
          )
      )
    }
  },
  created(){
    this.eventApiService.getEventbyId(this.$route.params.id)
        .then((response)=>{
          let Dataevent = response.data;
          this.event= Dataevent[0];
          console.log(this.event);

        })
  }
}
</script>

<template>
  <router-link to="/events">
    <pv-button
        icon="pi pi-arrow-left"
        style="background-color: transparent; color: black; border-color: transparent;">
    </pv-button>
  </router-link>

  <div class="movie-details">
    <event-info :event-info="this.event"></event-info>

    <!-- Contenedor del botón con clase "button-container" -->
    <div class="button-container">
      <pv-button
          label="Asistir"
          class="p-button-rounded"
          icon="pi pi-calendar-plus" />
    </div>
  </div>
</template>

<style scoped>
.movie-details {
  display: flex;
  flex-direction: column; /* Para alinear contenido verticalmente */
  align-items: center; /* Centrar contenido horizontalmente */
  margin: 10px;
}

/* Estilo del botón */
.button-container {
  margin-top: 20px; /* Espaciado por defecto */
  display: flex;
  justify-content: center;
}

/* Botón personalizado */
.p-button-rounded {
  background-color: #8D2A34;
  border-color: #8D2A34;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Efecto hover en el botón */
.p-button-rounded:hover {
  background-color: #a53945;
  transform: scale(1.05);
}

/* Media Queries para pantallas más pequeñas */
@media (max-width: 768px) {
  .button-container {
    margin-top: 10px; /* Reducir espacio en pantallas más pequeñas */
  }

  .p-button-rounded {
    font-size: 0.9rem; /* Tamaño de fuente más pequeño */
    padding: 8px 16px; /* Ajustar padding */
  }
}

@media (max-width: 480px) {
  .button-container {
    margin-top: 5px; /* Espaciado aún más reducido */
  }

  .p-button-rounded {
    font-size: 0.8rem; /* Tamaño de fuente más pequeño */
    padding: 6px 12px; /* Más compacto */
  }
}
</style>