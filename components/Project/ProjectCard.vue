<!-- components/Project/ProjectCard.vue -->
<template>
  <div class="project-card" @click="openProject">
    <div class="project-image">
      <img :src="project.image" :alt="project.title" />
      <div class="project-overlay">
        <span class="view-project">View Project</span>
      </div>
    </div>

    <div class="project-content">
      <span class="project-category">{{ project.category }}</span>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-tech">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 3" class="tech-tag-more">
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const openProject = () => {
  // We'll implement project modal/detail page later
  console.log('Opening project:', props.project.title)
}
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(59, 130, 246, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: #1f2937;
  line-height: 1.4;
}

.project-description {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #eff6ff;
  color: #1d4ed8;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.tech-tag-more {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>