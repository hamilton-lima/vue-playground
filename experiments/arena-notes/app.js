import { sessionInput } from "./session-input.js";
const { createApp } = Vue;

var settings = {
  components: [sessionInput],
  methods: {
    newSession(data) {
      console.log("new session getting event", data);
    },
  },
};

const app = createApp(settings);
app.component('session-input', sessionInput)
app.mount("#app");
