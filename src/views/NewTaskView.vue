<template>
  <div>
    <h1>Új Feladat</h1>
    <TaskForm @submit="addTask" />
  </div>
</template>

<script>
import { useTaskStore } from '@/stores';
import TaskForm from '../components/TaskForm.vue';
import { useRouter } from 'vue-router';

export default {
  components: { TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const router = useRouter();
    const addTask = (task) => {
      taskStore.addTask({ ...task, id: Date.now() });
      router.push('/tasks');
    };
    return { addTask };
  },
};
</script>
