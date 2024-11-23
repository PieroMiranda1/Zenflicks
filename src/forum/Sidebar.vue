<template>
  <div class="sidebar">
    <div class="logo">ZenFlicks</div>
    <ul class="nav-links">
      <li class="active">Inicio</li>
      <li>Mi contenido</li>
      <li>Explorar</li>
      <li>Foros</li>
      <li>Eventos</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: rgba(255, 142, 142, 0.8); /* Rojo semitransparente */
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
}

.nav-links li {
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px; /* Bordes redondeados */
  padding: 10px;
  transition: background-color 0.3s;
}

.nav-links li:hover {
  background-color: rgb(83, 78, 78); /* Gris oscuro al pasar el mouse */
}

.nav-links .active {
  color: #E91E63; /* Color rosa para elementos activos */
  font-weight: bold;
}
</style>
