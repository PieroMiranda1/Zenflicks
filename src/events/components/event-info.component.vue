<script >

export default {
  name: "event-info",
  props:{
    eventInfo:{
      type: Object,
      required: true,
    }
  },
  created() {
    console.log(this.eventInfo)
  }
}

</script>

<template>

  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img alt="user header"
           src="https://img.freepik.com/vector-gratis/cartel-realista-cine-cubo-iluminado-bebida-palomitas-maiz-entradas-carrete-gafas-3d-sobre-fondo-azul-ilustracion-vector-cintas_1284-77070.jpg"
          width="400"
      />
    </template>
    <template #title>Festival de Peliculas</template>

    <template #subtitle>
      Tansmitiendo: "{{eventInfo.title}}"
    </template>

    <template #content>
      <p class="m-0">
        {{eventInfo.description}}
      </p><br>
      <p class="m-0">
        Lugar: {{eventInfo.address}}<br>
        Fecha: {{eventInfo.date}}<br>
        Promocionado por: {{eventInfo.creatorId}}<br>
      </p>
    </template>
    <template #footer>

    </template>
  </pv-card>

</template>

<style scoped>

</style>