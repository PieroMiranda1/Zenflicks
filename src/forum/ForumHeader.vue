<template>
  <div class="forum-header">
    <h1>Foros</h1>
    <p>Publicaciones acerca de Mi Contenido</p>
    <input type="text" placeholder="Value">
  </div>
</template>

<script>
export default {
  name: 'ForumHeader'
}
</script>

<style scoped>
.forum-header {
  background-color: #fff; /* Color de fondo claro */
  padding: 20px;
  text-align: center;
  width: 100%;
  border-radius: 15px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra más ligera y dispersa */
  border: 1px solid #ccc; /* Borde sutil */
}

.forum-header h1 {
  color: #000; /* Color del texto */
  margin-bottom: 10px; /* Espacio después del título */
}

.forum-header p {
  color: #666; /* Color del texto secundario */
  font-size: 14px; /* Tamaño de fuente más pequeño */
  margin-bottom: 15px; /* Espacio antes del input */
}

.forum-header input {
  border: 1px solid #ccc; /* Borde del input */
  border-radius: 5px; /* Bordes redondeados del input */
  padding: 10px 15px; /* Padding del input */
  width: 200px; /* Ancho del input */
}
</style>
