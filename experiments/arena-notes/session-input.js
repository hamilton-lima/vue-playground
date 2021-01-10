const sessionInput = {
  template: `
    <div>
        <input type="text" 
          v-bind:value="comments"
          v-on:input="update($event.target.value)"
        />
        <button type="button" @click="save()">Save</button>
    </div>
    `,
    data() {
      return {
        comments: "start"
      };
    },
    methods: {
    update(input){
      console.log("on update", this.comments);
      this.comments = input;
    },
    save() {
      console.log("before emit", this.comments);
      this.$emit("save", this.comments);
    },
  },
};

export { sessionInput };
