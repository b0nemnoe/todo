<template>
  <div>
    <h1>Feladat Szerkesztése</h1>
    <TaskForm :initialTask="task" @submit="updateTask" />
  </div>
</template>

<script>
import { useTaskStore } from '@/stores';
import TaskForm from '../components/TaskForm.vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  components: { TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const route = useRoute();
    const router = useRouter();
    const task = taskStore.tasks.find((t) => t.id === Number(route.params.id));
    const updateTask = (updatedTask) => {
      taskStore.updateTask(updatedTask);
      router.push('/tasks');
    };
    return { task, updateTask };
  },
};
</script>
