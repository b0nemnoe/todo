import { createRouter, createWebHistory } from 'vue-router';
import TasksView from '../views/TasksView.vue';
import NewTaskView from '../views/NewTaskView.vue';
import EditTaskView from '../views/EditTaskView.vue';

const routes = [
  { path: '/tasks', name: 'Tasks', component: TasksView },
  { path: '/newtask', name: 'NewTask', component: NewTaskView },
  { path: '/edittask/:id', name: 'EditTask', component: EditTaskView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;