<template>
 <!-- Project card displaying project details -->
  <div class="project-card">
  <!-- Dynamic image source and alt text -->
    <img :src="project.image" alt="Project Image" class="project-image" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
// Prop to receive project data
  props: ['project']
};
</script>

<style scoped>
.project-card {
   border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  max-width: 900px;
  margin: 1rem auto; 
  margin-bottom:40px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

h3 {
  margin-top: 1rem;
}

p {
  color: #555;
}
img{
width:200px;}
</style>
