<template>
  <div>
    <h3>Contratos</h3>

    <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1 } }">LeadId = 1</router-link>
    <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>

    <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }">LeadId = 1 e servicoId_like = 2</router-link>
    <router-link class="btn btn-primary" to="/home/vendas/contratos?leadId_like=2&servicoId_like=2">ServicoId = 2</router-link>

    <table class="table table-hover">
      <thead>
        <th scope="col">id</th>
        <th scope="col">lead</th>
        <th scope="col">servico</th>
        <th scope="col">data inicio</th>
        <th scope="col">data fim</th>
      </thead>
      <tbody>
        <tr v-for="d in dados" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.lead.nome }}</td>
          <td>{{ d.servico.servico }}</td>
          <td>{{ d.data_inicio }}</td>
          <td>{{ d.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: 'Leads',
  mixins: [ApiMixin],
  data: () => ({
    includes: '_expand=lead&_expand=servico',
  }),
  created() {
      this.getDadosApi(`http://localhost:3000/contratos?${this.includes}`);
  },
  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString();
    const url = `http://localhost:3000/contratos?${this.includes}&${queryParams}`;
    this.getDadosApi(url)
    next()
  }
}
</script>