export default {
    template: `
    <div>
        <input type="text" v-model="comments"></input>
        <button type="button" @click="save()"></button>
    </div>
    `,
    data: {
        comments: ""
    }, 
    methods :{
        save(){
            this.$emit('save', comments);
        }
    }
};
