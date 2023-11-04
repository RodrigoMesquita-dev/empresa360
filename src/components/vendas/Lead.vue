<template>
    <div>
        <h3>Lead {{ this.$route.params.id }} - {{ this.dados.nome }}</h3>
        <hr/>
        <div class="mb-3 row">
            <label for="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="this.dados.id">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control" :value="this.dados.nome">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control" :value="this.dados.telefone">
            </div>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
    name: 'Lead',
    data: () => {
        return {
            dados: {},
        };
    },
    mixins: [ApiMixin],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>