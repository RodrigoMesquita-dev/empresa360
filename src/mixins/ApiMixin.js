export default {
    data: () => ({
        dados: null 
    }),
    methods: {
        getDadosApi(url) {
            // aqui chamaremos os dados salvosd no nosso json-server
            fetch(url)
            .then(response => {
                return response.json(); 
            })
            .then(response => {
                this.dados = response;
            })
        },
    },
}