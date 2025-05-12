import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectDetail from '../views/ProjectDetail.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/project/:id',
      name: 'ProjectDetail',
      component: ProjectDetail,
      props: true,
    },
    {
      path: '/project/:id/edit',
      name: 'EditProject',
      component: EditProject,
      props: true,


    },
    {
      path: '/addproject',
      name: 'AddProject',
      component: AddProject,
    },
  ],
});

export default router;
