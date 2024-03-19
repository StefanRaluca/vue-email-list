const { createApp } = Vue
createApp({
    data() {
        return {
          /*   emailAdress: null, */
            allEmails: 10,
            listEmails:[],


        }
    },
    methods: {
        callApi() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                   // console.log(response);

                    this.listEmails.push(response.data.response)
                   // console.log(this.listEmails);
                })
        },
        emailsGenerated(){
            for (let i = 0; i <this.allEmails; i++) {
               this.callApi()
                
            }
        },
    },
    mounted() {

  
     this.emailsGenerated();  


    }

}).mount('#app')
