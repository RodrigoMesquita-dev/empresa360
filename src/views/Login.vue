<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <router-link class="nav-link" to="/" >Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary" @click="navegarPara">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Login',
    methods: {
        navegarPara(){
            // console.log(this.$router);

            // this.$router.push('/home') // vai adicionar uma entrada no histórico de navegação do browser. sem que seja feita uma requisição http

            // this.$router.push({ path: '/home' }) // também é possível enviar um objeto de configuração

            // this.$router.replace('/home') // o replace vai pra nova rota, mas substitui a url do browser (também dá pra mandar com obj de configuração)

            // this.$router.forward() // avança a navegação pelo histórico            
            // this.$router.back() // retrocede a navegação pelo histórico            
            // this.$router.go(2) // avança ou retrocede a navegação pelo histórico conforme a quantidade de passos
            // this.$router.go(-2) // avança ou retrocede a navegação pelo histórico conforme a quantidade de passos

            /* podemos usar esse método para implementar o login e dar um push no usuário se tudo
            der certo, isso é navegação programática. */
        }
    }
}
</script>