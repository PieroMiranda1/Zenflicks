<script>
export default {
  name: "MainPerfilPage",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("currentUser"))
    }
  }
};
</script>

<template>
  <div class="perfil-page">
    <h1>Hola, {{user.name}}</h1>

    <div class="perfil-info">
      <img class="perfil-img" src="https://via.placeholder.com/100" alt="Foto de perfil" />
      <div class="perfil-details">
        <p><i class="icon">📅</i> Fecha de Nacimiento: {{user.birthDate}}</p>
        <p><i class="icon">📱</i> Número de celular: {{user.phone}}</p>
        <p><i class="icon">📧</i> Correo electrónico: {{user.email}}</p>
        <p><i class="icon">💼</i> Tipo de usuario: {{user.type}} </p>
      </div>
    </div>

    <div class="membresia-section">
      <div class="membresia-title">
        <i class="icon">⭐</i> Membresía actual
      </div>
      <div class="membresia-options">
        <button class="btn-premium">Premium</button>
        <button class="btn-change">Cambiar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perfil-page {
  padding: 20px;
}

.perfil-info {
  display: flex;
  align-items: center;
}

.perfil-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.perfil-details p {
  font-size: 18px;
  margin: 10px 0;
}

.icon {
  margin-right: 10px;
}

.membresia-section {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
}

.membresia-title {
  display: flex;
  align-items: center;
}

.membresia-options {
  display: flex;
  flex-direction: column;
}

.btn-premium, .btn-change {
  background-color: #8c2c34;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px 0;
}
</style>