// data() vai retornar dados pra o meu html->
// dentro do return são retornados pra o front ->
// methods funções de aplicação -->
const NomeDaConstante = {
    data(){
        return{
            name: "",
            age: 19,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            
            e.preventDefault();

            console.log(this.input_name);
            
            this.name = this.input_name;
        }
    }

}

Vue.createApp(NomeDaConstante).mount("#app")