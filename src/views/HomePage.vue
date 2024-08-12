<template>
  <div>
    <AppHeader />
    <main>
      <section class="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Sooraj Rajeevan, a web developer specializing in front-end
          technologies.
        </p>
      </section>
      <section class="projects">
        <h2>My Projects</h2>
        <div class="project-list">
          <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title:
            "FoodiesGo: Swift & Savory – Your Ultimate Food Ordering Experience",
          description:
            "FoodiesGo is a modern Android app developed using Kotlin, designed to provide a seamless food ordering experience similar to Uber Eats. The app offers users an intuitive interface to browse a wide variety of restaurants, explore detailed menus, and place orders with just a few taps. With real-time order tracking, secure payment options, and personalized recommendations, FoodiesGo ensures a smooth and enjoyable experience for food lovers. The app is built with a focus on performance, reliability, and user satisfaction, making it a go-to choice for food ordering on the go.",
          image: require("@/assets/p1.png"), // Ensure this image exists
        },
        {
          id: 2,
          title: "Showroom Spotlight: Car Listings Made Simple",
          description:
            "Showroom Spotlight is a straightforward car showroom website developed with Node.js and JavaScript, designed to list available cars at various showrooms. The website offers an easy-to-navigate interface where users can view detailed information about each car, including make, model, price, and features. With a focus on simplicity and efficiency, Showroom Spotlight provides a clean layout and intuitive search options to help users quickly find and compare cars available in nearby showrooms.",
          image: require("@/assets/p2.png"), // Ensure this image exists
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Global Styles */
body {
  font-family: "Arial", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1,
h2 {
  margin: 0;
  font-weight: 600;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

h2 {
  font-size: 2rem;
  color: #444;
}

p {
  line-height: 1.6;
  margin: 1rem 0;
}

.intro {
  text-align: center;
  margin-bottom: 2rem;
}

.projects {
  margin-top: 3rem;
  
}

.project-list {
  display: flex;
  
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-list > * {
  flex: 1 1 calc(50% - 1.5rem);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-list > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
