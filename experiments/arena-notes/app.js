import * as sessionInput from "./session-input.js";
const { createApp } = Vue;

var settings = {
  components:{ 
    sessionInput
  },
  methods: {
    newSession(data) {
      console.log("data", data);
    },
  },
  template: `
    <session-input @save="newSession"></session-input>
  `
};

// const app = Vue.createApp(settings).mount("#app");
const app = createApp(settings)
app.mount('#app')

console.log("app", app);

