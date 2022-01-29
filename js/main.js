const app = Vue.createApp({
    data: () => ({
        title: "Contact form",
        user: {
            name: "",
            age: 0,
            languages: [],
            genre: "m"
        }
    }),
    methods: {
        handleSubmit() {
            console.log(this.user)
        }
    },
    computed: {
        completeName() {
            return this.user.name + " " + this.user.age
        }
    }
});

const mountApp = app.mount("#app")