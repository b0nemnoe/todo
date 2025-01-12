<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Cím:</label>
      <input v-model="task.title" id="title" required />
    </div><br>
    <div>
      <label for="desc">Leírás:</label>
      <textarea v-model="task.desc" id="desc" required></textarea>
    </div><br>
    <div>
      <label for="deadline">Határidő:</label>
      <input type="date" v-model="task.deadline" id="deadline" required />
    </div><br>
    <button type="submit" id="save">Mentés</button>
  </form>
</template>

<script>
export default {
  props: {
    initialTask: {
      type: Object,
      required: false,
      default: () => ({
        title: '',
        desc: '',
        deadline: '',
        isFinished: false,
      }),
    },
  },
  data() {
    return {
      task: { ...this.initialTask },
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.task);
    },
  },
};
</script>
<style>
form{
  background-color: rgb(170, 170, 170);
  border: solid 1px rgb(0, 0, 0);
  border-radius: 10px;
  padding: 15px;
  max-width: 200px;
}
#save {
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
}

#save:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

#save:hover {
  background-color: #2c974b;
}

#save:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

#save:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

#save:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>
