<template>
  <div>
    <h1>Feladatok Listája</h1>
    <button @click="clearAllTasks" class="clear-button">Összes törlése</button>
    <div>
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <!--<form>
          
        </form>-->
        <div id="card">
          <h3>{{ task.title }}</h3><br>
          <p>{{ task.desc }}</p><br>
          <p>Határidő: {{ task.deadline }}</p><br>
          <p>Állapot: {{ task.isFinished ? 'Kész' : 'Folyamatban' }}</p><br>
          <div id="grid">
            <button id="status" @click="toggleTaskStatus(task.id)">
            {{ task.isFinished ? 'Visszaállítás' : 'Kész' }}
            </button>
            <router-link :to="'/edittask/' + task.id">Szerkesztés</router-link><br>
            <button id="delete" @click="deleteTask(task.id)">Törlés</button><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores';

export default {
  setup() {
    const taskStore = useTaskStore();

    const toggleTaskStatus = (id) => {
      taskStore.toggleTaskStatus(id);
    };

    const deleteTask = (id) => {
      if (confirm('Biztosan törölni szeretnéd ezt a feladatot?')) {
        taskStore.deleteTask(id);
      }
    };

    const clearAllTasks = () => {
      if (confirm('Biztosan törölni szeretnéd az ÖSSZES feladatot?')) {
        taskStore.clearTasks();
      }
    };

    return {
      tasks: taskStore.tasks,
      toggleTaskStatus,
      deleteTask,
      clearAllTasks,
    };
  },
};
</script>

<style scoped>
#grid{
  display: grid;
}

#status {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  margin-bottom: 5px;
}

#status:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

#status:hover {
  background-color: #2c974b;
}

#status:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

#status:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

#status:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

a {
  appearance: none;
  background-color: #00b7ff;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  margin-bottom: 5px;
}

a:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

a:hover {
  background-color: rgb(0, 183, 255);
}

a:focus {
  box-shadow: rgba(0, 147, 205, 0.4) 0 0 0 3px;
  outline: none;
}

a:disabled {
  background-color: rgb(129, 218, 253);
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

a:active {
  background-color: rgb(34, 155, 203);
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

#delete {
  appearance: none;
  background-color: #961616;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

#delete:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

#delete:hover {
  background-color: #670101;
}

#delete:focus {
  box-shadow: rgba(103, 8, 8, 0.4) 0 0 0 3px;
  outline: none;
}

#delete:disabled {
  background-color: #904343;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

#delete:active {
  background-color: #961616;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

ul {
  list-style-type: none;
}
#card{
  /*display: grid;*/
  background-color: rgb(170, 170, 170);
  border: solid 1px rgb(0, 0, 0);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;  
  width: 200px;
}

.task-item{
  display: flex;
  flex-direction: row;
}
.clear-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.clear-button:hover {
  background-color: #a71d2a;
}

template{
  top: 0;
}
</style>
