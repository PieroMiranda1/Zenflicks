<template>
  <div class="movie-card">
    <img :src="movie.imageUrl" alt="Movie Poster" class="movie-image">
    <div class="movie-info">
      <h3>{{ movie.name }}</h3>
      <p>{{ movie.description }}</p>
      <span class="username">by: {{ movie.username }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  name: 'MovieCard'
}
</script>

<style scoped>
.movie-card {
  display: flex;
  background-color: #ffffff;
  width: calc(100% - 40px);
  margin: 10px 0;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.movie-image {
  width: 150px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
}

.movie-info {
  flex-grow: 1;
}

.movie-info h3 {
  color: #333333; /* Cambia el color del título de la película */
}

.movie-info p {
  color: #555555; /* Cambia el color de la descripción de la película */
}

.username {
  font-style: italic;
  color: #999999; /* Cambia el color del nombre de usuario */
}

</style>
