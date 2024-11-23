<template>
  <div class="list-view">
    <h2>Favoritos</h2>
    <div class="card-grid">
      <div v-for="content in favorites" :key="content.id" class="card">
        <img :src="content.image" alt="Poster" />
        <h3>{{ content.title }}</h3>
        <p>{{ content.description }}</p>
      </div>
    </div>

    <h2>Ver más tarde</h2>
    <div class="card-grid">
      <div v-for="content in watchLater" :key="content.id" class="card">
        <img :src="content.image" alt="Poster" />
        <h3>{{ content.title }}</h3>
        <p>{{ content.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import apiService from 'src/lists/services/apiService';

export default {
  data() {
    return {
      favorites: [],
      watchLater: [],
      user: {}
    };
  },
  async created() {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));

    if (this.user && this.user.lists) {
      // Obtener los contenidos para la lista de favoritos
      for (const id of this.user.lists.favorites) {
        const content = await apiService.getContentById(id);
        if (content) this.favorites.push(content);
      }

      // Obtener los contenidos para la lista de ver más tarde
      for (const id of this.user.lists.watchLater) {
        const content = await apiService.getContentById(id);
        if (content) this.watchLater.push(content);
      }
    }
  }
};

// Ejemplo para almacenar el usuario logueado
const loggedUser = {
  id: "ade37f54-fd5a-416f-bea7-677994756a52",
  name: "Piero",
  lists: {
    "favorites": [45, 98, 101],
    "watchLater": [98, 101]
  }
};

localStorage.setItem('loggedUser', JSON.stringify(loggedUser));

</script>

<style scoped>
/* Estilos para las cards */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.card img {
  width: 100%;
  height: auto;
}
</style>