<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 10
    };
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
}

button {
  padding: 10px 15px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 20px; /* Botones con bordes totalmente redondeados */
  background-color: #f0f0f0; /* Fondo neutro para los botones */
  border: none; /* Sin bordes */
  transition: background-color 0.3s; /* Transición suave para el fondo */
}

button:hover {
  background-color: #e0e0e0; /* Cambio de color al pasar el mouse */
}

button:disabled {
  opacity: 0.5; /* Reducción de la opacidad para botones deshabilitados */
} </style>
