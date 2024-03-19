const { createApp } = Vue
createApp({
    data() {
        return {
            emailAdress: null,

        }
    },
    methods: {
        callApi() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    console.log(response);

                    this.emailAdress = response.data.response
                    console.log(this.emailAdress);
                })
        }
    },
    mounted() {

        this.callApi()

    }

}).mount('#app')
