<script>

export default {
  data() {
    return {
      explorarExpanded: false,
      listasExpanded: false,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push("/perfil");
    },
    logout() {
      this.$router.push("/login");
      localStorage.clear();
      console.log("Salir de la sesión");
    },
    toggleExplorar(state) {
      this.explorarExpanded = state;
    },
    toggleListas(state) {
      this.listasExpanded = state;
    },
  },
};
</script>

<template>
  <pv-splitter layout="horizontal"  style="height: 100vh">
    <pv-splitter-panel :size="20" :disabled="true" class="left-side" >

      <div class="sidebar">
        <img alt="zen-logo" src="../../assets/zenflicks-logo.png" class="w-full p-3">

        <router-link to="/home">
          <pv-button class="sidebar-button" label="Home" icon="pi pi-home"></pv-button>
        </router-link>

        <pv-button @mouseenter="toggleExplorar(true)"
                   @mouseleave="toggleExplorar(false)"
                   class="sidebar-button" label="Explorar" icon="pi pi-search">
          <ul v-if="explorarExpanded">
            <pv-button class="sidebar-button" >
              <router-link to="/explorar/contenido-disponible">Contenido disponible</router-link>
            </pv-button>
            <pv-button class="sidebar-button">
              <router-link to="/explorar/contenido-reciente">Contenido reciente</router-link>
            </pv-button>
          </ul>
        </pv-button>

        <pv-button @mouseenter="toggleListas(true)"
                   @mouseleave="toggleListas(false)"
                   class="sidebar-button" label="Listas" icon="pi pi-list">
          <ul v-if="listasExpanded">
            <pv-button class="sidebar-button" >
              <router-link to="/list">Favoritos</router-link>
            </pv-button>
            <pv-button class="sidebar-button" >
              <router-link to="/list">Ver más tarde</router-link>
            </pv-button>
          </ul>
        </pv-button>

        <router-link to="/forum">
          <pv-button class="sidebar-button" label="Foros" icon="pi pi-comments">
          </pv-button>
        </router-link>

        <router-link to="/events">
          <pv-button class="sidebar-button" label="Eventos" icon="pi pi-calendar"></pv-button>
        </router-link>


        <span class="spacer"></span>

        <div class="bottom-options">
          <router-link to="/perfil">
            <pv-button icon="pi pi-user" class="bottom-button"></pv-button>
          </router-link>
          <span class="spacer"></span>
          <pv-button icon="pi pi-sign-out" class="bottom-button" @click="logout"></pv-button>
        </div>

      </div>
    </pv-splitter-panel>
    <pv-splitter-panel :size="80" :disabled="true">
      <router-view></router-view>
    </pv-splitter-panel>
  </pv-splitter>
</template>

<style scoped>
.sidebar {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
}
.sidebar-button {
  width: 100%;
  justify-content: flex-start;
  background-color: #DE9199;
  border-color: #eeb4b4;
  color: black;
  font-size: 22px;
  margin: 0 auto;
}
.sidebar-button:hover {
  background-color: #d04c4c !important;
  border-color: #eeb4b4 !important;
}

.left-side{
  background-color: #DE9199;
}

.bottom-options{
  display: flex;
}

.spacer{
  flex: 1 1 auto;
}

.bottom-button{
  background-color: #DE9199;
  border-color: #eeb4b4;
  color: black;
}
.bottom-button:hover{
  background-color: #d04c4c !important;
  border-color: #eeb4b4 !important;
}

</style>
