export default {
    data: () => ({
        dados: null 
    }),
    methods: {
        getDadosApi(url, queryParams = {}) {
            // aqui chamaremos os dados salvosd no nosso json-server

            Object.keys(queryParams).forEach(chave => {
                if (queryParams[chave] === '') delete this.formPesquisa[chave];
            });
        
            const urlQueryParams = new URLSearchParams(queryParams).toString();

            const urlCompleta = urlQueryParams ? `${url}&${urlQueryParams}` : url 

            fetch(urlCompleta)
            .then(response => {
                return response.json(); 
            })
            .then(response => {
                this.dados = response;
            })
        },
    },
}