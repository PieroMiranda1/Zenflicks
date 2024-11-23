<template>
  <div class="post">
    <img :src="post.imageUrl" alt="Post image" class="post-image">
    <div class="post-content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>
.post {
  display: flex;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.post-image {
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.post-content {
  padding: 10px;
}

.post-content h3 {
  margin: 0;
}

.post-content p {
  color: #fffdfd;
}
</style>
