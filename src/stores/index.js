import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || [], // 
  }),
  actions: {
    addTask(task) {
      if (!task.title) return;
      this.tasks.push(task);
      this.saveTasks();

    },
    updateTask(updatedTask) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
        this.saveTasks();
      }
    },
    toggleTaskStatus(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.isFinished = !task.isFinished;
        this.saveTasks();
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
        
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    clearTasks() {
      this.tasks = [];
      this.saveTasks();
    }
    
  },
});
