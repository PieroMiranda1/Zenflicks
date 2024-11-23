<script>
import movieService from '../../shared/services/movieService.js';

export default {
  name: "MainWelcomePage",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('currentUser')),
      recommendedMovies: [],
      lastSeenMovies: [],
      specialRecommendation: {},
      moviesWatchedCount: 12,
      forumCommentsCount: 9,
      moods: {
        ansioso: 21,
        cansado: 17,
        motivado: 50,
        estresado: 13
      }
    };
  },
  created() {
    this.fetchRecommendedMovies();
    this.fetchLastSeenMovies();
    this.fetchSpecialRecommendation();
  },
  methods: {
    fetchRecommendedMovies() {
      movieService.getMovies().then(response => {
        for(let i = 0; i < 5; i++) {
          this.recommendedMovies.push(response.data[Math.floor(Math.random() * response.data.length)]);
        }
      });
    },
    fetchLastSeenMovies() {
      movieService.getMovies().then(response => {
        this.lastSeenMovies = response.data.slice(-3);
      });
    },
    fetchSpecialRecommendation() {
      movieService.getMovies().then(response => {
        this.specialRecommendation = response.data[Math.floor(Math.random() * response.data.length)];
      });
    }
  }
};
</script>

<template>
  <div class="welcome-page">
    <h1 class="tittleMain">Bienvenido, {{ user.name }}</h1>

    <div class="columns">
      <div class="left-column">
        <div class="card">
          <p class="movieothers">Peliculas/Series/Documentales</p>
          <h3 class="tittleRecomendation">Recomendado para ti</h3>
          <ul>
            <li v-for="movie in recommendedMovies" :key="movie.id">
              {{ movie.title }} - {{ movie.type }}
            </li>
          </ul>
        </div>

        <div class="card">
          <h3>Último contenido visto</h3>
          <ul>
            <li v-for="movie in lastSeenMovies" :key="movie.id">
              {{ movie.title }} - {{ movie.category }}
            </li>
          </ul>
        </div>
      </div>

      <div class="right-column">
        <div class="special-recommendation card">
          <h3>Recomendación especial basada en Películas Vistas</h3>
          <img :src="specialRecommendation.image" alt="special movie" />
          <div class="recommendation-details">
            <h3 class="tittleRecomendation">{{ specialRecommendation.title }}</h3>
            <p class="movieothers">{{ specialRecommendation.description }}</p>
          </div>
        </div>

        <div class="counts-row">
          <div class="count-card card">
            <h3>Películas vistas</h3>
            <p>{{ moviesWatchedCount }}</p>
          </div>

          <div class="count-card card">
            <h3>Comentarios en foros</h3>
            <p>{{ forumCommentsCount }}</p>
          </div>
        </div>

        <div class="mood-chart card">
          <h3>Principales estados de ánimo del último mes</h3>
          <div class="chart">
            <div class="mood ansioso">Ansioso - {{ moods.ansioso }}%</div>
            <div class="mood cansado">Cansado - {{ moods.cansado }}%</div>
            <div class="mood motivado">Motivado - {{ moods.motivado }}%</div>
            <div class="mood estresado">Estresado - {{ moods.estresado }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  text-align: center;
  margin-top: 50px;
  background-color: #f9f9f9;
}

.tittleMain {
  text-align: left;
}

.movieothers {
  color: gray;
  margin-top: 1px;
  margin-outside: 1px;
}

.tittleRecomendation {
  margin-top: 1px;
  margin-outside: 1px;
}

.columns {
  display: flex;
  justify-content: space-between;
}

.left-column, .right-column {
  width: 48%;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.special-recommendation {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;
  border-radius: 5px;
  background-color: #fff;
}

.special-recommendation img {
  width: 150px;
  height: auto;
  margin-right: 20px;
}

.recommendation-details {
  flex-grow: 1;
}

.counts-row {
  display: flex;
  justify-content: space-between;
}

.count-card {
  width: 48%;
  background-color: #fff;
  text-align: center;
  padding: 15px;
}

.mood-chart {
  padding: 20px;
  text-align: center;
}

.mood {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}

.mood.ansioso {
  background-color: red;
  color: white;
}

.mood.cansado {
  background-color: blue;
  color: white;
}

.mood.motivado {
  background-color: yellow;
  color: black;
}

.mood.estresado {
  background-color: green;
  color: white;
}
</style>
