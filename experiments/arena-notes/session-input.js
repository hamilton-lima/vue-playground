const sessionInput = {
  props: {
    comments: String,
  },
  template: `
    <div>
        <input type="text" v-model="comments"/>
        <button type="button" @click="save()">Save</button>
    </div>
    `,
  methods: {
    save() {
      console.log("before emit", this.comments);
      this.$emit("save", this.comments);
    },
  },
};

export { sessionInput };
