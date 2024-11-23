<script>

import { ref } from 'vue';
import EventList from "../components/event-list.component.vue";
import {EventApiService} from "../services/event-api.service.js";
import {EventEntity} from "../model/event/event.entity.js";



export default {
  name: "Events-page",
  components: {EventList},
  data: function () {
    return {

      events: [],
      errors: [],
      eventApiService: new EventApiService(),
      searchQuery: "", // Campo de búsqueda
     /* items: [
        {id: 1, name: 'Goku'},
        {id: 2, name: 'Vegeta'},
        {id: 3, name: 'Gohan'}
        // Agrega más elementos según tus datos
      ],*/
      filteredItems: [],
    }
  },
  methods: {
    filterItems() {
      this.filteredItems = this.items.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    buildEventListFromResponsiveData(events){
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
  created() {
    // Inicializar la lista filtrada con todos los items
    this.filteredItems = this.items;

    this.eventApiService.getEvent()
        .then(response =>{
          let dataEvents = response.data;
          this.events = this.buildEventListFromResponsiveData(dataEvents);
        })
        .catch(e =>{
          this.errors.push(e);
        });
  }

};

</script>

<template>
  <div class ="texto">
    <h1>Eventos</h1>
    <p>Para ti</p>
  </div>


    <!-- Barra de búsqueda
     <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="filterItems"
    />
    -->
    <div >
      <pv-icon-field style="margin-left: 80%; ">
        <pv-input-icon class="pi pi-search" />
        <pv-input-text  placeholder="Search" />
      </pv-icon-field>
    </div>

        <!-- Lista de resultados filtrados
         <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
        -->
    <div class="scroll-panel">
      <div class="content">

        <div id="list">
          <event-list :event-list="events"></event-list>
        </div>
      </div>
    </div>

</template>

<style scoped>
#list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
::-webkit-scrollbar-thumb {

  background-color: #00FF01;
  color: #00FF01;
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}

.scroll-panel {

  width: 100%;
  max-height: 80vh; /* Limita la altura al 80% de la ventana */
  overflow-y: auto; /* Activa el scroll vertical */
  padding: 20px; /* Reduce el padding para mejor adaptación */
  box-sizing: border-box; /* Incluye el padding en las dimensiones */
}

/* Estilos del Scrollbar */
.scroll-panel::-webkit-scrollbar {
  width: 12px; /* Ancho del scrollbar */
}

.scroll-panel::-webkit-scrollbar-thumb {
  background: #7e7c7c;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.scroll-panel::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 2px solid #dadada;
}

.scroll-panel::-webkit-scrollbar-thumb:hover {
  background-color: black; /* Color del thumb cuando está en hover */
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;

}

.texto{
  margin-left: 3%;
  color: #333;
}
</style>