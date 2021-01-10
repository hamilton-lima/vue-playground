import { sessionInput } from "./session-input.js";
const { createApp } = Vue;

var settings = {
  components: [sessionInput],
  methods: {
    newSession(data) {
      console.log("data", data);
    },
  },
  template: `
    <session-input @save="newSession"></session-input>
  `,
};

const app = createApp(settings);
app.component('session-input', sessionInput)
app.mount("#app");
