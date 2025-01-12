<template>
  <div>
    <h1>Feladatok</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h3>{{ task.title }}</h3>
        <p>{{ task.desc }}</p>
        <p>Határidő: {{ task.deadline }}</p>
        <button @click="toggleStatus(task.id)">
          {{ task.isFinished ? 'Folyamatban' : 'Kész' }}
        </button>
        <router-link :to="'/edittask/' + task.id">Szerkesztés</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from './store';

export default {
  setup() {
    const taskStore = useTaskStore();
    const deleteTask = (id) => {
      if (confirm('Biztosan törölni szeretnéd ezt a feladatot?')) {
        taskStore.deleteTask(id);
      }
    }
    return {
      tasks: taskStore.tasks,
      toggleStatus: taskStore.toggleTaskStatus,
      deleteTask,
    };
  },
};
</script>