<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" exact-active-class="active" to="/home/dashboard">
                   <i class="bi bi-speedometer2"></i> Dashboard
                </router-link>
                <router-link class="list-group-item list-group-item-action" exact-active-class="active" to="/home/vendas">
                  <i class="bi bi-cart"></i> vendas
                </router-link>
                <router-link class="list-group-item list-group-item-action" exact-active-class="active" to="/home/vendas/leads">
                  <i class="bi bi-caret-right"></i> Leads
                </router-link>
                <router-link class="list-group-item list-group-item-action" exact-active-class="active" :to="{ name: 'contratos' }">
                  <i class="bi bi-caret-right"></i> Contratos
                </router-link>
                <router-link class="list-group-item list-group-item-action" exact-active-class="active" :to="{ name: 'abc' }">
                  <i class="bi bi-card-checklist"></i> servicos
                </router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view></router-view>
                </div>

            </div>
        </div>

        <div class="rodape">
            <router-view name="rodape"></router-view>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

/* é possível mudar o nome da classe usando uma props */
 /* .router-link-active {
    color: #fff;
    background-color: #7da1d7;
    border-color: #7da1d7;
} as rotas ativas  (correspondencia inclusiva) */

/* .router-link-exact-active {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
} apenas a exata rota ativa (correspondencia exata) */

.ativa {
    color: #fff;
    background-color: #f00;
    border-color: #f00;
}

.rodape {
    position:fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ccc;
}

</style>