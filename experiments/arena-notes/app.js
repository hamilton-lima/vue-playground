var settings = {
  methods: {
    newSession(data) {
      console.log("data", data);
    },
  },
};

const app = Vue.createApp(settings).mount("#app");

console.log("app", app);

import * as sessionInput from "./session-input.js";
app.component("session-input", sessionInput);
